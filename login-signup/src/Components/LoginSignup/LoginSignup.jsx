import React from 'react'
import './LoginSignup.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';


const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <PersonOutlineIcon/>
          <input type="text" />
        </div>
        <div className="input">
          <EmailIcon/>
          <input type="email" />
        </div>
        <div className="input">
          <PasswordIcon/>
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup