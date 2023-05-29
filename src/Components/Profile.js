import React from 'react';
import { useParams } from 'react-router-dom';
import Base from './Base';

const Profile = ({employeeData}) => {
    // console.log(employeeData);
    
    const {id} = useParams();
    // console.log(id);
    
    const employee = employeeData[id]


  return (
    <Base 
      description = "Profile"
    >

    <div>
      
      
      <div>
      <img src={employee.image}  alt="profile" height="200"  className="img" />
      </div>


      <div className='profile-body'>

           <div className='profileBody' id='profilename'> Name : {employee.FirstName}
           <span className='profileBody' id='profilename'>{employee.LastName}</span>
           </div>

           <div className='profileBody'> Gender : {employee.gender}</div>
           <div className='profileBody'> D.O.B : {employee.dob}</div>
           <div className='profileBody'> Job : {employee.job}</div>
           <div className='profileBody'> Email : {employee.email}</div>
           <div className='profileBody'> Contact : {employee.mobile} </div>
  
      
      </div>

     </div>


    </Base>
  )
}

export default Profile