import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setState(event.target.value)
        // console.log("on change")
    }
    const handleOnClick = ()=>{
        let newText = state.toUpperCase();
        setState(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowClick=()=>{
        let newText = state.toLowerCase();
        setState(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClear=()=>{
        let newText ='';
        setState(newText);
        props.showAlert("Text cleared","success")
    }
    
    const [state, setState] = useState("primary");

  

    // const handleCopy=()=>{
    //     let copyText = document.getElementById('myBox') ;
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999);
    //     navigator.clipboard.writeText(copyText.value);

    // }

    const handleCopy=()=>{
        navigator.clipboard.writeText(state);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handleRemove=()=>{
        setState(state.split(/\s+/).join(" "));
        props.showAlert("Extra spaces removed","success")
    }


    return (   
        <>
        <div className="container">
            <h1 style={{color: props.mode==="light"?"black":"white"}}>{props.heading}</h1>  
            <div className="mb-3"> 
                <textarea className="form-control" style={{color: props.mode==="light"?"black":"white",backgroundColor: props.mode==="light"?"white":"grey"}} id="myBox" value={state} onChange={handleOnChange}  rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2 my-1 " onClick={handleOnClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
            <button  type="button" className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button  type="button" className="btn btn-primary mx-2 my-1" onClick={handleRemove}>Remove extra spaces</button>
            
           
        </div>
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h1>Your text summary</h1>
            <p>{state.split(" ").filter((element)=>{return element.length!==0}).length} words and {state.length} characters</p>
            <p>{0.008* state.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{state.length > 0? state :"Enter something to preview about "}</p>
        </div>
        </>
    )
}


