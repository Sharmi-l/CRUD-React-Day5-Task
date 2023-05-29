
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Authpage from './Components/Authpage';
import Employee from './Components/Employee';
import Welcompage from './Components/Welcompage';
import Profile from './Components/Profile';
import { useState } from 'react';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import React, { useEffect } from "react";


  


function App() {

  const [employeeData, setEmployeeData] = useState([]);
         
  useEffect(() => {
  
    // GET Method:

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
  
       getEmployees();
  
  }, [])
  


  return (
    <div className="App">

      
      <Switch>
         
       
         <Route exact path = "/">      
         <Welcompage/>
         </Route>

         <Route path = "/authpage">
           <Authpage/>
         </Route>

      
         <Route path = "/details">
              <Employee employeeData = {employeeData} setEmployeeData={setEmployeeData} />
         </Route>

         <Route path = "/employee">
              <Redirect to = "/details" />
         </Route>

         {/* View page */}
         <Route path = "/profile/:id">
               <Profile employeeData = {employeeData}  />
         </Route>

         {/*Form page (Add page) */}
         <Route path = "/add-data">
               <AddEmployee employeeData = {employeeData} setEmployeeData={setEmployeeData} />
         </Route>

         {/*Form (Edit page) */}

         <Route path = "/edit/:ID">
                <EditEmployee employeeData = {employeeData}  setEmployeeData={setEmployeeData} />
         </Route>

      </Switch>
    

    </div>
  );
}

export default App;




 