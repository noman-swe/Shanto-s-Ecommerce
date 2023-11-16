import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    
    const { cart } = props;
    // console.log(cart);

    let price = 0;
    let quantity = 0;
    for (const product of cart) {

        quantity = quantity + product.quantity ;
        price = price + product.price;
    }


    return (
        <div className='cart'>
            <h4>Selected Items {quantity}</h4>
            <h4>Items Price : ${price}</h4>
            <div className="cart-item-container">
                <p>
                    <div className="left-decoration">
                        <img src="" alt="" />
                        <span className='itemName'></span>
                    </div>
                    <FontAwesomeIcon icon={faTrash} />

                </p>
            </div>
        </div>
    );
};

export default Cart;