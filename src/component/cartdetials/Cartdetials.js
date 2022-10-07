import React from 'react';
import './Cartdetials.css'

const Cartdetials = (props) => {
        
   const {items}=props;
   let total=0;
   let shipping=0;
   let quantity=0;
   for(const newItem of items){
   quantity=quantity+newItem.quantity;
   total=(total+newItem.price)*newItem.quantity;
   shipping=(shipping+newItem.shipping)*newItem.quantity

   };
   console.log(quantity);
   let tax=total*0.1;
   const taup=parseFloat(tax.toFixed(2))
   const GrandTotal=total+taup+shipping

    return (
      
            <div className='cart-detials'>
            <h1>Order Summary</h1>
            <h3>Seleted itmes:{quantity}</h3>
            <h4>Total Price:${total}</h4>
            <h5>Total Shipping:{shipping}</h5>
            <h5>Tax:{taup}</h5>
            <h4>Grand Total:{GrandTotal}</h4>
            </div>
            
   
    );
};

export default Cartdetials;