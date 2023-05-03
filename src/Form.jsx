import React, { useState } from "react";
import './Form.css'
import { useContext } from "react";
import { photoContext } from "./App";
export default function Form(){
   
   const [text,setText]=useState('')

const {input,setInput}=useContext(photoContext)
    return(
        <>
        <input value={text} type="text" name="search" placeholder="Search..." style={{fontSize:'20px'}}
    onChange={(e)=>{setText(e.target.value)}}/>

        <button  type="submit" onClick={()=>{setInput(text)}} >Search</button>
        <div className="btnContainer">
        <span><button onClick={()=>{setInput("Mountain")}}>Mountain</button></span>
        <span><button onClick={()=>{setInput('Beach')}}>Beach</button></span>
        <span><button onClick={()=>{setInput('Bird')}}>Birds</button></span>
        <span><button onClick={()=>{setInput('food')}}>Food</button></span>
        </div>
        </>
    )
}