function searchItem() {
    var itemId = document.getElementById('item-id').value;

    // Reset item details
    document.getElementById('item-details').innerHTML = '';

    // Fetch item details
    fetch('https://api.mercadolibre.com/items/' + itemId)
        .then(response => response.json())
        .then(data => {
            // Display item details
            var itemDetailsHtml = '<table class="table">';
            itemDetailsHtml += '<tr><th>ID</th><td>' + data.id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Title</th><td>' + data.title + '</td></tr>';
            itemDetailsHtml += '<tr><th>Price</th><td>' + data.price + ' ' + data.currency_id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Base Price</th><td>' + data.base_price + ' ' + data.currency_id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Original Price</th><td>' + data.original_price + ' ' + data.currency_id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Initial Quantity</th><td>' + data.initial_quantity + '</td></tr>';
            itemDetailsHtml += '<tr><th>Listing Type ID</th><td>' + data.listing_type_id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Condition</th><td>' + data.condition + '</td></tr>';
            itemDetailsHtml += '<tr><th>Permalink</th><td><a href="' + data.permalink + '">' + data.permalink + '</a></td></tr>';
            itemDetailsHtml += '<tr><th>Shipping Mode</th><td>' + data.shipping.mode + '</td></tr>';
            itemDetailsHtml += '<tr><th>Shipping Methods</th><td>' + data.shipping.methods.join(', ') + '</td></tr>';
            itemDetailsHtml += '<tr><th>Shipping Dimensions</th><td>' + JSON.stringify(data.shipping.dimensions) + '</td></tr>';
            itemDetailsHtml += '<tr><th>Local Pick Up</th><td>' + data.shipping.local_pick_up + '</td></tr>';
            itemDetailsHtml += '<tr><th>Free Shipping</th><td>' + data.shipping.free_shipping + '</td></tr>';
            itemDetailsHtml += '<tr><th>Logistic Type</th><td>' + data.shipping.logistic_type + '</td></tr>';
            itemDetailsHtml += '<tr><th>Store Pick Up</th><td>' + data.shipping.store_pick_up + '</td></tr>';
            itemDetailsHtml += '<tr><th>Status</th><td>' + data.status + '</td></tr>';
            itemDetailsHtml += '<tr><th>Warranty</th><td>' + data.warranty + '</td></tr>';
            itemDetailsHtml += '<tr><th>Catalog Product ID</th><td>' + data.catalog_product_id + '</td></tr>';
            itemDetailsHtml += '<tr><th>Last Updated</th><td>' + data.last_updated + '</td></tr>';
            itemDetailsHtml += '</table>';

            document.getElementById('item-details').innerHTML = itemDetailsHtml;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('item-details').innerHTML = '<p>Error fetching item details. Please try again later.</p>';
        });
}

  