import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked + text");
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleloClick = () => {

        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        // console.log("On Change handler");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="7"></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className="btn btn-primary mx-3">Convert to Uppercase</button>
                <button type="button" onClick={handleloClick} className="btn btn-primary mx-3" >Convert to LowerCase</button>
                <button type="button" onClick={handleClearClick} className="btn btn-primary mx-3">Clear</button>

            </div>
            <div className='container my-4'>
                <h1>Your Text Here:</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes reads</p>

                <h3>Preveiw</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

