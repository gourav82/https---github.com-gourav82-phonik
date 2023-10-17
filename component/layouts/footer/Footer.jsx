import React from 'react'
import Input from '../../core/Input'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import FooterMobile from './FooterMobile';

const Footer = () => {
    const {isMobile, isIpad } = useCheckMobileScreen();

  return (
    <>    {isMobile || isIpad? <FooterMobile/>:
<div className="footer pb--20 pt--50">
      <div className="container--responsive flex flex--justify-content-between pb--60">
        <div className="footer--logo">
         <span className='fs--48 color--error font--bold'>Phonik Industries</span>
        <p className='font--medium mt--20 mb--10'>NEWS LETTER</p>
        <span className='fs--18'>Subscribe to our news letter to get latest updates</span>
        <Input/>
        </div>

        <span>
            <span className='fs--20 font--bold'>My Accounts</span>
            <ul>
                <li className='fs--16 mt--10'>Profile</li>
                <li className='fs--16 mt--10'>Address</li>
                <li className='fs--16 mt--10'>Live Chat</li>
                <li className='fs--16 mt--10'>My Order</li>
            </ul>
        </span>

        <span>
            <span className='fs--20 font--bold'>Quick Links</span>
            <ul>
                <li className='fs--16 mt--10'>Contact Us</li>
                <li className='fs--16 mt--10'>Privacy Police</li>
                <li className='fs--16 mt--10'>Terms & Conditions</li>
                <li className='fs--16 mt--10'>About Us</li>
            </ul>
        </span>
        <span>
            <span className='fs--20 font--bold'>Follow Us</span>
            <ul>
                <li className='fs--16 mt--10'>Facebook</li>
                <li className='fs--16 mt--10'>Instagram</li>
            </ul>
        </span>
      </div>
      <div className="footer--copyRight flex flex--justify-content-center flex--align-items-center pt--20">
         <span className='fs--12 color--grey font--medium'>Copy-Right &copy; 2021 Phonik Industries</span>
      </div>
      </div>
  }
  </>
    )
}

export default Footer