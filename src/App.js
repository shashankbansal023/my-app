
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  const [alert, setalert] = useState(null)
 const [mode,setMode] = useState("light");

 const showAlert=(message,type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      },2000);
 }

 const toggleSwitch=()=>{
   if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor = "#0f3442";
      showAlert("Dark Mode Enabled","success")
   }else{
     setMode('light');
     document.body.style.backgroundColor = "white";
     showAlert("Light Mode Enabled","success")
   }
 }

const toggleButton = (color)=>{
  document.body.style.backgroundColor = color;
  showAlert(`${color} mode on`,"success");
}


 return (
   <>
    <Router>       
    <Navbar title="TextUtils" toggle={toggleSwitch} mode={mode} toggl={toggleButton}/>
    <Alert alert={alert}/>
        <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze:" mode={mode}/>} />
            <Route path="/about"  element={ <About/> } />
         </Routes>
    </Router>
    </>
  ); 
}


export default App;
