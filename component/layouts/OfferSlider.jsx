import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const OfferSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

      };
  return (
    <div className="container--responsive font--center mt--50 mb--50">
    <h2 className='color--error font--bold fs--35 font--center mt--30'>Product Display</h2>
    <Slider {...settings}>
        {offerSlider.map((items,index)=>{
            return(
    <div className='offer' key={`cat-${index}`}>
        <Image src={items.img} alt={items.alt} width={1500} height={0} sizes="10vw" className='mb--15 mt--20'/>
    </div>
            )
        })}
   
    </Slider>
</div>
    )
}

export default OfferSlider


const offerSlider =[
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
    },{
      img:"/assets/image/phonik6.jpg",
      name:"Rose Agarbatti",
      stick:"18",
      price:"10",
      avg_review:"1",
      mrp:"15"
    }
  ]