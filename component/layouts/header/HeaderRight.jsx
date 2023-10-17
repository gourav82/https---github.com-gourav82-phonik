import React, { useState } from 'react'
import Input from '../../core/Input'
import { BsCart3, BsList } from "react-icons/bs";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';


const HeaderRight = ({toggleDrawer}) => {
  const cartList = useSelector(state=>{return state.cartItem});
  const {isMobile, isIpad } = useCheckMobileScreen();

  return (
    <>
      <div className="header--menu cart-mobile width--column-two-10 flex flex--justify-content-between flex--align-items-center">
        <Input headerSearch={true} className="header--menu-search" />
        <div className="flex flex--justify-content-between flex--align-items-center">
        {isMobile || isIpad ? "":
          <span className='position--relative flex flex--justify-content-end flex--align-items-start header--menu-hover'>
          <Link href={"/cart"}> <BsCart3 className='fs--25 ml--20'/>
          </Link> 
            <span className='fs--12 header--menu-cart position--absolute bg--error flex flex--justify-content-center flex--align-items-center'>{cartList.total}</span>
          </span>
        }
        {isMobile || isIpad?
          <BsList className='fs--25 ml--30' onClick={toggleDrawer}/>
          : 
          <Link href={"/profile"}>
          <BsList className='fs--25 ml--30'/>
          </Link>
        }
        </div>
      </div>

    </>
  )
}

export default HeaderRight