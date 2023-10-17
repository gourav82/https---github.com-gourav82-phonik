import React from 'react'
import Allcategory from './Allcategory'
import OfferSlider from './OfferSlider'
import PopularItems from './PopularItems'
import LatestItems from './LatestItems'
import MainBanner from './MainBanner'
import { toast,ToastContainer } from 'react-toastify'
import Canvas from '../../Canvas'

const Home = () => {
  const displayToast = () => {
    toast.success("Product Added in cart Successfully" );
  };
  return (
    <>
    <MainBanner/>
     <PopularItems displayToast={displayToast}/>
     <OfferSlider/>
    <Allcategory/>
    {/* <LatestItems displayToast={displayToast}/> */}
    <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default Home