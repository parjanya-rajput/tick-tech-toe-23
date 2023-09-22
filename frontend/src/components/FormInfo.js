import React from 'react'
import { useState } from 'react';
import './forminfo.css'
function FormInfo() {
  const [name,setName] = useState();
  const [gender,setGender] = useState();
  const [contact,setContact] = useState();
  const [address,setAddress] = useState();
  const [addharnumber,setAddharnumber] = useState();
  const [aidneeded,setAidneeded] = useState();
  const [total,setTotal] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
}
  return (
    <div className='forminfomain'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='formcon'>
        <label htmlFor="name">Name</label><br />
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder='your answer'
          onChange={(e)=>setName(e.target.value)}
         />
        </div>
        <div className='formcon'>
          <label htmlFor="gender">Gender</label><br />
          <input type="radio" name="Gender" id="female" className='radio1' onChange={(e)=>setGender(e.target.value)}/><label className='inradio' htmlFor="female">Female</label>
          <input type="radio" name="Gender" id="male"className='radio' onChange={(e)=>setGender(e.target.value)} /><label className='inradio' htmlFor="male">Male</label>
          <input type="radio" name="Gender" id="other"className='radio' onChange={(e)=>setGender(e.target.value)} /><label className='inradio' htmlFor="other">Other</label>
        </div>
        <div className='formcon'>
          <label htmlFor="contact">Contact</label><br />
          <input 
            type="tel" 
            name="contact" 
            id="contact" 
            placeholder='your answer'
            onChange={(e)=>setContact(e.target.value)}
          />
        </div>
        <div className='formcon'>
          <label htmlFor="address">Address</label><br />
          <input 
          type="text" 
          name="address" 
          id="address"
          placeholder='your answer'
          onChange={(e)=>setAddress(e.target.value)}
         />
        </div>
        <div className='formcon'>
          <label htmlFor="addharnumber">Addhar number</label><br />
          <input 
            type="text" 
            name="addharnumber" 
            id="addharnumber" 
            placeholder='your answer'
            onChange={(e)=>setAddharnumber(e.target.value)}
          />
        </div>
        <div className='formcon'>
          <label htmlFor="aidneeded">Aid needed</label><br />
          <input 
            type="text" 
            name="aidneeded" 
            id="aidneeded" 
            placeholder='your answer'
            onChange={(e)=>setAidneeded(e.target.value)}
          />
        </div>
        <div className='formcon'>
          <label htmlFor="total">Total Family Members</label><br />
          <input 
          type="text"
           name="total" 
           id="total" 
           placeholder='your answer'
           onChange={(e)=>setTotal(e.target.value)}
           />
        </div>
        <div className='buttons'>
          <div className="btn">
            <input type="submit" value="Submit" />
          </div>
          <div className='btn reset'>
            <input type="reset" value="Reset" />
          </div>
          <div className="btn add">
            <button>ADD</button>
          </div>
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