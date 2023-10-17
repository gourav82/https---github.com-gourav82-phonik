import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { allCategoryAPI } from '../../services/Product';
import { getImageUrl } from '../../helper/BaseUrl';

const Allcategory = () => {
const [category, setCategory] = useState();


useEffect(()=>{
    categoryApi();
},[])

const categoryApi =()=>{
    allCategoryAPI().then((res)=>{
        setCategory(res);
    })
}

    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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
                initialSlide: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };
  return (
       <div className="container--responsive font--center mt--50 mb--50">
    <h2 className='color--error font--bold fs--35 font--center mt--30'>All Brand</h2>
            <Slider {...settings}>
                {AllBrand.map((items,index)=>{
                    return(
            <div className='category' key={`cat-${index}`}>
                <Image src={items.img} alt={items.name} width={180} height={180} className='mb--15 mt--20'/>
                <span className='fs--15 font--bold pt--10'>{items.name}</span>
            </div>
                    )
                })}
           
            </Slider>
       </div>
    )
}

export default Allcategory


const AllBrand = [
    {
        img: "/assets/image/brand1.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/brand2.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/brand1.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/brand2.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/brand1.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    },
    {
        img: "/assets/image/brand2.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    },
    {
        img: "/assets/image/brand1.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    },
    {
        img: "/assets/image/brand2.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    },
    {
        img: "/assets/image/brand1.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    },
    {
        img: "/assets/image/brand2.jpg",
        alt: "spice heaven dish",
        catName:"brand1"
    }
]