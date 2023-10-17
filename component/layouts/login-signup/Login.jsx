import React, { useEffect, useState } from 'react'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckUser } from '../../../redux/slices/authSlice';
import { useRouter } from 'next/router';




const Login = ({handleShowForm}) => {
    const {isMobile, isIpad } = useCheckMobileScreen();
    const [loginForm, setLoginForm] = useState('');
    const [errormsg, setErrorMsg] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch();
    const checkedLogin = useSelector(state=>state.registration);

   

   const handleLogin =(e)=>{
     setLoginForm((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
     }));

    }

    const handleLoginSubmit =(e)=>{
      e.preventDefault();
      const newRecord = {...loginForm, id:""};
      dispatch(setCheckUser(newRecord)).unwrap().then((res) => {
        console.log(res);
      }).catch(err=>{

      });

    }

  return (
    <form className='login--form' onSubmit={handleLoginSubmit}>
    {errormsg?  checkedLogin.isAuthenticated==false? <span className='color--error font--center'>your details is wrong</span>:"":""}
                <input type="text" name='user' placeholder='Mobile no/Email id' className='input-login' value={loginForm.user} onChange={(e)=>handleLogin(e)}/>
                <input type="password" name='password' placeholder='Password' className='input-login' value={loginForm.password} onChange={(e)=>handleLogin(e)}/>
                <div className={`flex flex--justify-content-between width--column-${isMobile || isIpad?"one":"60"} block--auto color--grey flex--align-items-center`}>
                <span>
                <input type="checkbox"  className='mr--5'/>
                <label>Remember me</label>
                </span>
                <span>Forgot Password</span>
                </div>
                 <button type='submit' className='pt--10 pb--10 bg--radius bg--error block--auto width--column-40 mt--10 fs--18 color--white' onClick={()=>setErrorMsg(true)}>Login</button>
                 <p className='font--center mt--10' onClick={handleShowForm}>
                    <span className='color--grey fs--14'>Create an Account? <button className='color--error font--bold'>SignUp</button></span>
                 </p>
             </form>
  )
}

export default Login