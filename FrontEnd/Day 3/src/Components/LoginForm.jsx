import { useState } from 'react';
import './Login.css';
import logo from './../Components/Homee.jpg'
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [userType, setUserType] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill out the fields');
      return;
    }

    if (!email.includes('@')) {
      console.error('Email should contain @ symbol');
      setErrorMessage('Email should contain @ symbol');
      return;
    }

    console.log('User Type:', userType);
    console.log('Email:', email);
    console.log('Password:', password);

    setErrorMessage('');
    // Perform any other actions needed after form submission
  };

  return (
    <div className="body11">
      <div className="login-container11">
        <div className="img-container2">
          <img src={logo}  alt="Background" />
        </div>
        <div className="login-form-container11">
          <center>
            <h2>Login</h2>
          </center>
          {/* Radio Buttons for User Type */}
          <div className="user-type-radio">
            <label>
              <input
                type="radio"
                name="userType"
                value="user"
                checked={userType === 'user'}
                onChange={() => setUserType('user')}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={() => setUserType('admin')}
              />
              Admin
            </label>
          </div>
          <form className="form11" onSubmit={handleSubmit}>
            <div className="input-group11">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group11">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group11">
              <center>
                <button type="submit" className="form-button">
                <Link to="/Home"> Log in to my account
                </Link></button>
              </center>
            </div>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className=""><FaFacebook /></i>
              </a>
              <a href="#" className="icon">
                <i className=""><FaGoogle /></i>
              </a>
              <a href="#" className="icon">
                <i className=""><FaTwitter /></i>
              </a>
              <a href="#" className="icon">
                <i className=""><FaLinkedinIn /></i>
              </a>
            </div>
            <div className='h311'>
              <center><h3>Welcome to Star Chess Academy</h3></center>
              <center><p>You can Learn about chess in our Academy</p></center>
            </div>
            <div className="additional-links11">
              <center>
                <a href="#" className="form-link">
                  Forgot my password
                </a>{' '}
                ||{' '}
                <Link to="/Register"><a href="/Signup" className="form-link">
                  Sign Up
                </a></Link>
              </center>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
