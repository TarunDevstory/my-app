
import React , { Component} from  "react";
import UseEffectAPI from "./components/Team.components";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/UserNavbar";


const App = () =>{
  
  return (
    
      <Router>
        <Routes>
          {/* <Route path="/"element={<Navbar/>}/> */}
        </Routes>
        <UseEffectAPI/>
      </Router>
  
      
   
  
   );
  
} 

export default App;
