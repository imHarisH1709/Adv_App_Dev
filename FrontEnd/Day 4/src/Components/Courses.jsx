// import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';
import Nav from './Nav'; // Make sure to import your Navbar component

const Courses = () => {
  // Assuming you have an array of courses data
  const coursesData = [
    { title: 'Chess Fundamentals', imageUrl: 'https://chesslang-academy-images.s3.amazonaws.com/1648818639078..jpg', description: 'BEGINNER', desc:'60 Activity' },
    { title: 'Mate in 1', imageUrl: 'https://chesslang-academy-images.s3.amazonaws.com/1649240829563..jpg', description: 'BEGINER', desc:'100 Activity' },
    { title: 'Train Your Tactics', imageUrl: 'https://chesslang-academy-images.s3.amazonaws.com/1648818666638..jpg', description: 'BEGINER', desc:'50 Activity' },
    { title: 'Mate in 2', imageUrl: 'https://chesslang-academy-images.s3.amazonaws.com/1649240875900..jpg', description: 'BEGINER', desc:'100 Activity' },
    // { title: 'Tactics Training', imageUrl: 'https://chesslang-academy-images.s3.amazonaws.com/1648818683972..jpg', description: 'Beginner' },


  ];

  return (
    <div>
    <Nav />
    <div className="courses-container">
      {coursesData.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
      </div>
    </div>
  );
};

export default Courses;