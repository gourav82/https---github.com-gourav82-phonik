import React from 'react'
import Input from '../../core/Input'
import UseCheckMobileScreen from '../../hooks/UseCheckMobileScreen';

const cartDetails = () => {
  const {isMobile, isIpad } = UseCheckMobileScreen();

  return (
    <div className={`cart--details bg--shadow width--column-${isMobile || isIpad? "one":"two-10"} bg--radius pl--20 pr--20 pt--15 pb--15`}>
        <div className="cart--details-poromo flex flex--align-items-center flex--justify-content-center">
          <Input promo={true}/>
        </div>
        <div className="cart--details-delivery mt--15">
          <p className='fs--20 font-bold'>Delivary Option</p>
          <span>
            <div className="mt--10">
              <input type="radio" />
              <span className='ml--10'>Home</span>
            </div>
            <div className="mt--10">
              <input type="radio" />
              <span className='ml--10'>Take Away</span>
            </div>
          </span>
        </div>
        <ul className='cart--details-price mt--15'>
          <li  className='flex flex--align-items-center flex--justify-content-between mb--15 '>
            <span>Items Price</span>
            <span>₹651.00</span>
          </li>
          <li  className='flex flex--align-items-center flex--justify-content-between mb--15'>
            <span>GST</span>
            <span>(+)₹00.00</span>
          </li>
          <li  className='flex flex--align-items-center flex--justify-content-between mb--15'>
          <span>Addons</span>
            <span>(+)₹00.00</span>
          </li>
          <li  className='flex flex--align-items-center flex--justify-content-between mb--15'>
          <span>Discount</span>
            <span>(-)₹00.00</span>
          </li>
          <li  className='flex flex--align-items-center flex--justify-content-between mb--15'>
          <span>Coupan Discount</span>
            <span>(-)₹00.00</span>
          </li>
        </ul>
        <span className='flex flex--align-items-center flex--justify-content-between mb--15 color--error mt--20'>
        <span className='fs--20 font--bold'>SubTotal</span>
            <span className='fs--20 font--bold'>₹650.00</span>
        </span>
        <button className='bg--error bg--radius width--column-one color--white fs--20 font--bold pt--10 pb--10 mt--20'>Continue Checkout</button>

    </div>
    )
}

export default cartDetails