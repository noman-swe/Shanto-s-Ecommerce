import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { showProductsDetailsInUi } from '../../utilities/showUiCart';
import { addToLocalStorage, removeFromDb, getStoredCart } from '../../utilities/localStorageSave';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // reload ew jate product thake ::
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedItem = products.find(product => product.id === id);
            if (addedItem) {
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [products])


    const handleAddToCart = selectedProduct => {
        // cart.push(selectedProduct);

        // new array te 2 ta data kei push kore dilam:-
        let newCart = [];
        
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);

        addToLocalStorage(selectedProduct.id);
        //form the above console.log we can see :cart er moddhy ekhn sob addtoCart kora item giye set hocchy array of object hisheb e;


    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                >

                </Cart>
            </div>
        </div>
    );
};

export default Shop;