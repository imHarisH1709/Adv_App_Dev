// ContactUs.js
// import React from 'react';
import './Contact.css'; // Make sure to import your CSS file
import Nav from './Nav'; // Make sure to import your Navbar component
// import GlowingDivs from './GlowingDivs';
function ContactUs() {
    return (
        <div>
            <div style={{marginLeft:"-16.15cm"}}><Nav /></div>
            <div className="contact-us-container">
                {/* <img src="path/to/your/image.jpg" alt="Contact Us" className="contact-us-image" /> */}
                <div className="contact-us-text">
                    <h1 style={{marginLeft:"0cm"}}>Contact Us</h1><br></br>
                    {/* <p>
                        If you have any questions or need assistance, feel free to contact us.
                        Our team is ready to help you.
                    </p>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 123 456 7890</p> */}
                    

                    {/* Form Section */}
                    <form className="contact-form" style={{marginLeft:"-1cm",width:"200%"}}>
                        <label htmlFor="name">Name </label>
                        <div className="name-inputs">
                            <input type="text" id="firstName" name="firstName" placeholder="First" required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last" required />
                        </div>

                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="email">Phone Number </label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Comment Below</label>
                        <textarea id="message" name="message" rows="4"></textarea>

                        <button type="submit">SUBMIT</button>
                    </form>
                    {/* End of Form Section */}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
