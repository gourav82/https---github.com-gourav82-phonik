import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsSuitHeart, BsX,BsStar ,BsStarFill} from "react-icons/bs";
import SmallCart from './SmallCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { getImageUrl } from '../../helper/BaseUrl';


const ModalCard = ({handleModal,items,displayToast}) => {
    const review = [0, 1, 2, 3, 4];


    useEffect(()=>{
console.log(items);
    })
    const dispatch = useDispatch();

    const handleAddToCart =(items)=>{
       dispatch(addToCart(items));
       handleModal(false);
       displayToast();
    }
  return (
    <>   
    {/* <div className="overlay-modal"></div> */}
     <div className="modal font--right pl--10 pr--10 pt--5 pb--5">
        <BsX onClick={handleModal} className='fs--25 color--error'/>
        <div className="modal--product flex flex--justify-content-between mb--10">
            <Image src={getImageUrl(items.image,'product')} alt="" width="150" height="100" className='bg--radius'/>
            <div className="width--column-60">
                <span className='flex flex--justify-content-between flex--align-items-center font--left mb--10'>
                    <span>{items?.name}</span>
                    <BsSuitHeart/>
                </span>
                <span className='flex flex--justify-content-between flex--align-items-center mb--10'>
                <ul className='flex flex--align-items-center flex--justify-content-center mt--15'>
                    {
                        review.map((pro, index) => {
                            if (index <= items?.avg_review)
                                return (
                                    <li key={`lin-${index}`} className='star-active'><BsStarFill /></li>
                                )
                            else {
                                return (
                                    <li key={`lin-${index}`}><BsStar /></li>
                                )
                            }
                        })
                    }
                    </ul>
                <span>Veg</span>
                </span>
                <span className='flex flex--justify-content-between flex--align-items-center mb--10'>
                <span className='font--left'>
                <span className='color--error font--bold'>{items?.mrp}</span>
                <p className='font--bold mt--10'>Quantity: {items?.quantity}</p>
               </span>
                <span className='counter bg--radius'>
                    <button className='mr--10 fs--20 font--bold'>-</button>
                    <span>1</span>
                    <button className='ml--10 fs--18 font--bold'>+</button>
                </span>
                </span>
            </div>
        </div>
         <div className="modal--description font--left">
        <p className='mb--10 fs--20 font--bold'>Description</p>
        <p>Quantity <span className='color--error'>(Optional)</span></p>
        <span className='flex flex--justify-content-between flex--align-items-center mb--10 mt--10'>
            <div className="form--group">
            <input type="radio" name="topping" value="Medium" id="medium" />
            <label htmlFor="medium">Medium</label>
            </div>
            <span>₹500</span>
        </span>
        <span className='flex flex--justify-content-between flex--align-items-center'>
            <div className="form--group">
            <input type="radio" name="topping" value="Medium" id="medium" />
            <label htmlFor="medium">Large</label>
            </div>
            <span>₹500</span>
        </span>

        <p className='mb--10 mt--10 fs--20 font--bold'>Addons</p>
        <div className='flex'>
        {smallCardDetails.map((list, index)=>{
            return(
              <React.Fragment key={`cart-${index}`}>
                 <SmallCart list={list}/>
              </React.Fragment>
            )
        })}
        </div>
        </div>
        <div className="font--left mt--10">
            <span className=' fs--18 font--bold'>Total Amount: <span className='color--error'>₹500</span></span>
            <button className='bg--error color--white fs--18 width--column-one bg--radius pt--5 pb--5 mt--10 font--bold' onClick={()=>handleAddToCart(items)}>Add To Cart</button>
        </div>
     </div>

     </>

    )
}

export default ModalCard


const smallCardDetails =[
    {
        img:"/assets/image/coke.png",
        name:"Coke",
        price:"₹100"

    },
    {
        img:"/assets/image/water.png",
        name:"Water",
        price:"₹100"

    },
    {
        img:"/assets/image/coke.png",
        name:"Coke",
        price:"₹100"

    }
]