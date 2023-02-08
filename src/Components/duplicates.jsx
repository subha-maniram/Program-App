import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Duplicates = () => {
   const[check , setCheck] =useState({
    string:[],
    output:[]
   })

   const handleChange = (e) => {
     const target=e.target.value;
     const separate=',';
     let value=target.split(separate);
     console.log(value)
     setCheck((prev) => ({
        ...prev,
        string:value
     }))
   }
   let arr=[];
   const dupli =() =>{
    
    if(check.string.length===1){
       let num=String(check.string)
        for (let i = 0; i < num.length; i++) {
            if (!arr.includes(num[i])) {
                arr.push(num[i]);
                 
            }
    }
    arr=arr.reduce((current , value) => current+value)
}
    else{
    
    for (let i = 0; i < check.string.length; i++) {
        if (!arr.includes(check.string[i])) {
            arr.push(check.string[i]);
    
        }
    }
}
    setCheck((prev) =>({
        ...prev,
        output:arr
    }))
    
   }
   console.log(check.string)
   console.log(check.output)
    return (
        <div>
            <div class="card1">
                <div class="obj5">
                    <h3>Remove Duplicate</h3>
                    <hr />
                    <div className='contain'>
                    <input type="text" name="string" onChange={handleChange} value={check.string}/><br />
                    <div className='btn2'>
                    <button onClick={dupli} >remove dupli</button><br />
                    </div>
                    <input type="text" name="output" value={check.output} readOnly />
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/character" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/fibanocci" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
        </div>
    )
}
