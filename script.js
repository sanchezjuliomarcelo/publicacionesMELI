function searchItem() {
    const itemId = document.getElementById('item-id').value;
    const url = `https://api.mercadolibre.com/items/${itemId}?include_attributes=all`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayItemDetails(data))
      .catch(error => console.error('Error:', error));
  }
  
  function displayItemDetails(item) {
    const itemDetailsContainer = document.getElementById('item-details');
    itemDetailsContainer.innerHTML = '';
  
    const table = document.createElement('table');
    table.classList.add('table');
  
    const propertiesToShow = ['id', 'title', 'price', 'base_price', 'original_price', 'initial_quantity', 'listing_type_id', 'condition', 'permalink', 'status', 'warranty', 'catalog_product_id', 'last_updated'];
  
    propertiesToShow.forEach(property => {
      if (item.hasOwnProperty(property)) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
  
        cell1.textContent = property;
        const value = item[property];
        if (typeof value === 'object' && value !== null) {
          // If the property value is an object, format it for display
          let formattedValue = '';
          for (const subKey in value) {
            if (value.hasOwnProperty(subKey)) {
              if (typeof value[subKey] === 'object' && value[subKey] !== null) {
                formattedValue += `${subKey}:\n`;
                for (const subSubKey in value[subKey]) {
                  if (value[subKey].hasOwnProperty(subSubKey)) {
                    formattedValue += `  ${subSubKey}: ${JSON.stringify(value[subKey][subSubKey])}\n`;
                  }
                }
              } else {
                formattedValue += `${subKey}: ${JSON.stringify(value[subKey])}\n`;
              }
            }
          }
          cell2.textContent = formattedValue;
        } else {
          cell2.textContent = value;
        }
      }
    });
  
    // Show shipping details in separate columns
    for (const key in item.shipping) {
      if (item.shipping.hasOwnProperty(key)) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
  
        cell1.textContent = key;
        cell2.textContent = JSON.stringify(item.shipping[key]);
      }
    }
  
    itemDetailsContainer.appendChild(table);
  }
  
  
  
  