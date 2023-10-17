import Image from 'next/image'
import React, { useState } from 'react'
import { BsSuitHeart,BsStar,BsStarFill } from "react-icons/bs";
import Modal from './ModalCard';
import { getImageUrl } from '../../helper/BaseUrl';


const Card = ({item,latest,handleModal}) => {
    const review = [0, 1, 2, 3, 4];

// console.log(item);

  return (
    <>
            <div className={`bg--radius bg--shadow ${latest? "latest": "cat width--column-90 mt--30 mb--30 ml--10"}`}>
            <div className="position--relative flex flex--justify-content-end flex--align-items-start">
            <Image src={item.img} width={300} height={200} alt='' className='bg--radius'/>
             <BsSuitHeart className='position--absolute color--white mt--10 mr--10 font--bold fs--20'/> 
             </div>
             <div className="font--center mt--20">
                <span >{item.name}</span>
                <ul className='flex flex--align-items-center flex--justify-content-center mt--10 mb--10'>
                    {
                        review.map((pro, index) => {
                            if (index <= item.avg_review)
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
                    <span className='color--error font--bold '>Total Stick: {item.stick}</span>
                    <span className='flex flex--align-items-center flex--justify-content-around mt--10'>
                        <span className='color--grey font--strike-through'>₹{item.mrp}</span>
                        <span className='color--error font--bold '>₹{item.price}</span>
                    </span>

                    <button className='bg--error color--white bg--radius pd--10 mb--20 mt--15' onClick={()=>handleModal(item)}>Quick View</button>
             </div>
         </div>

         </>
    )
}

export default Card