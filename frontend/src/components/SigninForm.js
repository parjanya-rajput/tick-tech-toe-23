import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SigninForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

    function handlePassword(event) {
      //-------------------------password validation-------------------------//
      let new_pass = event.target.value;
      setPassword(new_pass);
      
      var lowerCase = /[a-z]/g;
      var upperCase = /[A-Z]/g;
      var numbers = /[0-9]/g;
      if (!new_pass.match(lowerCase)) {
        setErrorMessage("Password should contains lowercase letters!");
      } else if (!new_pass.match(upperCase)) {
        setErrorMessage("Password should contain uppercase letters!");
      } else if (!new_pass.match(numbers)) {
        setErrorMessage("Password should contains numbers also!");
      } else if (new_pass.length < 10) {
        setErrorMessage("Password length should be more than 10.");
      } else {
        setErrorMessage("Password is strong!"); 
      }
  }

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8008/login',{email, password})
      .then(result => {
        if(result.data == "Success"){
            navigate('/aboutus');//go to login page
        }
        else{
           alert("first Signup or password Wrong");
        }
      })
      .catch(err => console.log(err))
  }


  return (
    // <div className='form-cont'>
    //   <div className='form-cont-form'>
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //            <p  className='form-label'>Email</p>
    //            <input 
    //             type="email" 
    //             name="email" 
    //             placeholder="Your Email" 
    //             required  onChange={(e)=>setEmail(e.target.value)} 
    //            />
    //     </label>
    //     <label>
    //            <p className='form-label'>Password</p>
    //            <input
    //                 type="password" 
    //                 name="password" 
    //                 placeholder="Your Password" 
    //                 required
    //                 value = {password} 
    //                 onChange = {handlePassword}  
    //             />
    //             <div style = {{ color: "red" }}> {errorMessage} </div>
    //     </label>
    //       <button type="submit">
    //           SUBMIT
    //       </button>
    //   </form>
    //   <Link  to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
    //                 Sign up
    //   </Link>
    //   </div>
    // </div>

    <div className='form-cont'>
      <div className='form-cont-form'>
      <h1>Login</h1>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label>
               <p style={{ fonstSize: 'xx-large' }} className='form-label'>Email</p>
               <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required onChange={(e)=>setEmail(e.target.value)} 
               />
        </label>
        <label>
               <p style={{ fonstSize: 'xx-large' }}className='form-label'>Password</p>
               <input 
                type="password" 
                name="password" 
                placeholder="Your Password" 
                required 
                value = {password} 
                onChange = {handlePassword}  
               />
               <div style = {{ color: "red" }}> {errorMessage} </div>
        </label>
        <button type="submit">
              SUBMIT
        </button>
      </form>
      <Link  to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                 Sign up
      </Link>
      </div>
    </div>
    
   
  )
}
export default SigninForm