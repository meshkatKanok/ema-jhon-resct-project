import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./Shop.css'

const Shop = (props) => {
  const {name,category,seller,price,img}=props.product;
  const {handleClick}=props;
 
  
   
 
    return (
        <div  className='shop-cart'>
            <div className='shop'>
                <img src={img} alt="" />
                <h4>Product Name:{name}</h4>
                <p className='category'>Category:{category}</p>
                <p className='seller'>Seller:{seller}</p>
                <p className='price'><small>Price:{price}</small></p>
            </div>
            <button className='btn' onClick={()=>handleClick(props.product)}>
                <p>Add to card</p>
                <FontAwesomeIcon className='icone' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Shop;