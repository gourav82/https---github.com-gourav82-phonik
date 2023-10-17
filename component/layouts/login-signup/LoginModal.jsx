import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {BsX} from "react-icons/bs";
import SignUpModal from './SignUp';
import Login from './Login';


const LoginModal = ({setLoginModal}) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm =()=>{
    setShowForm(!showForm);
  }
  
  return (

     <div className="login container--responsive">
            <div className="login--logo flex flex--justify-content-between flex--align-items-center">
            <Link href={"/"}> <Image src="/assets/image/logo.png" alt="" width="40" height="40"/></Link>
            <span className='color--error fs--20'>
                Login | Sign-Up
            </span>
            <BsX className='fs--25 color--error' onClick={()=>setLoginModal(false)}/>

            </div>
            {showForm? 
            <SignUpModal handleShowForm={handleShowForm}/>
            :
             <Login handleShowForm={handleShowForm}/>
              }
             
     </div>
    )
}

export default LoginModal