// import React from 'react';
import './AdminCourse.css';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GridViewIcon from '@mui/icons-material/GridView';
// import { Link } from "react-router-dom";

const AdminCourseCard = ({ title, imageUrl, description, desc }) => {
  const handleViewClick = () => {
    console.log(`View clicked for ${title}`);
  };

  const handleBookClick = () => {
    console.log(`Book clicked for ${title}`);
  };

  return (
    <div className="course-card">
      <div className="card-top">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-center">
        <h3 className="card-title">{title}</h3>
        <p className="card-description" style={{marginLeft:"-4.5cm"}}><AutoAwesomeMotionIcon/>{description}</p>
        <p className="card-description" style={{marginLeft:"-4.5cm"}}><GridViewIcon/>{desc}</p>
          
      </div>
      <div className="card-bottom">
        {/* <button className="view-button" onClick={handleViewClick}>
          View
        </button> */}
        <button className="book-button1" onClick={handleBookClick}>
          Update
          </button>
          <button className="book-button1" onClick={handleBookClick}>
          Delete
          </button>
      </div>
      
    </div>
  );
};

export default AdminCourseCard;
