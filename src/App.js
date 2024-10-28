import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#201650'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'

    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}

    </div>
    {/* <Navbar/> */}
    </>
  );
}

export default App;
