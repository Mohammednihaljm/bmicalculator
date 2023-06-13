import React, { useState } from "react";
import "./Form.css";

const Form = ({getData}) => {
  const [Weight, setWeight] = useState("")
  const [Height, setHeight] = useState("")
  const [alert, setalert] = useState(false)



 const submitHandelr=(e)=>{
  e.preventDefault();
  if(isNaN(Weight)||isNaN(Height)){
    console.log("not valid");
    setalert(true)
  }else{
    getData(Weight,Height)
    setalert(false)
  
  }
 
 }
//  let alertMessage
//  if(alert){
//   alertMessage=    <div className="alert alert-danger" role="alert">plz enter valid datas</div>

//  } else{
//   alertMessage=""
//  }

  return (
    <form className="main-container">
    <h1>Bmi calclator</h1>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Weight:</label>
      <input type="text" value={Weight} onChange={(e)=>setWeight(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Height</label>
      <input type="text" value={Height} onChange={(e)=>setHeight(e.target.value)} class="form-control" id="exampleInputPassword1"/>
    </div>
  
    <button type="submit" class="btn btn-primary" onClick={submitHandelr}>Get Bmi</button>
    {alert && <div className="alert alert-danger" role="alert">plz enter valid datas</div>}
  </form>
  );
};

export default Form;
