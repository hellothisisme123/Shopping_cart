let item_list = [
    /*{ example of object syntax
        'name': 'item_1',
        'count': 0,
        'selector': $(`[${name}]`),
        'price': 'not set'
    }*/
]; //global variables must be defined outside of the setTimeout()
setTimeout(() => {

const shopping_items = document.querySelectorAll('.shopping_item');
shopping_items.forEach(item => {
    let tmp_item_data = {
        'name': item.getAttribute('data-name'),
        'count': 0,
        'selector': item,
        'price': item.getAttribute('data-price')
    };
    item_list.push(tmp_item_data);
    // log(item_list[item_list.length - 1])
});

item_list.forEach(item => {
    let price_label = document.createElement('p');
    let tmp = item.price;
    let tmpa = tmp.split('.')[1];
    if (tmpa == undefined) tmpa = 0;
    
    // if (tmpa.length == 1) tmpa = `${tmpa}0`;
    price_label.innerHTML = `$${tmpa}`;
    price_label.classList.add('price');
    item.selector.appendChild(price_label);
});

item_list.forEach(item => {
    item.selector.addEventListener('click', (e) => {
        let item = item_list.find((item) => { //the specific item that was clicked
            return item.selector == e.target
        });
        item.count++;
        log(item);
        log(parseFloat(item.price));
    });
});

/*shopping_items.forEach(item => {
    let tmp = {'count': 0, 'name': item.getAttribute('data-shopping-item'), 'selector': item };
    item_list.push(tmp);
    item.addEventListener('click', (e) => {
        let clicked_cart_object = item_list.find((item) => {
            return item.selector == e.target 
        })
        clicked_cart_object.count++;
        log(clicked_cart_object)
        // log(item_list)
    });
});*/
// log(shopping_items)

[
    {'item_name': '1', 'count': 1 },
    {'item_name': '1', 'count': 1 },
    {'item_name': '1', 'count': 1 }
]





}, 0);
