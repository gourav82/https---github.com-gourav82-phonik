import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPersonCircle,BsShieldFillCheck,BsFillPeopleFill, BsHeadset, BsFillCalendar2XFill, BsFillCameraFill,BsFillGeoAltFill,BsClipboard2,BsFillChatSquareFill,BsBellFill,BsPatchCheckFill, } from "react-icons/bs";

const Profile = () => {
  const [img, setImg] = useState();


  const handleImgChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));

  }
  const handleImgSubmit = async (e) => {
    e.preventDefault();

  }
    const [a , setA] = useState(0);

  useEffect(()=>{
    console.log("a");
  });
  useEffect(()=>{
    console.log("b");
  },[]);

  useEffect(()=>{
    console.log("c");
  },[a]);

  return (
    <>
      <div className="container--responsive">
        <div className="profile mb--50">
          <div className="profile--image flex flex--justify-content-between flex--align-items-end">
            <div className="avatar-upload">
              <form className="avatar-edit" onSubmit={handleImgSubmit}>
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e)=>handleImgChange(e)}/>
                <label for="imageUpload">
                  <BsFillCameraFill />
                </label>
              </form>
              <div className="avatar-preview">
              <Image src={img} alt="" width="570" height="570"/>
              </div>
            </div>
            <div className='profile--image-text mt--10'>
              <span className='mb--10'>Kumar Gourav</span>
              <span className='mb--10 block'>kgourav82@gmal.com</span>
              <span className='mb--10'>7976800918</span>
            </div>
          </div>
        </div>
        <button onClick={()=>setA(a+1)}>click me</button>
        <p>{a}</p>
        <div className="profile--wrap flex flex--wrap flex--align-items-center mt--20">
          <Link href={"/"}>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsClipboard2 className='fs--50' />
            <span className='color--error mt--10'>My Order</span>
          </div>
          </Link>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsPersonCircle className='fs--50' />
            <span className='color--error mt--10'>profile</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillGeoAltFill className='fs--50' />
            <span className='color--error mt--10'>Address</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillChatSquareFill className='fs--50' />
            <span className='color--error mt--10'>Message</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsPatchCheckFill className='fs--50' />
            <span className='color--error mt--10'>Coupan</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsBellFill className='fs--50' />
            <span className='color--error mt--10'>Notification</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsHeadset className='fs--50' />
            <span className='color--error mt--10'>Help & Support</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsShieldFillCheck className='fs--50' />
            <span className='color--error mt--10'>Privacy Policy</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillCalendar2XFill className='fs--50' />
            <span className='color--error mt--10'>Terms & Conditions</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillCalendar2XFill className='fs--50' />
            <span className='color--error mt--10'>Refund Policy</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillCalendar2XFill className='fs--50' />
            <span className='color--error mt--10'>Shipping Policy</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillCalendar2XFill className='fs--50' />
            <span className='color--error mt--10'>Cancellation policy</span>
          </div>
          <div className='profile--wrap-option flex--align-items-center flex flex--justify-content-center flex--direction-column'>
            <BsFillPeopleFill className='fs--50' />
            <span className='color--error mt--10'>About Us</span>
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile


const profileDetails = [
  {
    iconName: "<BsPersonSquare  className='fs--50'/>",
    name: "Profile11",
  },
  {
    iconName: "<BsPersonSquare  className='fs--50'/>",
    name: "Profile14",
  },
  {
    iconName: "<BsPersonSquare  className='fs--50'/>",
    name: "Profile12",
  },

]