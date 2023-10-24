import React, { useState } from 'react'
import './LoginSignup.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';


const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <PersonOutlineIcon className='img' />
          <input type="text" placeholder='Name' />
        </div>}

        <div className="input">
          <EmailIcon className='img' />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <PasswordIcon className='img' />
          <input type="password" placeholder='Password ' />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      }
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup