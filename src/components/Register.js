import React from 'react'

function Register() {
  return (
    <div className='registration-page'>
        <form className='registration-form'>
            <input type='text' required placeholder='Name' className='name-input'/>
            <input type='email' required placeholder='abc@xyz.com' className='email-input' />
            <input type='password' required placeholder='xxxxxxxx' className='pass-input'/>
            <button type='submit' className='reg-submit-btn'>Sign Up</button>
        </form>
    </div>
  )
}

export default Register