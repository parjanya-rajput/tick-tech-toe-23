import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignupForm() {

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
      axios.post('http://localhost:3002/register',{email, password ,password1})
      .then(result => {
          console.log(result)
          navigate('/signinform');//go to login page
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

  return (
    <div className='form-cont'>
      <div className='form-cont-form'>
      <h1>REGISTER</h1>
      <form className='signup-form'>
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