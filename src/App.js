import './App.css';
import Navcomp from './components/Navcomp';
import Textcomp from './components/Textcomp';
import React, {useState} from 'react'
import Aboutcomp from './components/Aboutcomp';
// import Alertcomp from './components/Alertcomp';
import NotFoundcomp from './components/NotFoundcomp';
import { BrowserRouter as Router,Route, Routes,} from 'react-router-dom';


function App() {
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) =>{
  //   setAlert(
  //     {
  //       message:message,
  //       type:type
  //     })
  //     setTimeout(() => {
        
  //       setAlert(null)
  //     },3000);
      

  // }

  const[mode, setMode] = useState("light");
   
  const togglemode = () => {
  if (mode === "dark"){
    setMode("light")
    document.body.style.background = "white";
    // showAlert("Light mode is enabled", "success")

  }else{
    setMode("dark")
    document.body.style.background = "#1c1520";
    // showAlert("Dark mode is enabled", "success")
  }
  }
  
  return (
    <>
    
      <Router>
        <Navcomp title = "Text-analyzer" mode = {mode} togglemode = {togglemode} />
        {/* <Alertcomp alert = {alert} /> */}
      <Routes> */
        <Route exact path="/about" element={ <Aboutcomp mode = {mode} />}/>
        <Route exact path="/" element= {<Textcomp /*showAlert = {showAlert}*/ heading= "Text analyzer"  mode = {mode} />}/>
        <Route exact path="*" element={<NotFoundcomp />} />
      </Routes>
      
      </Router>
     
    </>
  );
  
}

export default App;
