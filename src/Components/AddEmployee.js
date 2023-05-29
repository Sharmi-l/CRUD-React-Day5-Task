import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Base from './Base';
import * as yup from 'yup';
import { useFormik } from 'formik';


//  Schema Validations:

const formValidationSchema = yup.object({

  image     : yup.string().required('Please enter image url'),

  FirstName : yup.string()
              .min(2, 'Firstname should be atleast 2 characters long')
              .required("Firstname is required"),

  LastName  : yup.string()
              .required("Lastname is required"),

  gender    : yup.string().required('Gender is required'),

  dob       : yup.string().required('D.O.B is required'),

  job       : yup.string().required("Please enter your job position"),

  email     : yup.string().email('Invalid email address').required('Email address is required'),

  mobile    : yup.number()
              // .max(10, 'Mobile No. should be maximum 10 numbers long')
              .required("Please enter your contact number"),
})


// Function for Add data:

const AddEmployee = ({employeeData, setEmployeeData}) => {

// Formik

const {handleSubmit, values, handleChange, handleBlur,touched, errors} = useFormik({

  initialValues : {
    image      : "",
    FirstName  : "",
    LastName   : "",
    gender     : "",
    dob        : "",
    job        : "",
    email      : "",
    mobile     : "" 
  },

  validationSchema : formValidationSchema,

  onSubmit : (newEmployeeData) => {
    console.log("onSubmit", newEmployeeData)
    addNewEmployee(newEmployeeData)
}

})


// For Router:
        const history = useHistory();

// POST Method :

        const addNewEmployee = async (newEmployee) => {

             try {

        const response = await fetch("https://63770e2681a568fc250af315.mockapi.io/ReactEmployees" , {
  
        method  : "POST" ,   //POST for Create function

        body    :  JSON.stringify(newEmployee),

        headers : {
               "Content-Type"  : "application/json"
        }
 
       }); 

       const data = await response.json()
       console.log(data)
    
        
       getEmployees();

       history.push("/details")

             } catch (error) {
              console.log("error occured")
             }
    
        };
    
        const getEmployees = async () => {
  
          try {
      
            const response = await fetch("https://63770e2681a568fc250af315.mockapi.io/ReactEmployees" , {
      
             method: "GET"    //GET for Read function
      
            }); 
      
            const data = await response.json();
            console.log(data);
            setEmployeeData(data)
      
          }catch (error) {
            console.log("Error Occured")
          }
      
        };
      
      

  return (
    <Base  
    heading = "Add Employee Details In this form"
    >
    
{/* Base Children for contents */}

  <div>   
      
      <form className="form" onSubmit={handleSubmit}>
          
          {/* Image: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="image"
          value = {values.image}
          label="Image Url" id="input" />      
          <div style={{color:"crimson"}}>{touched.image && errors.image ? errors.image : ""}</div>

         {/* FirstName: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="FirstName"
          value = {values.FirstName}
          label="First Name" id="input"  />
          <div style={{color:"crimson"}}> {touched.FirstName  && errors.FirstName  ? errors.FirstName : ""}</div>
        
         {/* LastName: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="LastName"
          value = {values.LastName}
          label="Last Name" id="input"  />
          <div style={{color:"crimson"}}> {touched.LastName && errors.LastName ? errors.LastName : ""}</div>

         {/* Gender: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="gender"
          value = {values.gender}
          label="Gender" id="input" />
          <div style={{color:"crimson"}}>  {touched.gender  && errors.gender ? errors.gender : ""}</div>

         {/*Date of Birth:  */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="dob"
          value = {values.dob}
          label="D.O.B" id="input" />
          <div style={{color:"crimson"}}> {touched.dob && errors.dob ? errors.dob : ""}</div>
         
         {/* Job */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="job"
          value = {values.job} 
          label="Job-Role" id="input"  />
          <div style={{color:"crimson"}}> {touched.job && errors.job ? errors.job : ""}</div>

        {/* Email: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value = {values.email}
          label="Email" id="input"  />
          <div style={{color:"crimson"}}> {touched.email && errors.email ? errors.email : ""}</div>
         
         {/* Mobile */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="mobile"
          value = {values.mobile} 
          label="Contact"  id="input"  />  
          <div style={{color:"crimson"}}>{touched.mobile  && errors.mobile ? errors.mobile : ""}</div>
        
        {/* Add-Button: */}
        <div className='button'>
       
           <Button
            className="add-btn"
            type = "submit"
            variant="contained" color="success"> ADD DATA</Button> 

        </div>
        
      </form>

    </div>

    
  </Base>
  )
}

export default AddEmployee