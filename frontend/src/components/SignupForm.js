import React from 'react'

function SignupForm() {
  return (
    <div className='form-cont'>
      <div className='form-cont-form'>
        <center>
          <h1>Log In</h1>
        </center>
        <form className='signup-form'>
          <label>
            <p style={{ fonstSize: 'xx-large' }} className='form-label'>E-mail</p>
            <input type="email" name="email" placeholder="Your E-mail" required />
          </label>
          <label>
            <p style={{ fonstSize: 'xx-large' }} className='form-label'>Password</p>
            <input type="password" name="password" placeholder="Enter your password" required />
          </label>
          <div className='button-cont'>
            <button type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default SignupForm