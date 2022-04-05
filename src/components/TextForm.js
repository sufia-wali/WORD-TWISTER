import React, {useState} from 'react';
//import './TextForm.css';
function TextForm (props) {
const handleUpClick = () =>{
  // console.log('upper case was clicked' + text );
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("converted to uppercase", "success");

}
const handleOnChange = (event) =>{
  //console.log('on change');
  setText(event.target.value);
  //  console.log(event.target.value);
}

const handleLpClick=()=>{
 // console.log("to lowercase");
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase", "success");
}

const handleClearClick = () => {
  let newText ='';
  setText(newText);
  props.showAlert("Textarea is cleared", "success");
}

const handleMailClick = () => {
  const mail = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
 let c=0;
  if(!mail)
   {
     props.showAlert("No emails found", "warning")
    }
   else{
   const res = mail.join('\n');
   setText(res);
   const val = res.split('\n');
   const res1 = val.length;

   props.showAlert(`Found ${res1} mails`, "success")
   }

}

const handleNumClick = () => {
   const res = text.match(/\d+/g);
   console.log(res);
  setText(res.join(',' + " "));
  const val =res.length;
  props.showAlert(`Found ${val} numbers`, "success")
}


const handleToCapsClick = () => {
  const newText = text.charAt(0).toUpperCase();
  setText(newText + text.slice(1));
}
const handleCopy= () => {
  const newText = document.getElementById('myBox');
  newText.select();
  navigator.clipboard.writeText(newText.value);
  }

const handleSpace= () => {
   const newText = text.split(/[ ]+/);
   setText(newText.join(" "));
}

// const handleAllCaps = () => {
//   const newText = text.split('.');
//   //const myText= newText.split('.');
//   const myText = [];
//     //console.log(newText.index);
//    newText.forEach (ele=>{
//      const val = newText.indexOf(ele);
//      console.log(val);
//    });

//      myText.push(ele[val].toUpperCase()+ ele.slice(1, ele.length));

//    });
//    setText(myText);
//    }
//     //  myText.push(newText[ele[0].toUpperCase()]+ newText[ele.slice(1, ele.length)]);
//      if(newText.charAt('.'))
//      {

//      }
//      {
//       console.log(ele);
//      }
//  });

//  setText(myText.join('.'));
  //setText(newText + text.slice(1))

  const[text, setText]= useState('');



  return (
    <>
    <div className={'container'} style={{color: props.mode==='dark'?'white':'#092041'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color:  props.mode==='dark'?'black':'#092041'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UPCASE</button>
      <button className="btn btn-primary mx-2"  onClick={handleLpClick}>Convert to LPCASE</button>
      <button className="btn btn-danger mx-2"   onClick={handleClearClick}>Clear</button>
      <button className="btn btn-secondary mx-2" onClick={handleMailClick}>Extract Email</button>
      <button className="btn btn-primary mx-2"  onClick={handleNumClick}>Extract Number</button>
      <button className="btn btn-primary my-2" onClick={handleToCapsClick}>Convert First letter caps</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove space</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleAllCaps}>All Caps</button> */}

      {/* <button className="btn btn-primary my-2"  onClick={handleColor} style={{color:}}>Change color</button> */}
    </div>
    <div className={'container'} style={{color: props.mode==='dark'?'white':'#092041'}}>
      <h2>your text summary</h2>
      <p>{text.length>0?text.trim().split(" ").length:0} words & {text.length} characters</p>
      <p>{0.008*text.split(' ').length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter your text to preview it"}</p>

    </div>
    </>

  )
}

export default TextForm;