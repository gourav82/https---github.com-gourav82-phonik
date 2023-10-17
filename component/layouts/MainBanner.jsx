import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { BsChevronDown } from "react-icons/bs";
import Animation from '../core/Animation';
import { bannerAPI } from '../../services/Product';

const MainBanner = () => {
const [banner, setBanner] = useState();


useEffect(()=>{
  bannerData();
},[])

const bannerData = ()=>{
  bannerAPI().then((resp)=>{
    setBanner(resp);
    // console.log(resp);
  })
}

  var settings = {
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <div className="banner">
      <div className="banner--table flex flex--justify-content-between flex--align-items-center mt--10 mb--40">
        <div className="container--responsive banner--table-slider pd--15 bg--radius">
          <Slider {...settings}>
            {mainSlide.map((item, index) => {
              return (
                <div key={`banner-${index}`} className="image pd--20 pt--50">
                  <Image src={item.img} width={500} height={200} alt='' className='bg--radius' />
                  <button className='fs--20 bg--error bg--radius pd--10 color--white font--bold'>{item.btn}</button>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="banner--table-book pd--20 bg--radius">
          <h1 className='fs--28 font--bold font--center color--error'> Let`s Join Us</h1>
          <span className='fs--16 font--medium'>Dont`t wait in a line to enjoy your meal.</span>
          <p className='fs--16 mb--10'>Recerve a table in advance with us.</p>
          <p>Location</p>
          <div className="flex flex--justify-content-end flex--align-items-center position--relative mb--15">
            <select name="" className="location">
              <option>Select Region</option>
              <option>Gazipur</option>
              <option>Varansi</option>

            </select>
            <BsChevronDown className='position--absolute color--error' />
          </div>
          <span className='mt--10'>Date</span>
          <div className="flex flex--justify-content-between flex--align-items-center">
            <span className='mb--5'>
              <button className='date font--bold mr--5'>Today</button>
              <button className='date font--bold'>Tomorrow</button>
            </span>
            <div className="time flex flex--justify-content-end flex--align-items-end width--column-two-5 mb--15">
              <Animation height={`40`} width={`40`} animationData={"/assets/json/calendar1.json"} />
             <input type="date" className='date-input mb--5'/>
            </div>
          </div>
          <span>Session</span>
          <div className="flex flex--justify-content-between flex--align-items-center mt--15 mb--50 position--relative">
          <span className='mb--5'>
              <button className='date font--bold mr--5'>Lunch</button>
              <button className='date font--bold'>Dinner</button>
            </span>
            <div className="time flex flex--justify-content-end flex--align-items-center width--column-two-5 mb--15">
              <Animation height={`40`} width={`40`} animationData={"/assets/json/alarm-clock.json"} />
              <select name="" className="location position--relative">
                <option>Select Time</option>
                <option>Gazipur</option>
                <option>Varansi</option>
              </select>
            </div>
            <Image src="/assets/image/ripple1.png" width={100} height={100} alt='' className='btn_ripple' />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default MainBanner

const mainSlide = [
  {
    img: "/assets/image/phonik1.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik2.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik3.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik4.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik5.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik1.jpg",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/phonik2.jpg",
    alt: "",
    btn: "Order Now"
  }

]