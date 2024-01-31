// import React from 'react';
import './Anime.css';

const Anime = () => {
  return (
    <div>
      <div className="contexte">
        <h1>Pure Css Animated Background</h1>
      </div>

      <div className="area">
        <ul className="circles">
          {[...Array(10)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Anime;
