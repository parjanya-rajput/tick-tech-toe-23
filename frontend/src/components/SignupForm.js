import React from 'react'

function SignupForm() {
  return (
    <div className='form-cont'>
      <div className='form-cont-form'>
      <h1>REGISTER</h1>
      <form className='form'>
        <label>
               <p style={{ fonstSize: 'xx-large' }} className='form-label'>Name</p>
               <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
               <p style={{ fonstSize: 'xx-large' }}className='form-label'>Email</p>
               <input type="email" name="email" placeholder="Your E-mail" required />
        </label>
        <div className='button-cont'>
          <button type="submit">
              SUBMIT
          </button>
        </div>
      </form>
      </div>
    </div>

   
  )
}

export default SignupForm