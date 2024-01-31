// import React from 'react';
// import React from 'react';
import './AdminHome.css';
import logo from './../Components/chessbackground.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

function AdminHome() {
  return (
    <div>
      <AdminNav/><AccountCircleIcon/>
      <div className="home-container" style={{backgroundColor:"white",color:"black"}}>
        <img src={logo} alt="Home" className="home-image20" />
        <div className="home-text">
          <h1 className='animate-charcter'>Welcome to Our </h1>
          <h2 className='animate'>Star Chess Academy</h2>
          <br/>
          {/* <button className='but'style={{fontFamily:'revert'}}>Join Course</button> */}
          </div>
          <br/><br/>
          <div className='ch'>
          <p className='wh'>
            <strong>Why Star Chess?</strong>
          </p>
          <div style={{display:"flex"}}>
            <div style={{width:"130%",alignContent:"center",paddingTop:"2.3cm"}}>
          <p className='le' >
            Learn about Online Chess Training
          </p>
          </div>
          <div className='th' style={{paddingTop:".7cm"}}>
          <p>
            The world today is indeed a small place when it comes to connecting with people beyond the boundaries of countries and continents. Why should learning chess be any different?
            We are providing online chess training to the students from India and from other countries as well. Currently, we have students from different countries such as USA, UK, UAE, Singapore, Australia and many more who are opting for online chess classes at Star Chess Academy.
          </p>
          </div>
          </div>
          <br/><br/>
          <h2 className='hl' style={{textAlign:"center"}}>Academy Branches<br/>
            </h2>
            <br/>
          <div className='loc'>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Chennai</p>
            </div>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Coimbatore</p>
            </div>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Madurai</p>
            </div>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Hosur</p>
            </div>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Bangalore</p>
            </div>
            <div className='block'>
            <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/>
            <p>Delhi</p>
            </div>
            <div className='block'>
            {/* <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/> */}
            {/* <p>sssssss</p> */}
            </div>
            <div className='block'>
            {/* <LocationOnIcon style={{fontSize:"2.5cm" ,backgroundColor:"black",color:"white",borderRadius:"50%",padding:".5cm"}}/> */}
            {/* <p>Perumbakkam</p> */}
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default AdminHome;
