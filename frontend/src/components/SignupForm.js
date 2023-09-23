import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password1, setPassword1] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
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
      axios.post('http://localhost:8008/register',{email, password ,password1})
      .then(result => {
          console.log(result)
          navigate('/login');//go to login page
      })
      .catch(err => console.log(err))
  }
  function handlePassword1(event) {
    //-------------------------both password are same or not check-------------------------//
    let new_pass = event.target.value;
    setPassword1(new_pass);
    if(new_pass != password){
        setErrorMessage1("Both are not same");
    }else{
        console.log(new_pass  + "  * " + setPassword);
        setErrorMessage1("Both are same");
    }
 }
 return(
  <div className='form-cont'>
    <div className='form-cont-form'>
    <h1>REGISTER</h1>
    <form className='signup-form' onSubmit={handleSubmit}>
      <label>
            <p style={{ fonstSize: 'xx-large' }} className='form-label'>Email</p>
            <input type="email" name="email" placeholder="Your Email" required  onChange={(e)=>setEmail(e.target.value)} />
      </label>
      <label>
            <p style={{ fonstSize: 'xx-large' }}className='form-label'>Password</p>
            <input type="password" name="password" placeholder="Your Password" required value = {password} 
                  onChange = {handlePassword} />
              <div style = {{ color: "red" }}> {errorMessage} </div>
      </label>
      <label>
            <p style={{ fonstSize: 'xx-large' }}className='form-label'>Password</p>
            <input type="password" name="password1" placeholder="confirm password" required value={password1}
                      onChange = {handlePassword1} />
              <div style = {{ color: "red" }}> {errorMessage1} </div>
      </label>
      <div className='button-cont'>
        <button type="submit">
            SUBMIT
        </button>
      </div>
    </form>
    <Link  to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                  Login
    </Link>
    </div>
  </div>
 )
}
 
  


   

 
export default SignupForm;