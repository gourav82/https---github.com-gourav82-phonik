import Link from 'next/link';
import React from 'react'
import { BsHouseFill, BsCart3,BsFillBagHeartFill,BsFillSuitHeartFill,BsGridFill } from "react-icons/bs";
import { useSelector } from 'react-redux';


const FooterMobile = () => {
  const cartList = useSelector(state=>{return state.cartItem});

  return (
        <ul className='footer--mobile flex flex--justify-content-around flex--align-items-center pt--15 pb--10 bg--shadow bg--white'>
            <li className='flex flex--direction-column flex--align-items-center'>
            <Link href={"/"}><BsHouseFill className='fs--25 color--grey'/></Link>
             <span>Home</span>
            </li>
            <li className='flex flex--direction-column flex--align-items-center'>
            <span className='position--relative flex flex--justify-content-end flex--align-items-start'>
          <Link href={"/cart"}> <BsCart3 className='fs--25 color--grey font--bold'/></Link> 
            <span className='fs--13 header--menu-cart position--absolute bg--error flex flex--justify-content-center flex--align-items-center'>{cartList.total}</span>
          </span>
          <span>Cart</span>
            </li>
            <li className='flex flex--direction-column flex--align-items-center'>
            <Link href={"/"}><BsFillBagHeartFill className='fs--25 color--grey'/></Link>
             <span>Order</span>
            </li>
            <li className='flex flex--direction-column flex--align-items-center'>
            <Link href={"/"}><BsFillSuitHeartFill className='fs--25 color--grey'/></Link>
             <span>Favourite</span>
            </li>
            <li className='flex flex--direction-column flex--align-items-center'>
            <Link href={"/"}><BsGridFill className='fs--25 color--grey'/></Link>
             <span>Menu</span>
            </li>
        </ul>
    )
}

export default FooterMobile