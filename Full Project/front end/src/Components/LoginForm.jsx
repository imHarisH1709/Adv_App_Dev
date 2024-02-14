import { useState } from 'react';
import './Login.css';
import logo from './../Components/Homee.jpg';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // dispatch(
        //   login({
        //    name:username
        //   })
        //   )
          // navigate('/Home');
          try{
            const response=await axios.post('http://localhost:8081/api/v1/auth/login',{
                email,
                password
            });
            navigate('/Home');
            let token=response.data.token;
            let user=response.data.id;
            localStorage.setItem('token',token);
            console.log(response.data)
            localStorage.setItem('user',JSON.stringify(user));
        }catch(error){
            console.error('Error: ',error);
        }
        alert("Login Successfull");
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
          <form className="form11" onSubmit={handleSubmit}>
            <div className="input-group11">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>
            <div className="input-group11">
              <center>
                <button type="submit" className="form-button">
                  Log in to my account
                </button>
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
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
