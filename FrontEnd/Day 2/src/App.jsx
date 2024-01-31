import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import Nav from './Components/Nav';
import HomePage from './Components/Home';
import OnlineClassSchedule from './Components/Online';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Courses from './Components/Courses';
import Join from './Components/Join';
import Join1 from './Components/Join1';
import Join2 from './Components/Join2';
import Join3 from './Components/Join3';
import AdminHome from './Components/AdminHome';
import AddStudent from './Components/AddStudent';
import EventBox from './Components/EventBox';
import Offers from './Components/Offers';
import ApplyForm from './Components/ApplyForm';




const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
         <Route path="/"element={<LoginForm/>}/>
         <Route path="/Register"element={<RegistrationForm/>}/>
         <Route path="/Nav"element={<Nav/>}/>
         <Route path="/Home"element={<HomePage/>}/>
         <Route path="/Online"element={<OnlineClassSchedule/>}/>
         <Route path="/About"element={<AboutUs/>}/>
         <Route path="/ContactUs"element={<ContactUs/>}/>
         <Route path="/Course"element={<Courses/>}/>
         <Route path="/JoiN"element={<Join/>}/>
         <Route path="/Join1"element={<Join1/>}/>
         <Route path="/Join2"element={<Join2/>}/>
         <Route path="/Join3"element={<Join3/>}/>
         <Route path="/AdminHome"element={<AdminHome/>}/>
         <Route path="/Add"element={<AddStudent/>}/>
         <Route path="/Box"element={<EventBox/>}/>
         <Route path="/Offers"element={<Offers/>}/>
         <Route path="/Apply"element={<ApplyForm/>}/>


          </Routes>
      </Router>
    </div>
  )
}

export default App
