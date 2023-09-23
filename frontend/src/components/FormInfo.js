import React from 'react'
import { useState } from 'react'
import './forminfo.css'
import ConnectWalletButton from "../components/ConnectWallet";
function FormInfo() {
  const [name,setName] = useState()
  const [gender,setGender] = useState()
  const [contact,setContact] = useState() 
  const [address,setAddress] = useState()
  const [addharnumber,setAddharnumber] = useState()
  const [aidneeded,setAidneeded] = useState()
  const [total,setTotal] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  
  return (
    <div className='forminfomain'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 style={{textAlign:'center', textColor: 'black'}}>Need Help!</h2>
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder='Your Name'
            onChange={(e)=>setName(e.target.value)}
          />
          <div className="radio-container">
            <input type="radio" name="Gender" id="female" className='radio' placeholder='female' onChange={(e) => setGender(e.target.value)} />
            <label className='inradio' htmlFor="female">Female</label>
          </div>
          <div className="radio-container">
            <input type="radio" name="Gender" id="male" className='radio' onChange={(e) => setGender(e.target.value)} />
            <label className='inradio' htmlFor="male">Male</label>
          </div>
          <div className="radio-container">
            <input type="radio" name="Gender" id="other" className='radio' onChange={(e) => setGender(e.target.value)} />
            <label className='inradio' htmlFor="other">Other</label>
          </div>
          <input 
            type="tel" 
            name="contact" 
            id="contact" 
            placeholder='Contact'
            onChange={(e)=>setContact(e.target.value)}
          />
          <input 
            type="text" 
            name="address" 
            id="address"
            placeholder='Address'
            onChange={(e)=>setAddress(e.target.value)}
          />
          <input 
            type="text" 
            name="addharnumber" 
            id="addharnumber" 
            placeholder='Addhar Number'
            onChange={(e)=>setAddharnumber(e.target.value)}
          />
          <input 
            type="text" 
            name="aidneeded" 
            id="aidneeded" 
            placeholder='Aid Needed'
            onChange={(e)=>setAidneeded(e.target.value)}
          />
          <input 
            type="text"
            name="total" 
            id="total" 
            placeholder='Total Family Members'
            onChange={(e)=>setTotal(e.target.value)}
          />
          <div className='buttons'>
            <div className="btn">
              <input type="submit" value="Submit" />
            </div>
            <div className='btn reset'>
              <input type="reset" value="Reset" />
            </div>
            <ConnectWalletButton />
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