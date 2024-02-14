import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function EventBox() {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState(0);
  const [Alternatephonenumber, setAlternatePhoneNumber] = useState(0);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState(0);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      name:name,
      phonenumber:phonenumber,
      alternatephonenumber:Alternatephonenumber,
      email:email,
      address:address,
      age:age
    };

    try {
      const response = await axios.post('http://localhost:8080/api/UserBooking/post/booking', eventData);
      console.log(response.data);
      // Redirect user or show success message as needed
    } catch (error) {
      console.error('Error submitting event data:', error);
      // Handle error: display error message to the user
    }
    alert("Enrolled")
  };

  return (
    <div>
      <div style={{marginLeft:"-21cm"}}><Nav/></div>
      <div className="modal-container">
        <div className="modal-content">
          <div className="evnt-create-box">
            <div className=''>
              <h1 className='eb-h1'>Book your Slot:</h1><br></br>
              <div className='event-details'>
                <form onSubmit={handleSubmit}>
                  <div className='event-items'>
                    <label className='eb-label'>Enter Your Name:</label>
                    <input style={{color:"black"}} className="eb-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className='eb-label'>Applicant Mobile No:</label>
                    <input style={{color:"black"}} className="eb-input" type="tel" placeholder="Enter mobile number" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    <label className='eb-label'>Alternate Mobile No:</label>
                    <input style={{color:"black"}}className="eb-input" type="tel" placeholder="Enter alternate mobile number" value={Alternatephonenumber} onChange={(e) => setAlternatePhoneNumber(e.target.value)} required />
                    <br/><label className='eb-label'>Applicant Email Id:</label>
                    <input style={{color:"black"}} className="eb-input" type="email" placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label className='eb-label'>Age:</label>
                    <input style={{color:"black"}} className="eb-input" type="number" placeholder="Enter the Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                  </div>
                  <div className='event-items'>
                    <label className='eb-label'>Applicant Address</label>
                    <textarea className="eb-textarea" type="text" rows="4" cols="50" placeholder="Enter Applicant Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <button type="submit" className='create-button'>Enroll now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBox;
