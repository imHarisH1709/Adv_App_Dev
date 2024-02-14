// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ApplyForm.css';
import axios from 'axios';
 // eslint-disable-next-line no-unused-vars
//  import user from "./Asserts/user.png";

 // eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";


 const ApplyForm = () => {
  const [coursename, setCoursename] = useState('');
  const[duration, setDuration]=useState('');
  const [timings, setTimings] = useState('');
  const [mode, setMode] = useState('');
  const [fee, setFee] = useState('');



  

  const handleSubmit =async (e) => {
    const data={
        
    }
    e.preventDefault();
    try{
      const response =await axios.post("http://localhost:8080/add",{
        coursename,
          duration,
          timings,
          mode,
          fee,
        },
      );
      console.log("Details added Successfully");
      console.log(response.data);
      window.alert("Successfully added");
    }
    catch(error){
      console.log("Failed");
      console.log(error);
    }
  }

  return (
    <div className='lol'>
    {/* <div className='bod'> */}
    <div className="login-container1">
      <div className="login-card1">
        <div className="login1">
        <h2 className='htag'>New Course Enrollment</h2>
        </div>
        <form className='frm'>
          <label className='lab' htmlFor="username">Course Name:</label>
          <input
            className='inp'
            type="text"
            id="username"
            required
            placeholder='Enter the course Needed to be added'
            value={coursename}
            onChange={(e) => setCoursename(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label className='lab' htmlFor="email">Duration:</label>
          <input
          className='inp'
            type="text"
            id="email"
            required
            placeholder='Enter the Duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />


          <label className='lab' htmlFor="password">Timing:</label>
          <input
          className='inp'
            type="text"
            id="password"
            placeholder='Enter the Class timing'
            value={timings}
            required
            onChange={(e) => setTimings(e.target.value)}
          />

         <label className='lab' htmlFor="dob">Mode:</label>
          <input
          className='inp'
            type="text"
            id="dob"
            required
            placeholder='Enter Wheather ofline or Online Mode'
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          />

        <label className='lab' htmlFor="mob">Fee:</label>
          <input
          className='inp'
            type="number"
            id="mob"
            required
            placeholder='Enter The Fee Amount'
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
          <br></br><br></br>

          <button className="butt" type="button" onClick={handleSubmit}>
            Submit
          </button>
          <br></br>
         
        </form>
      </div>
    {/* </div> */}
    </div>
    </div>
  );
};

export default ApplyForm;


