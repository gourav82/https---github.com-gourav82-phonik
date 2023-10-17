import React from 'react'
import { BsSearch } from "react-icons/bs";

const Input = ({headerSearch,promo}) => {
  return (
    <div className="mt--10 position--relative common-input header--menu-search flex flex--justify-content-end flex--align-items-center">
    <input type="text" className='footer--logo-input width--column-one bg--radius bg--grey-light pd--15 border--none' placeholder={`${headerSearch ? "Type something and hite enter.. ": promo? "Enter Promo Code": "Your Email Address.."}`} />
   {headerSearch ? <BsSearch className='position--absolute mr--10'/>:
    promo?    <button type='button' className='footer--logo-subscribe position--absolute mr--5 color--white fs--16 font--medium pd--10 bg--error bg--radius'>Apply</button>:

   <button type='button' className='footer--logo-subscribe position--absolute mr--5 color--white fs--16 font--medium pd--10 bg--error bg--radius'>Subscribe</button>
   }
</div>  )
}

export default Input