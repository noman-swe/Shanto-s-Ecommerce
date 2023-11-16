import React from 'react';
import './Item.css';

const Item = (props) => {
    const { item, handleAddToCart } = props;
    const { image, title, price, category, rating } = item;

    return (
        <div className='item-wraper'>
            <img src={image} alt="" />
            <div className="item-info">
                <p className='title'>{title}</p>
                <p>Price : ${price}</p>
                <p>Category : {category}</p>
                <p>Rating: {rating.rate}</p>
            </div>
            <button className='btn-add' onClick={()=> handleAddToCart(item)}>Add To Cart </button>
        </div>
    );
};

export default Item;