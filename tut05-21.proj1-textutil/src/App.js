
 // this app is functional based
import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, // day 16
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); // whether dark mode is enable or not
  const [alert , setAlert] =useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => { // alert is autmatically remove  after 1500 sec
      setAlert(null)
    },1500);
  }
   //const removeBodyClasses=() =>{
      //document.body.classList.remove('bg-light')
     // document.body.classList.remove('bg-dark')
    // document.body.classList.remove('bg-warning')
    // document.body.classList.remove('bg-danger')
    // document.body.classList.remove('bg-success')
 // }
  const toggleMode =(cls)=>{ // this is change the mode in dark or light
    //removeBodyClasses();
    console.log(cls);
    //document.body.classList.add('bg-'+cls)
    if(cls==='dark'){
      setMode('white')
    }
    else{
      setMode('dark')
    }
    if(mode ==='light'){
       setMode("dark")
       document.body.style.backgroundColor="#042743"
       showAlert("dark mode has been enable","success")
 
       //tut 15: change title

      //  document.title="TextUtils-Dark Mode" // this change the title in anable to dark mode and show in brower
      //  //this are used to atract you and also used  to show fake alert
      //  setInterval(()=>{
      //   document.title ="TextUtil is Amazing Mode"
      //  },2000)
      }
      else{
        setMode("light")
       document.body.style.backgroundColor="white"
       showAlert("light mode has been enable","success")

      //  document.title="TextUtils-light Mode" // this change the title in anable to light  mode and show in brower
      //  //this are used to atract you and also used  to show fake alert
      //  setInterval(()=>{
      //   document.title =" install TextUtil "
      //  },1500)
      }
  }
  return (
    <>
     <Router>
   <Navbar title="textutil" aboutText="About us" mode={mode} toggleMode={toggleMode}/>  
   {/* <Navbar/> */}
     <Alert alert={alert}/>
   
     <div className="container  my-3">
     <Routes> 
      {/* exact keyword are used to exact matching the component than change either not change because react are do parsial matching  than it run previous component*/}
          <Route exact path="/about"
             element= {<About  mode={mode}/>}> 
          </Route>
          <Route exact path="/"
             element={<TextForm 
             heading="Try TextUtil- Word Counter , Charecter Counter , Remove Extra Space" 
             mode={mode} 
             toggleMode={toggleMode} 
             showAlert={showAlert}/>}>
          </Route>
     </Routes>
     </div>
   </Router>
   </>
  );
}
export default App;

// title and aboutText are prpos 

/*
tut 16 : React Router   repalce the Switch -> Routes

 Previous SYNTAX
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 <Switch>
  <Route path="/about">
      <About />
  </Route> 
</Switch>


UPDATE SYNTAX

  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  return(
    <Router>
  <Routes>
          <Route path="/about"
           element={ <About />}> 
          </Route>
          
  </Routes>
  <Router/>
)
  CONNECT TO PAGE USED TO 
  Link to in place of a and herf in Navbar
  Routes always write inside of Router lag

 */
