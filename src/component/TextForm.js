import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Upppercase is clicked' + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value)
    }

    const handleCopy = () => {
        // let text = document.getElementById('myBox')
        // text.select();   // to select the text
        navigator.clipboard.writeText(text)
        // navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges()   // get selection is a function - (removeallranges is a function - go selected text ho ga wo remove ho gaye ga)
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success")
    }


    // const Capitalize = (word) => {
    //     let newText = word.toLowerCase();
    //     return newText.charAt(0).toUpperCase() + newText.slice(1)
    // }


    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter your text here');  // first thing you understand is write inside the function component - second thing is we use array destructing syntax means we set both text & settext - we cannot update text variable in simple way/normal variable like (text = "hello") we can use updation function that's we specifiy - gis tarah ap normal variable ko update kartay ha is tarah ap state ko update nahi kar saktay.

    // whenever we chnage the text we use this method:
    // text = "new text"   // wrong way to change the state
    // setText("new text")   // correct way to change the state

    return (
        <>
            <div className='cotainer'>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button className="btn btn-primary mx-1 my-1" onClick={Capitalize(text)}>Capitalize</button> */}
                {/* <button className="btn btn-primary mx-2" onClick={() => {
                    handleUpClick();
                    wordcheck();
                }}>Convert to LowerCase</button> */}
            </div>
            <div className="container my-2">
                <h2>Your text Summary</h2>  {/* \s means any white spaces with includeing new line */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>  {/* go text ki length ho gi wo number of characters ho gay */}
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                {/* <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>  {this.text} used for class based component */}
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}