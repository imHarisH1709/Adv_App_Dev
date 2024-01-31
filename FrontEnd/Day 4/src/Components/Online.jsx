// OnlineClassSchedule.js
import { useEffect } from 'react';
import './Online.css'; // Make sure to import your CSS file
import Nav from './Nav'; // Make sure to import your Navbar component
import logo from "../Components/blur.jpg";

function OnlineClassSchedule() {
    useEffect(() => {
        const bodyStyle = document.body.style;
        bodyStyle.backgroundImage = `url(${logo})`;
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
        return () => {
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <div>
            <Nav />
            <div className="schedule-container">
                <div className="schedule-text">
                    <h1>Online Class Schedule</h1>
                </div>
                <div className="glass-container">
                    <div className="schedule-days">
                        <div className="day">
                            <h3>Monday</h3>
                            <p>9:30 AM - 6:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Tuesday</h3>
                            <p>4:30 PM - 8:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Wednesday</h3>
                            <p>4:30 PM - 8:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Thursday</h3>
                            <p>9:30 AM - 6:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Friday</h3>
                            <p>4:30 PM - 8:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Saturday</h3>
                            <p>9:30 AM - 6:30 PM</p>
                        </div>
                        <div className="day">
                            <h3>Sunday</h3>
                            <p>4:30 PM - 8:30 PM</p>
                        </div>
                        {/* Add similar content for other days */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineClassSchedule;
