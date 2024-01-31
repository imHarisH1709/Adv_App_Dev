// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    // Add more profile information as needed
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
        <h1>{user.name}</h1>
      </div>
      <div className="profile-details">
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
          <p>{user.email}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="detail-icon" />
          <p>{user.phone}</p>
        </div>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
