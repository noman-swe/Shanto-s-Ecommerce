const addToLocalStorage = id => {
    const cartObj = getStoredCart();

    const quantity = cartObj[id];
    if (!quantity) {
        cartObj[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        cartObj[id] = newQuantity;
    }
    localStorage.setItem('shanto-s-cart', JSON.stringify(cartObj));
}

const removeFromDb = id => {
    const cartObj = getStoredCart();
    if (id in cartObj) {
        delete cartObj[id];
        localStorage.setItem('shanto-s-cart', JSON.stringify(cartObj));
    }
}

const getStoredCart = () => {
    let cartObj = {};
    const storedCart = localStorage.getItem('shanto-s-cart');
    if (storedCart) {
        cartObj = JSON.parse(storedCart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}



export {
    addToLocalStorage,
    removeFromDb,
    getStoredCart
}