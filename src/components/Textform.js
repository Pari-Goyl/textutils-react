import React, { useState } from "react";
// import PropTypes from 'prop-types'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success")
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success")
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text cleared","success")
    };
    const handleCopy = () => {
        var txt = document.getElementById("myTxt");
        txt.select();
        // txt.setSelectRange(0,9999);
        // nevigate.clipboard.writeText(txt);
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    };
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    // document.querySelector('.conatiner').style.backgroundC
    return (
        <>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#333333" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                        id="myTxt"
                        rows="8"
                        placeholder="Enter Text here.."
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Upper case
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert to Lower case
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    {/* Copy Text */}
                    Select all
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length === 0 ? 0 : text.split(" ").length-1} words and {text.length} characters
                </p>
                {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview it..."}</p>
            </div>
        </>
    );
}
