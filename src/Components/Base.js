
import { AppBar, Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";


   

function Base ({heading, description, children}) {

    // React Navigation:
    const history = useHistory()

    // Function for Logout:
    function logoutMethod() {
       localStorage.removeItem("userName")
       history.push("/")
    }

    return(
        <div className="base">
            
            {/* Navbar */}
            <AppBar className="navbar"   position="static">
                
                <Toolbar variant="dense" className="Navbar-icons">
                   <button className="nav-btn"  color="inherit" onClick={() => history.push("/")}>HOME</button>
                  
                   <button className="nav-btn"  color="inherit" onClick={() => history.push("/details")}>EMPLOYEES</button>
                   <button className="nav-btn"   color="inherit"  onClick={() => history.push("/add-data")}>ADD-DATA</button>
                   <button className="nav-btn"  color="inherit"  onClick={() => history.push("/authpage")}>LOGIN</button>
                 
                   
                   {/* logout: */}
                   <button color="inherit" className="nav-btn" id ="logout" onClick={logoutMethod}>LOGOUT</button>
                </Toolbar>

             </AppBar>

    
            {/* Base-Heading */}
            <header>
                <h1 className="heading">{heading}</h1>
            </header>
            

            <main className="base-main">
                
            {/* Base-Description */}
            <h3 className="heading">{description}</h3>
           
            {/* Base-Children - (Contents) */}
 
                <div>
                    {children}
                </div>

            </main>

            

        </div>
    )
}

export default Base;