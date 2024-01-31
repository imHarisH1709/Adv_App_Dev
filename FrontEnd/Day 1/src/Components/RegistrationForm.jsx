import { useState } from 'react';
import './Registration.css';
import logo from './../Components/Homee.jpg'
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [userType, setUserType] = useState('user'); // 'user' is the default user type
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phoneNumber || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all the fields');
      return;
    }

    if (!email.includes('@')) {
      setErrorMessage('Email should contain @ symbol');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    console.log('User Type:', userType);
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);

    setErrorMessage('');
  };

  return (
    <div className="sbody1">
      <div className="registration-container1">
        <div className="img-container">
          <img src={logo} alt="Background" />
        
        <div className="registration-form-container1">
          <center>
            <h2>REGISTER</h2>
          </center>
          {/* Radio Buttons for User Type */}
          <div className="user-type-radio">
            <label>
              {/* <input
             
                type="radio"
                name="userType"
                value="user"
                checked={userType === 'user'}
                onChange={() => setUserType('user')}
              />
              USER */}
            </label>
            <label>
              {/* <input
                type="radio"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={() => setUserType('admin')}
              /> */}
              {/* ADMIN */}
            </label>
          </div>
          <form className="sform1" onSubmit={handleSubmit}>
            <div className="sinput-group1">
              <input
               style={{background:"transparent",color:"black"}}
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sinput-group1">
              <input
                type="number"
                style={{background:"transparent",color:"black"}}
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="sinput-group1">
              <input
                type="email"
                name="email"
                style={{background:"transparent",color:"black"}}
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sinput-group1">
              <input
                type="password"
                name="password"
                style={{background:"transparent",color:"black"}}
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sinput-group1">
              <input
                type="password"
                style={{background:"transparent",color:"black"}}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="sinput-group1">
              <center>
              <Link to="/AdminHome"><button type="submit" className="form-button">
                  Register My Account
                </button></Link>
              </center>
            </div>
            <div className='h21'>
           <center></center>
           <center><p></p>
           </center></div>
            <center>
              <a href="/" className="bala">
                Already have an account? Log in
              </a>
            </center>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;