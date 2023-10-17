import Image from 'next/image'
import React from 'react'

const SmallCart = ({list}) => {
  return (
    <div className="modal--smallCart bg--shadow bg--radius font--center mr--20">
        <div className="overlay"></div>
        <div className=" flex flex--justify-content-center flex--align-items-center">
            <Image src={list.img} alt="" width="100" height="100" className='photo bg--radius position--relative'/>
             <span className='position--absolute color--white text fs--17 font--bold pd--5'>
                <p>{list.name}</p>
                <span>₹{list.price}</span>
             </span>
             </div>
            <span className='fint--center bg--error pl--15 pr--15 mb--5 bg--radius color--white'>
                    <button className='mr--10 fs--20 font--bold'>-</button>
                    <span>1</span>
                    <button className='ml--10 fs--18 font--bold'>+</button>
            </span>
    </div>
    )
}

export default SmallCart

