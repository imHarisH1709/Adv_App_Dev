// Import React and any necessary modules
import Waviy from './Waviy'
import './First.css';
import { Link } from 'react-router-dom';
// Create a functional component
const First = () => {
  return (
    <div>
      
        <div className="menu">
          <div className="logo">
            {/* <a href="#">STAR CHESS ACADEMY</a> */}
          </div>
          {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li> */}
          {/* </ul> */}
        </div>
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title"><Waviy/></div>
        <div className="sub_title">"Life is a game, and I play chess. Every move matters"</div>
        <div className="btns">
          <Link to="/Login"><button>USER</button></Link>
          <Link to="/Login1"><button>ADMIN</button></Link>
        </div>
      </div>
    </div>
  );
};

export default First;