import '../Components/Join2.css';
import Nav from './Nav';
import logo from './../Components/Fundamental2.jpg'

const Join2 = () => {
  <div>
  
  </div>
  const courseData = {
    //   title: 'Chess Fundamentals',
    //   fundamentals: 'Chess fundametals',
    description: 'In this course, you will be trained on your tactical skills. Test your tactical vision with various chess tactical motifs including the pin, double attack, clearance, and more.',
    contents: [
      { chapter: 'Introduction to the chess game', progress: 0 },
      { chapter: 'Introduction to the chess pieces', progress: 0 },
      { chapter: 'Learning to attack and capture', progress: 0 },
    ],
    tags: ['5 Chapters', '15 Lessons','150 Activities'],
  };

  // JSX structure for the Join component
  return (
    <div className='bac'>
        <Nav/>
      {/* <h1>{courseData.title}</h1> */}
      <div className='content'>
      <img src={logo} alt="Chess Fundamentals" className='chesss' /> {/* Add this line for the image */}
      <div className='section'>
      {/* This course gives an introduction to the chess game, the history of chess, and builds the foundation by teaching piece movements in an interactive and fun way! This course is suitable for anyone new to chess and beginner level players. */}
        {/* <button className='buton'style={{fontFamily:'sans-serif'}}>BEGINNER</button> */}
        <button className='continuebutton'>Continue learning</button>
      </div>
      </div>
      <p>{courseData.fundamentals}</p>
      <p>{courseData.description}</p>
      
      

      <div>
        <h2>Course Contents</h2>
        {/* Your course contents JSX here */}
      </div>

      <div>
        <h2></h2>
        <ul>
          {courseData.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the Join component
export default Join2;
