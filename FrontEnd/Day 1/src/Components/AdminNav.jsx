import { useState } from "react";
import "./AdminNav.css";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

function AdminNav() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  return (
    <nav  className={`nav ${active ? "nav__active" : ""}`}>
      <div className="nav__brand">STAR CHESS ACADEMY</div>
      <div onClick={navToggle} className={`nav__toggler ${active ? "toggle" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav__menu ${active ? "show" : ""}`}>
        
      <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/AdminHome">Home
            </Link></a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/Apply">AddCourse
          </Link></a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/AdCourse">AllCourse
          </Link></a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/Add">Students
            </Link></a>
        </li>
        {/* <li className="nav__item">
          <a href="#" className="nav__link">
            Online Class
          </a>
        </li> */}
        {/* <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li> */}
        {/* <li className="nav__item">
          <a href="#" className="nav__link">
            Contact Us
          </a>
        </li> */}
        {/* <div className="profilee"><FaUser/> */}
    {/* </div> */}
    <li className="nav__item">
          <a href="#" className="nav__link">
           <Link to="/"> Logout
           </Link></a>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNav;
