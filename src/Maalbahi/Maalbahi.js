import React from 'react';
import './Maalbahi.css';

const Maalbahi = (props) => {
    const { maalbahi } = props;
    // console.log(maalbahi);
    let uiItems = [];
    let name = [];
    let image = [];
    for (const item of maalbahi) {


        uiItems.push(item);
        /* const exists = uiItems.find(uiItem => console.log(uiItem.id === item.id));
        if (exists) {
            console.log('Not matched');
        } else {
            console.log('matched');
        }


        console.log(uiItems);
        console.log(exists); */

        // if(item.id ===)
        //;'
        name.push(item.title);
        image.push(item.image);
    }
    return (
        <div className='cart'>
            <p className='cart-header'>Selected Items : {maalbahi.length} </p>

            <img src={image} alt="" />
            <p className='title-name'>{name.slice(0, 6)}</p>
        </div>
    );
};

export default Maalbahi;