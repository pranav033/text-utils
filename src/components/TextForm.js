import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
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

    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "));
    }


  return (
    <div>
  <div className="form-group">
    <h2 className="my-3" style={{color : props.mode==='dark'?'white':'grey'}}>{props.heading}</h2>
    <textarea className="form-control" id="myBox" rows="15" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#201650':'white' , color : props.mode==='dark'?'white':'grey'}}></textarea>
  </div>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleUp}>To Uppercase</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleLow}>To Lowercase</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy</button>
  <button  className="btn btn-primary my-3 mx-1" onClick={handleExtraSpace}>Delete Extra Space</button>




  <div className='container' style={{color : props.mode==='dark'?'white':'grey'}}>
    <h2>Your Text Summary</h2>
    <p>{text.length} characters</p>
    <p>{text.split(" ").length} words</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter text in the textbox to preview."}</p>
  </div>

  </div>
  )
}



