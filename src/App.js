import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {component,useState,usestate} from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  // const[mood, setMood]=useState("white")
  // const togglemood=()=>{
  //   if(mood=='white'){
  //     setMood({
  //       color:'black',
  //       baclgroundColor:'white'
  //     })
  //   }
  //   else{
  //     setMood({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //   }
  // }
  return (
    
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
       
    <Route exact path="/general" element={< News key="general"  pageSize={5} country="us" category="/general"/>}/>
    <Route exact path="/business" element={<News key="business" pageSize={5} country="us" category="business"/>}/>
    <Route exact path="/entertainment" element={<News key="entertainment" pageSize={15}country="us" category="entertainment"/>}/>
    <Route exact path="/health" element={<News key="health" pageSize={5} country="us" category="health"/>}/>
    <Route exact path="/science" element={<News key="science" pageSize={5} country="us" category="science"/>}/>
    <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}/>
    <Route exact path="/technology" element={<News key="technology" pageSize={5}a country="us" category="technology"/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
