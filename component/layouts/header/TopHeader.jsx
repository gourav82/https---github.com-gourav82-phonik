import React, { useEffect, useState } from 'react'
import { BsPersonFillLock, BsPersonX } from "react-icons/bs";
import LoginModal from '../login-signup/LoginModal';
import Modal from '../../core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutUser } from '../../../redux/slices/authSlice';

const TopHeader = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [logOut, setLogOut] = useState(false)
  const checkedLogin = useSelector(state=>state.registration);
  // console.log(checkedLogin, "hello this is login page");
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(checkedLogin.isAuthenticated)
    {
      setLoginModal(!loginModal);
      router.push("/")
    }
  },[checkedLogin])

  const handleLoginModal= ()=>{
    setLoginModal(!loginModal)
  }
  const handleLogout =()=>{
    setLogOut(false);
    dispatch(logoutUser(logOut));
  }
  return (
    <>
     <div className="header--top bg--error ">
     <div className="header--top-nav container--responsive flex flex--justify-content-between flex--align-items-center color--white">
       <span className='font--bold fs--16'>Restaurant is close now</span>
       <span>
        <button className='fs--14 font--bold'>
        {checkedLogin.isAuthenticated == true?
       <p className='color--white mr--5 fs--16' onClick={handleLogout}><BsPersonX className='mr--5'/>Logout</p> 
        :
        <p className='color--white mr--5 fs--16' onClick={handleLoginModal}><BsPersonFillLock className='mr--5'/>Login</p> 
        }
        </button>
       </span>
     </div>
     </div>

     {loginModal? 
     <Modal show={loginModal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setLoginModal(false)}>
     <LoginModal setLoginModal={setLoginModal}/>
    </Modal>
     : ""}
     </>
    )
}

export default TopHeader