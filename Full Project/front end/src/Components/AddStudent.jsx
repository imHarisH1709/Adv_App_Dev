import './AddStudent.css';
import AdminNav from './AdminNav';
// import Comnav from './Comnav';
function AddStudent() {
  return (
    <div>
        <AdminNav/> 
        <header></header>
    <div className="backq11">
      <div className="table77">
      <div className="grid-container">
  <div className="grid-item">Student Name: HarisH</div>
  <div className="grid-item">Student phone: 9988776655</div>
  {/* <div className="grid-item">Applicant Loan Id: 556677</div>  */}
</div>
<div className="grid-container2">
  <div className="grid-item2">Applicant Email: harishofficial11@gmail.com</div>
  </div>
  <div className="grid-container3">
  <div className="grid-item3">Student Pan no: 2398xxxxx</div>
  <div className="grid-item3"></div>
  <div className="grid-item3"><button className='accreg'>Added</button></div>
  </div>
      </div>
      <div className="table77">
      <div className="grid-container">
  <div className="grid-item">Student Name: Ajai</div>
  <div className="grid-item">Student phone: 9955435272</div>
  {/* <div className="grid-item">Applicant Loan Id: 356677</div>  */}
</div>
<div className="grid-container2">
  <div className="grid-item2">Student Email: Ajaibalaji1231@gmail.com</div>
  </div>
  <div className="grid-container3">
  <div className="grid-item3">Student Pan no: 7598xx</div>
  <div className="grid-item3"></div>
  <div className="grid-item3"><button className='accreg2'>Added</button></div>
  </div>
      </div>
    </div>
    </div>
    
   
  )
}

export default AddStudent;