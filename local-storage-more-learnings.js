const addProduct = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    displayProductOnUi(product, quantity);
    saveToLocalStorage(product, quantity);
};

const displayProductOnUi = (product, quantity) => {
    const getElement = document.getElementById('product-Container');
    const createLi = document.createElement('li');
    createLi.innerText = `${product}: ${quantity}`;
    getElement.appendChild(createLi);

}


const getStoredCart = () => {
    let cart = {};
    const storedCard = localStorage.getItem('cart');
    if (storedCard){
        cart = JSON.parse(storedCard);
    }
    return cart;
}

const saveToLocalStorage = (product, quantity) => {
    const cart = getStoredCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const displayProductFromoLocalStorage = () => {
    const savedCard = getStoredCart();
    console.log(savedCard);

    for (const product in savedCard){
        const productValue = savedCard[product];
        console.log( product , productValue);

        displayProductOnUi(product, productValue);
    }


}

displayProductFromoLocalStorage();

// getStoredCart();