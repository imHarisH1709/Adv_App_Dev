// import React from 'react';
import './GlowingDivs.css'; // Make sure to import your CSS file

const GlowingDivs = () => {
  return (
    <body>
      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>
    </body>
  );
};

export default GlowingDivs;
