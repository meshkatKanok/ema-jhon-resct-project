import React, { useEffect, useState } from 'react';
import Cartdetials from '../cartdetials/Cartdetials';
import Shop from '../shop/Shop';
import {getStore, localStoreget} from '../utilites/fakebd';
import './Cart.css'
 
const Cart = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]) 
    const [items,setItem]=useState([])
    const handleClick=(pro)=>{
       const exists=items.find(product=>product.id===pro.id)
   if(!exists){
    pro.quantity=1;
    newProduts=[...items,pro]
   }
   else{
    const rest=items.filter(product=>product.id !==pro.id)
exists.quantity=exists.quantity+1;
newProduts=[...rest,exists]
   }
     
        setItem(newProduts); 
      localStoreget(pro.id)
     
    }

    useEffect(()=>{
        const newitemData=getStore();
        let savecart=[];
        for(const id in newitemData){
            const findData=data.find(product=>product.id===id);
           
           if(findData){
            const quantity=newitemData[id];
            findData.quantity=quantity
            savecart.push(findData);

           }
            
             
        }
       setItem(savecart)
    },[data])
    
   
  
    
   
    return (
        <div className='cart'>
            <div className='cart-item'>
             {
                data.map(product=><Shop handleClick={handleClick} key={product.id} product={product}></Shop>)
             }
            </div>
            <div className='cart-info'>
            <Cartdetials items={items}></Cartdetials>
            </div>
            
        </div>
    );
};

export default Cart;