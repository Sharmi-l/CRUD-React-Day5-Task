
import React, { useEffect } from "react";
import { CardActionArea, Card, CardContent , CardMedia, Typography, Button, TextField } from '@mui/material';
import { useState } from "react";
import Base from "./Base";
import { useHistory } from "react-router-dom";

 

function Employee ({employeeData, setEmployeeData}) {

   
// useEffect for login page: :

 useEffect(()=>{

//  console.log(localStorage.getItem("userName"))

if(!localStorage.getItem("userName")) {
  history.replace("/authpage")
}

 },[])



    
    // states for form (Input Field):
    const [image, setImage] = useState(""); 
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");
    const [job, setJob] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

   
    const [show, setShow]  = useState(true);

    const [editId, setEditId] = useState("")

    const history = useHistory();

    
      //Function for Delete:

    const deleteEmployeeData = async (id) => {

      try {

       const response = await fetch(`https://63770e2681a568fc250af315.mockapi.io/ReactEmployees/${id}` , {
  
       method  : "DELETE" ,   //DELETE for Delete function

       headers : {
              "Content-Type"  : "application/json"
       }

      });


      const data = await response.json()
      console.log(data);


    
         getEmployees();

      } catch (error) {

        console.log("error occured")
      }
     
    }

          
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

    return(
        
        <Base  className ="base"
         heading  = "Employee Details"
          >

        <div className="card-container">
        
          <div className="card-details">
    
            {employeeData.map((details, idx) => (
              <Card sx={{ maxWidth: 345 }} key = {idx}>
              <CardActionArea>
                <CardMedia className="img"
                 component="img"
                 height="180"
                 image= {details.image}
                 alt="Profile"
               />

               <CardContent>

                {/* Name */}
                 <Typography gutterBottom variant="h6" component="div">
                  <span className="name">Name:</span> {details.FirstName}  
                  <span className="name"> </span> {details.LastName}  
                 </Typography>

                 {/* Gender */}
                 <Typography variant="body2" color="text.secondary">
                 <span> Gender: </span>  {details.gender}
                 </Typography>

                 {/* Date of Birth */}
                 <Typography variant="body2" color="text.secondary">
                  <span>  D.O.B:  </span>{details.dob}
                 </Typography>

                 {/* Job-Position */}
                 <Typography variant="body2" color="text.secondary">
                 <span>  Job Position:  </span> {details.job}
                 </Typography> 

                 {/*Email Address  */}
                 <Typography variant="body2" color="text.secondary">
                 <span>   Email:  </span>  {details.email}
                 </Typography>

                 {/* Contact: */}
                 <Typography variant="body2" color="text.secondary">
                 <span>  Mobile Number: </span>{details.mobile}
                 </Typography>

               </CardContent>
               </CardActionArea>
              
             {/* Edit-Button  */}
             <Button  className="edit-btn"  color="primary" onClick={() =>  history.push(`/edit/${idx}`)}>Edit</Button>
             {/* Delete-Button */}
             <Button  className="delete-btn"  color="success" onClick={() => deleteEmployeeData(details.id)}>Delete</Button>
             {/* View-Button */}
             <Button  className="view-btn"   color="secondary" onClick={() => history.push(`/profile/${idx}`)}>View Employee</Button>

           </Card>

           ))}

        </div>

     </div>

        
  </Base>

    )
}

export default Employee;