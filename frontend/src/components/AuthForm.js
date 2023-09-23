import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');

  const navigate = useNavigate();

  const handlePassword = (event) => {
    let newPass = event.target.value;
    setPassword(newPass);
    
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!newPass.match(lowerCase)) {
      setErrorMessage('Password should contain lowercase letters!');
    } else if (!newPass.match(upperCase)) {
      setErrorMessage('Password should contain uppercase letters!');
    } else if (!newPass.match(numbers)) {
      setErrorMessage('Password should contain numbers!');
    } else if (newPass.length < 10) {
      setErrorMessage('Password length should be at least 10 characters.');
    } else {
      setErrorMessage('Password is strong!');
    }
  };

  const handlePassword1 = (event) => {
    let newPass = event.target.value;
    setPassword1(newPass);

    if (newPass !== password) {
      setErrorMessage1('Passwords do not match.');
    } else {
      setErrorMessage1('Passwords match.');
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (isSignup) {
      axios
        .post('http://localhost:3002', { email, password, password1 })
        .then((result) => {
          console.log(result);
          navigate('/login');
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post('http://localhost:3002', { email, password })
        .then((result) => {
          if (result.data === 'Success') {
            navigate('/forminfo');
          } else {
            alert('First Signup or wrong password');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='form-cont'>
      <div className='form-cont-form'>
        <div className='auth-buttons'>
          <button
            className={isSignup ? 'active-button' : 'inactive-button'}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </button>
          <button
            className={isSignup ? 'inactive-button' : 'active-button'}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
        </div>
        <h2>{isSignup ? 'Sign-Up' : 'Login'}</h2>
        <form className='signup-form' onSubmit={handleSubmit}>
          <label>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type='password'
              name='password'
              placeholder='Your Password'
              required
              value={password}
              onChange={handlePassword}
            />
            <div style={{ color: 'red' }}>{errorMessage}</div>
          </label>
          {isSignup && (
            <label>
              <input
                type='password'
                name='password1'
                placeholder='Confirm Password'
                required
                value={password1}
                onChange={handlePassword1}
              />
              <div style={{ color: 'red' }}>{errorMessage1}</div>
            </label>
          )}
          <div className='button-cont' >
            <button type='submit'>SUBMIT</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AuthForm;
