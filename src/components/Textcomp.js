import '../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faVolumeHigh  } from '@fortawesome/free-solid-svg-icons';
import { renderToString } from 'react-dom/server';

export default function Textcomp(props) {

  const handleVoiceClick = () => {
    // console.log("Handlevoice 'onclick'")

      const speechSynthesis = window.speechSynthesis;
      const speechUtterance = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices.find((voice) => voice.name === 'Microsoft David Desktop');
      speechUtterance.voice = selectedVoice;
      speechUtterance.rate = 0.7;
      speechSynthesis.speak(speechUtterance);
    }
  

  const handleClick = () => {
    // console.log("Handled 'onclick'")
    setText(text.toUpperCase());
    // props.showAlert("Converted into uppercase", "success")
  }

  const capitalizeAfterPeriod = (text) => {
    let sentences = text.split('. ');

    sentences = sentences.map((sentence) => {
      const firstChar = sentence.charAt(0);
      if (firstChar === firstChar.toUpperCase()) {
        // Uppercase sentence, convert to lowercase and capitalize
        return sentence.toLowerCase().replace(/^\w/, (char) => char.toUpperCase());
      } else if (firstChar === firstChar.toLowerCase()) {
        // Lowercase sentence, capitalize
        return sentence.replace(/^\w/, (char) => char.toUpperCase());
      } else {
        // Sentence doesn't start with a letter, leave it unchanged
        return sentence;
      }
    });
  
    return sentences.join('. ');
  };

  const handlecapClick = () => {
    // console.log("Handledcap 'onclick'")
    setText(capitalizeAfterPeriod(text));
    }
    
  const handleanClick = () => {
    // console.log("Handledless 'onclick'")
    setText(text.toLowerCase());
    // props.showAlert("Converted into lowercase", "success")
  }

  const handleclClick = () => {
    // console.log("Handledclear 'onclick'")
    setText("");
    // props.showAlert("Text cleared", "success")
  }

  const handlewsClick = () => {
    // console.log("Handledremovespace 'onclick'")
    setText(text.split(/[ ]+/).filter((element)=>{return element.length!==0}).join(" "));
    // props.showAlert("Extra space is removed", "success")
  }

  const handlecpClick = () => {
    // console.log("Handledcopy 'onclick'");
     let change = document.getElementById("changename"); 
     navigator.clipboard.writeText(text);
     change.innerHTML =  renderToString(<><FontAwesomeIcon icon={faCheck} /> Copied!</>);
     setTimeout(() => {
        change.innerHTML = "Copy text";
     }, 1000);
    //  props.showAlert("Text is copied!", "success")
     
  }

  const handledlClick = () => {
    // console.log("Handledownload 'onclick'")
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element);
    element.click();
    // props.showAlert("Text is downloaded", "success")
  }

  const handlecpiClick = () => {
    // console.log("Handlecapitalize 'onclick'");
    const regexLower = /^[a-z]*$/;
    const regexUpper = /^[A-Z\s]*$/;
  
    // Check the current case of the text using regular expressions
    if (regexLower.test(text)) {
      // If the text is in lowercase, capitalize the entire text
      setText(text.charAt(0).toUpperCase() + text.slice(1));
    } else if (regexUpper.test(text)) {
      // If the text is in uppercase, convert it to lowercase and then capitalize
      setText(text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1));
    
    } else {
      // If the text has a mix of cases, capitalize the first letter of each word
      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      const text2 = arr.join(" ");
      setText(text2);
    }
  };
  

  const handleChange = (event) => {
    // console.log("Handled 'onchange'")
    setText(event.target.value);
  }

  const [text, setText] = useState(""); // default initial value is an empty string

  return (
    <>
      <div className="container my-4" style={{color:props.mode === "light"?"black":"white"}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea  style={{color:props.mode === "light"?"black":"white",background:props.mode === "light"?"white":"#1c1520"}} className="form-control"  value={text} id="myText" onChange={handleChange} rows="8"  placeholder="Enter your text"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill my-2" onClick={handleVoiceClick}><FontAwesomeIcon icon={faVolumeHigh} /></button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill mx-2" onClick={handleClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill " onClick={handlecapClick}>Capitalize</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill mx-2 my-2" onClick={handleanClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill " onClick={handleclClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill mx-2 my-2" onClick={handlewsClick}>Remove white space</button>
        <button disabled={text.length===0} id="changename" className="btn btn-sm btn-outline-primary  rounded-pill" onClick={handlecpClick}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill mx-2 my-2" onClick={handledlClick}>Download text</button>
        <button disabled={text.length===0} className="btn btn-sm btn-outline-primary rounded-pill  my-2" onClick={handlecpiClick}>Capitalize each</button>
      </div>

      <div className="container my-4" style={{color:props.mode === "light"?"black":"white"}}>
        <h3>Summary</h3>
        <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}, Characters: {text.length}</p>
        <h3>Preview</h3>
        <p><em>{text.length<1?"Nothing to preview":text}</em></p>
      </div>
    </>
  );
}
