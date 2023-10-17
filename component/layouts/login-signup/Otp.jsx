import React from 'react'
import { useState } from 'react'

const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleOtp=(e)=>{
    setOtp((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    console.log(otp);
  }
  return (
    <form className='login--form font--center'>
        <h6 className='fs--22 color--error mb--10'>Please enter the OTP</h6>
            <p className='mb--20'> <span>A code has been sent to</span> <small>*******9897</small> </p>
            <div className='width--column-60 block--auto flex flex--justify-content-between flex--align-items-center mb--20'>
            <input class="otp-input" type="text" id="first" maxLength="1" name='' value={otp.name} onChange={(e)=>handleOtp(e)}/>
            <input class="otp-input" type="text" id="first" maxLength="1" name='' value={otp.name} onChange={(e)=>handleOtp(e)}/>
            <input class="otp-input" type="text" id="first" maxLength="1" name='' value={otp.name} onChange={(e)=>handleOtp(e)}/>
            <input class="otp-input" type="text" id="first" maxLength="1" name='' value={otp.name} onChange={(e)=>handleOtp(e)}/>
            
            </div>
            <button className='pt--10 pb--10 bg--radius bg--error block--auto width--column-40 mt--10 fs--18 color--white'>Validate</button>
    </form>
    )
}

export default Otp