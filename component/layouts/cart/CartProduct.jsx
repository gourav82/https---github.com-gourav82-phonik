import Image from 'next/image'
import React from 'react'
import { BsTrashFill, BsStarFill } from "react-icons/bs";
import UseCheckMobileScreen from '../../hooks/UseCheckMobileScreen';
import { useDispatch } from 'react-redux';
import { removieItem, decrease, addToCart} from '../../../redux/slices/cartSlice';
import { getImageUrl } from '../../../helper/BaseUrl';

const CartProduct = ({data}) => {
  const {isMobile, isIpad } = UseCheckMobileScreen();

  const review = [0, 1, 2, 3, 4];

  const dispatch = useDispatch();
  const deleteItem =(id)=>{
    dispatch(removieItem(id))
  }

  return (
    <div className="cart--product bg--shadow bg--radius pt--10 pl--10 pr--10 pb--10 flex flex--align-items-center flex--justify-content-between mb--10">
      <div className="cart--product-img flex flex--align-items-center flex--justify-content-center">
        <Image src={getImageUrl(data.image,'product')} alt="" width="85" height="100" className='mr--10 bg--radius' />
        <span className='flex flex--direction-column'>
          <span>{data.name}</span>
          <ul className='flex mb--5 mt--5'>
            <li className='star-active'><BsStarFill /></li>
            <li className='star-active'><BsStarFill /></li>
            <li className='star-active'><BsStarFill /></li>
            <li className='star-active'><BsStarFill /></li>
            <li className='star-active'><BsStarFill /></li>
          </ul>
          <span>{data.price}</span>
        </span>
      </div>
      <span className={`flex flex--align-items-center ${isMobile || isIpad? "flex--direction-column":"flex--justify-content-between mt--10"}`}>
      <span className={`font--center fs--12 mr--${isMobile || isIpad? "":"10"} font--bold color--error mb--5`}>Quantity : {data.quantity}</span>
      <span className={`counter bg--radius bg--white-off ${isMobile || isIpad? "pl--5 pr--5 mb--5":"pl--10 pr--10 mr--10"}`}>
        <button className={`mr--${isMobile || isIpad? "5":"10"} fs--20 font--bold`} onClick={()=>dispatch(decrease(data))}>-</button>
        <span>1</span>
        <button className={`ml--${isMobile || isIpad? "5":"10"} fs--18 font--bold`} onClick={()=>dispatch(addToCart(data))}>+</button>
      </span>
      <button onClick={()=>deleteItem(data.id)}>
      <BsTrashFill className='color--error fs--20 bg--radius'/>
      </button>
      </span>
    </div>
  )

}

export default CartProduct