import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUp = ()=>{ 
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleLow = ()=>{
        let lowText = text.toLowerCase(); 
        setText(lowText);
        props.showAlert("Converted to lowercase", "success");

    }

    const handleClear = ()=>{
        let clearText = "";
        setText(clearText);
        props.showAlert("Text cleared", "success");

    }

    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied", "success");

    }

    const handleExtraSpace = ()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "));
      props.showAlert("Extra spaces removed", "success");

    }


  return (
    <div>
  <div className="form-group">
    <h2 className="my-3" style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
    <textarea className="form-control" id="myBox" rows="15" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#201650':'white' , color : props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUp}>To Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLow}>To Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleExtraSpace}>Delete Extra Space</button>




  <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.length} characters</p>
    <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words</p>
    <p>{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Nothing to preview."}</p>
  </div>

  </div>
  )
}



