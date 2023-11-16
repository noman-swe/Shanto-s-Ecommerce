import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { id, image, title, price, description, category, rating } = product;
    // console.log(product);

    

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <p className='product-name'>{title}</p>
                <p>Price : ${price}</p>
                <p><small>Category:{category} </small> </p>
                <p><small>Ratings: {rating.rate}</small>  </p>
                <p><small>description:{description.slice(0, 60)} </small> </p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>Add To Cart <span className='btn-icon'><FontAwesomeIcon icon={faCartPlus} />
            </span></button>
        </div>
    );
};

export default Product;