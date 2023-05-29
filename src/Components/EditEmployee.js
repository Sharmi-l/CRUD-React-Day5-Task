import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
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

const EditEmployee = ({employeeData, setEmployeeData}) => {
  console.log(employeeData)

  const history = useHistory();

  const {ID} =  useParams();

    // console.log(id)

  const employee = employeeData[ID]
     console.log(employee)
    //  console.log(employee.id)

  let employeeId = employee.id;

// Formik for Update:

  const {handleSubmit, values, handleChange, handleBlur,touched, errors, setValues} = useFormik({

    

    initialValues : {
      image      : employee.image,
      FirstName  : employee.FirstName,
      LastName   : employee.LastName,
      gender     : employee.gender,
      dob        : employee.dob,
      job        : employee.job,
      email      : employee.email,
      mobile     : employee.mobile
    },
  
    validationSchema : formValidationSchema,
  
    onSubmit : (editEmployeeData) => {
      console.log("onSubmit", editEmployeeData)
      updateEmployeeData(editEmployeeData)
  }
  
  })
  


    // Update functions for Update datas:
       
      const  updateEmployeeData = async (updatedObj) => {

        try {

        console.log(updatedObj)
          const response = await fetch (`https://63770e2681a568fc250af315.mockapi.io/ReactEmployees/${employeeId}`, {
  
          method  : "PUT" ,   //PUT for Update function
  
          body    :  JSON.stringify( updatedObj),
  
          headers : {
                 "Content-Type"  : "application/json"
          },

         
   
         }); 
         
          const data = await response.json();
          console.log(data);
          
          
       getEmployees();

       history.push("/details")

        } catch (error) {
       
        console.log("Error Occured")
      }

    };

    const getEmployees = async () => {
  
      try {
  
        const response = await fetch("https://63770e2681a568fc250af315.mockapi.io/ReactEmployees" , {
  
         method: "GET"    //GET for Read function
  
        }); 
        
  
        const data = await response.json();
        // console.log(data);
        setEmployeeData(data)
  
      }catch (error) {
        console.log("Error Occured")
      }
  
    };

  return (
   
    <Base
    heading = "Edit Employee Details In this form"
    description = "Update the details Details"
    >
    <div>   
      
      <form className="form" onSubmit={handleSubmit}>
          
        {/* Image */}
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
          type="FirstName"
          value = {values.FirstName}
          label="First Name" id="input"  />
          <div style={{color:"crimson"}}> {touched.FirstName  && errors.FirstName  ? errors.FirstName : ""}</div>
         
         {/* LastName: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="LastName"
          type="LastName"
          value = {values.LastName}
          label="Last Name" id="input"  />
          <div style={{color:"crimson"}}> {touched.LastName && errors.LastName ? errors.LastName : ""}</div>

         {/* Gender: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="gender"
          type="gender"
          value = {values.gender}
          label="Gender" id="input" />
          <div style={{color:"crimson"}}>  {touched.gender  && errors.gender ? errors.gender : ""}</div>
         
         {/* Date of Birth: */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="dob"
          type="dob"
          value = {values.dob}
          label="D.O.B" id="input" />
          <div style={{color:"crimson"}}> {touched.dob && errors.dob ? errors.dob : ""}</div>
         
         {/* Job */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="job"
          type="job"
          value = {values.job} 
          label="Job-Role" id="input"  />
          <div style={{color:"crimson"}}> {touched.job && errors.job ? errors.job : ""}</div>

         {/* Email */}
         <TextField 
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
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
        
        {/* Update-Button */}
        <div className='button'>
       
          <Button
            className="add-btn"
            type = "submit"
            variant="contained" color="success">  UPDATE DATA </Button> 

        </div>
        
     </form>


    </div>

 </Base>

  )
}

export default EditEmployee;

