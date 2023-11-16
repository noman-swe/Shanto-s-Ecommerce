import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Dokan.css';
import Maalbahi from '../../Maalbahi/Maalbahi';

const Dokan = () => {
    const [items, setItems] = useState([]);
    const [maalbahi, setMaalbahi] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);


    const handleAddToCart = selectItem => {
        // console.log(selectItem);    
        const newMaalbahi = [...maalbahi, selectItem];
        setMaalbahi(newMaalbahi);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        handleAddToCart={handleAddToCart}
                    ></Item>)
                }
            </div>
            <div className="cart-container">
                <Maalbahi
                    maalbahi={maalbahi}
                >
                </Maalbahi>
            </div>
        </div>
    );
};

export default Dokan;