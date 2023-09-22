import React from 'react'
import './forminfo.css'
function FormInfo() {
  return (
    <div>
      <form className='form'>
        <div>
        <label htmlFor="name">Name : </label>
        <input 
          type="text" 
          name="name" 
          id="name"
         />
        </div>
        <div>
          <label htmlFor="gender">Gender : </label>
          <input type="radio" name="Gender" id="female" className='radio'/><label htmlFor="female">Female</label>
          <input type="radio" name="Gender" id="male"className='radio' /><label htmlFor="male">Male</label>
          <input type="radio" name="Gender" id="other"className='radio' /><label htmlFor="other">Other</label>
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input type="tel" name="contact" id="contact" placeholder='ContactNumber'/>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea name="" id="" cols="50" rows="3"></textarea>
        </div>
        <div>
          <label htmlFor="addharnumber">Addhar number</label>
          <input type="text" name="addharnumber" id="addharnumber" />
        </div>
        <div>
          <label htmlFor="aidneeded">Aid needed</label>
          <input type="text" name="aidneeded" id="aidneeded" />
        </div>
        <div>
          <label htmlFor="total">Total Family Members : </label>
          <input type="text" name="aidneeded" id="aidneeded" />
        </div>
        
      </form>
    </div>

   
  )
}

export default FormInfo
/*
Form Details
1. Name
2. Gender
3. Contact
4. Address
5. Addhar number
6. Aid needed
7. Number of family members*/