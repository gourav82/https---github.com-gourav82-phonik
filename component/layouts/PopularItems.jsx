import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from './Card';
import { popularProductAPI } from '../../services/Product';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';


const PopularItems = ({displayToast}) => {
  const [latestpro, setLatestPro] = useState();
  const [modal, setModal] = useState(false);
  const [items,setItems] = useState({});

  const handleModal =(item)=>{
    setModal(!modal);
    setItems(item);
}

useEffect(()=>{
    getpopularPro();
},[])

const getpopularPro=()=>{
  popularProductAPI().then((result) => {
        setLatestPro(result);
        // console.log(result);
    }).catch((err) => {
        
    });
}
    var settings = {
      autoplay:true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>    
    <h2 className='color--error font--bold fs--35 font--center mt--30'>Latest Product</h2>
    <Slider {...settings} className='container--responsive'>
   {products.map((item,index)=>{
                return(
               <div key={`peoduct-${index}`} >
                    <Card item={item} handleModal={handleModal}/>
                </div>
                )
            })}
   </Slider>

{modal? 
  <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
  <ModalCard items={items} handleModal={handleModal} displayToast={displayToast}/>
 </Modal>
  : ""}
  </>

    )
}

export default PopularItems

const products =[
  {
    img:"/assets/image/phonik5.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"2",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik2.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"4",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik3.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"5",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik4.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"3",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik3.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"2",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik4.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"4",
    mrp:"15"
  },
  {
    img:"/assets/image/phonik5.jpg",
    name:"Rose Agarbatti",
    stick:"18",
    price:"10",
    avg_review:"1",
    mrp:"15"
  }
]