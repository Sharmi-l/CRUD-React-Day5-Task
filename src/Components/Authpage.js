import { Button, FormControl, FormLabel, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Base from './Base';
import { loginData } from './Login-Data';



const Authpage = () => {
  
  const [LoginData, setLoginData ] = useState(loginData)
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory()

   function loginUser() {

    if(loginName === LoginData[0].name && password === LoginData[0].password){
      // console.log("password correct")
      localStorage.setItem("userName", loginName);
      setError(false)
      history.push("/details")
    }
    else{
      // console.log("password wrong")
      setError(true)
    }

   }

  return (
    <Base  className ="base"
     
    heading = "Authentication Page"
    description = " Login "
    
    >
    
    <FormControl>
     
     <FormLabel id='label' >Email</FormLabel>
     <Input
      // html input attribute  
      name = "email"
      type = "email"
      placeholder='Email'
      onChange={(e) => setLoginName(e.target.value)}
     />
    </FormControl> <br></br> <br></br>


    <FormControl>
     
     <FormLabel  id='label'>Password</FormLabel>
     <Input
      // html input attribute  
      name = "password"
      type = "password"
      placeholder='Password'
      onChange={(e) => setPassword(e.target.value)}
     />
    </FormControl> <br></br> <br></br>

    <Button id='login-btn' onClick={loginUser} >Log In</Button>
   
      
     {error ?  <Typography> Invalid Credentials </Typography> : " "}

     <div className='Hint'>
      {/* For Security Purpose: */}
       [For Security Purpose :-  Kindly enter Email : admin and Password : 12345 ]
     </div>


    </Base>
 
  )
}

export default Authpage