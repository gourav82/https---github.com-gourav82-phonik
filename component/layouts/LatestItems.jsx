import React, { useEffect, useState } from 'react'
import Card from './Card';
import { latestProductAPI } from '../../services/Product';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';

const LatestItems = ({displayToast}) => {
const [latestpro, setLatestPro] = useState();
const [modal, setModal] = useState(false);
  const [items,setItems] = useState({});

  const handleModal =(item)=>{
    setModal(!modal);
    setItems(item);
    console.log(items, "helooo uhfayhbf  ufciaf a")
}

useEffect(()=>{
    getLatestPro();
},[])

const getLatestPro=()=>{
    latestProductAPI().then((result) => {
        setLatestPro(result);
        console.log(result);
    }).catch((err) => {
        
    });
}

    return (
        <>
        <div className="container--responsive font--center">
            <span className='fs--25 font--bold'>Latest Items</span>
            <div className="flex flex--wrap mt--30">
            {latestpro?.products?.map((item,index)=>{
                return(
               <React.Fragment key={`peoduct-${index}`} >
                    <Card item={item} latest={true} handleModal={handleModal}/>
                </React.Fragment>
                )
            })}
            </div>
           <div className="block--auto mb--30 mt--30">
           <button className='width--column-two-10 bg--error pd--10 color--white fs--25 bg--radius'>See More</button>
           </div>
        </div>
        {modal? 
            <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
            <ModalCard items={items} handleModal={handleModal} displayToast={displayToast}/>
           </Modal>
            : ""}
            </>
    )
}

export default LatestItems