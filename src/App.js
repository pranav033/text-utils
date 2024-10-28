import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1220);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#201650';
      showAlert("Dark mode enabled", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")

    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert = {showAlert}/>
    {/* <About/> */}

    </div>
    {/* <Navbar/> */}
    </>
  );
}

export default App;
