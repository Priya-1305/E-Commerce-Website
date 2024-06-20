// script.js

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addCartButtons = document.querySelectorAll('.add-to-cart');

    addCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentNode;
            const productName = product.querySelector('h2').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });

            updateCart();
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout successful!');
    });
});

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    cartList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((acc, item) => acc + parseInt(item.price), 0);
    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
}