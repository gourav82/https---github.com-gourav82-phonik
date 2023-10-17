import React, { useEffect, useState } from 'react'
import CartProduct from '../../component/layouts/cart/CartProduct'
import CartDetails from '../../component/layouts/cart/CartDetails'
import { useSelector } from 'react-redux';
import useCheckMobileScreen from '../../component/hooks/useCheckMobileScreen';

const Cart = () => {
  const {isMobile, isIpad } = useCheckMobileScreen();
  const cartList = useSelector(state=>{return state.cartItem});

  return (
      <div className={`cart container--responsive flex ${isMobile || isIpad ? "flex--direction-column":"flex--justify-content-between"} mb--50`}>
        <div className="">
          <h3 className='font--center fs--20 font--bold color--error mb--20'>Total Items : {cartList.total}</h3>
        { cartList!=undefined && Array.isArray(cartList.cartList)?cartList.cartList.map((data, index)=>{
          
            return(
              <React.Fragment key={index}>
              <CartProduct data={data}/>
              </React.Fragment>
            )
          }):"cart is empty"+typeof cartList}
          </div>
        <CartDetails/>
      </div>
    )
}

export default Cart