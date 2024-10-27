import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    
    const handleUp = ()=>{
        console.log("Uppercase clicked");
        let upText = text.toUpperCase();
        setText(upText)
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    const handleLow = ()=>{
        let lowText = text.toLowerCase(); 
        setText(lowText);
    }

    const handleClear = ()=>{
        let clearText = "";
        setText(clearText);
    }


  return (
    <div>
  <div className="form-group">
    <h2 className="my-3">{props.heading}</h2>
    <textarea className="form-control" id="myBox" rows="15" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleUp}>To Uppercase</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleLow}>To Lowercase</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear</button>


  <div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.length} characters</p>
    <p>{text.split(" ").length} words</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

  </div>
  )
}



