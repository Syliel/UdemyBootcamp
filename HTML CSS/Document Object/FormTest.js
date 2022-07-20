const form = document.querySelector('form');
const list = document.querySelector('#list');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const products = form.elements.product;
    const qtys = form.elements.qty;
    const newItem = document.createElement('li');
    newItem.innerText = `${qtys.value} ${products.value}`
    list.appendChild(newItem);
    products.value = '';
    qtys.value = '';
});

// const addItem = (product, qty) => {
//     const newItem = document.createElement('li');
//     newItem.append(`${qty} `);
//     newItem.append(product);
//     list.append(newItem);

// };

// const addItem = (product, qty) => {
//     const newItem = document.createElement('li');

//     list.appendChild(newItem);
// }