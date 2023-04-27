function set_price(item_id, products) {
    if (item_id === "*") {
        for (let i=0; i < products.length; i++) {
            set_new_price(products[i].price);
        }
    } 
};

function set_new_price(products, dynamic) {
    if (dynamic = true )
}; 