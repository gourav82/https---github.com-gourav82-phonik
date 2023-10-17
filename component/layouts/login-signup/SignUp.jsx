import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userData } from "../../../redux/slices/authSlice"
import Otp from './Otp';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../firebase.config';

const SignUpModal = ({handleShowForm}) => {
const dispatch = useDispatch();

const [phoneNumber, setPhoneNumber] = useState('');
const [verificationCode, setVerificationCode] = useState('');

  const [formValue, setFormValue] = useState({
    name: "",
    email:"",
    mobile:"",
    address:"",
    zip:"",
    password:""
  });
    const [subData, setSubData] = useState([]);
    const [errors, setErrros] = useState({});
    const [showOtpModal, setShowOtpModal] = useState(false);

  const handleChange =(e)=>{
    setFormValue((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  //  =============Submit form data
  const handleSubmit =(e)=>{
  e.preventDefault();
const newRecord = {...formValue, id:""}
setSubData([...subData,newRecord]);
console.log(subData)
 dispatch(userData(subData));

//form validation

const validError = {};
if(!formValue.name.trim()){
  validError.name = "Name is required"
}
if(!formValue.email.trim()){
  validError.email = "Email id is required"
}else if(/\S+@\S\.\S+/.test(formValue.email)){
  validError.email = "Email id is not valid"
}

if(!formValue.mobile.trim()){
  validError.mobile = "Mobile no is required"
}else if(!formValue.mobile.length ==10){
  validError.mobile = "Your mobile no is invalid"

}

if(!formValue.address.trim()){
  validError.address = "Address is required"
}
if(!formValue.zip.trim()){
  validError.zip = "Your area pin code is required"
}
if(!formValue.password.trim()){
  validError.password = "Your area pin code is required"
}else if(!formValue.password.length == 6){
  validError.password = "Password should be 6 charector"
}
setErrros(validError);

if(Object.keys(validError).length === 0){
}

const {mobile} = formValue;
try {
  const recaptchaVerifier = new app.auth.RecaptchaVerifier('recaptcha-container', {
    size: 'normal',
    callback: (response) => {
      // This callback will be called when reCAPTCHA is solved.
    },
  });

  const confirmationResult =  auth.signInWithPhoneNumber(
    mobile,
    recaptchaVerifier
  );

  // Store confirmation result for later verification
  window.confirmationResult = confirmationResult;
  setShowOtpModal(true);
  alert('success sending OTP:');

} catch (error) {
  alert('Error sending OTP:', error);
}
}

// otp section 
// function onCaptchVerify() {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: (response) => {
//           onSignup();
//         },
//         "expired-callback": () => {},
//       },
//       auth
//     );
//   }
// }


    // const handleGetOtp = async () => {
     
    // };

    const handleVerifyOTP = async () => {
      try {
        const verificationId = window.confirmationResult.verificationId;
        const credential = auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
  
        await auth.signInWithCredential(credential);
        // User is now authenticated.
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    };



  return (
    <>    {showOtpModal ? <Otp/>:
         <form className='login--form font--center' onSubmit={handleSubmit}>
            <input type="text" name='name' value={formValue.name} placeholder='Enter your name..' className='input-login' onChange={(e)=>handleChange(e)}/>
           {errors.name && <span className='color--error fs--12'>{errors.name}</span>}
            <input type="email" name='email' value={formValue.email} placeholder='Email id..' className='input-login'onChange={(e)=>handleChange(e)}/>
            {errors.email && <span className='color--error fs--12'>{errors.email}</span>}

            <input type="tel" maxLength={13} name='mobile' value={formValue.mobile} placeholder='Mobile no..' className='input-login' onChange={(e)=>handleChange(e)}/>
            {errors.mobile && <span className='color--error fs--12'>{errors.mobile}</span>}
           
           
            <input type="text" name='address' value={formValue.address} placeholder='Address..' className='input-login'onChange={(e)=>handleChange(e)}/>
            {errors.address && <span className='color--error fs--12'>{errors.address}</span>}
            <input type="zip" maxLength={6} name='zip' value={formValue.zip} placeholder='Pin code..' className='input-login'onChange={(e)=>handleChange(e)}/>
            {errors.zip && <span className='color--error fs--12'>{errors.zip}</span>}
            <input type="password" name='password' value={formValue.password} placeholder='Password' className='input-login' onChange={(e)=>handleChange(e)}/>
            {errors.password && <span className='color--error fs--12'>{errors.password}</span>}
           
           <div id='recaptcha-container' className='recaptcha-container'/>
           
            <button className='pt--10 pb--10 bg--radius bg--error block--auto width--column-40 mt--10 fs--18 color--white' type='submit'>SignUp</button>
            <p className='font--center mt--10' onClick={handleShowForm}>
                   <button className='color--grey fs--14'>Already have an Account? <span className='color--error font--bold'>Login</span></button>
            </p>
           </form>
          }
          </>

  )
}

export default SignUpModal