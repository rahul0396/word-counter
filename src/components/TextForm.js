import React,{useState} from 'react'

export default function TextForm(props) {
    const btnclick=()=>{
        let newtext=state.toUpperCase();
        setstate(newtext)
    }
    const changehandler=(event)=>{
        // setstate("clikcked")
        setstate(event.target.value);
        
    }
    const btnlowerclick=()=>{
        console.log("lowercsae")
        let newtext=state.toLowerCase();
        setstate(newtext);
    }
    const clearbtnclick=()=>{
        setstate("");
    }
    const copybtnclick=()=>{
        setcopy(state);


        
    }

     const [state, setstate] = useState("enter here")
    // //  const, s] = useState(initialState)
    const [copy, setcopy] = useState("")

    return (<>
        <div>
            <h1  style={{margin:"50px", marginBottom:"0"}}>{props.heading}</h1>
            <label htmlFor="textinput"></label>
            <textarea onChange={changehandler} value={state} style={{margin:"50px", marginBottom:"5px", marginTop:"0",display:"block"}} name="" id="textinput" cols="60" rows="10"></textarea>
            <button style={{marginLeft:"50px" }}onClick={btnclick} className="btn btn-primary">Convert to uppercase</button>
            <button className="btn btn-primary" style={{margin:"5px"}}onClick={btnlowerclick}>Lowercase</button>
            <button className="btn btn-primary" style={{margin:"5px"}}onClick={clearbtnclick}>Clear Text</button>
            <button className="btn btn-primary" style={{margin:"5px"}}onClick={copybtnclick}>copy Text</button>

        </div>
        <div className="container mx-5 my-2">
            <h1>Preview</h1>
            <p>{state.split(" ").length}words and {state.length} characters</p>  
            <p>Time in reading={((state.split(" ").length)/125)*60} seconds</p>  
            <h2>copied text area</h2>
            <p>{copy}</p>
                </div>
    </>
    )
}
