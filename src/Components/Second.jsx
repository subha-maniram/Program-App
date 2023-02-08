import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Second = () => {
    const[large , setLarge] = useState({
        number:[],
        output:[]
    })

    const handleChange = (e) => {
        let target = e.target.value
        let value=target.split(',')
        //console.log(value)
        setLarge((prev) => ({
            ...prev,
            number:value
           
        }))
    }

    const max = () => {
     let num1=large.number;
     console.log(num1)
     let max=Number(num1[0]);
     let max2=Number(num1[0]);
     console.log(max2,max);
     for(let i=0;i<num1.length;i++){
         if(max<Number(num1[i])){
             max=Number(num1[i])
             console.log(max)
             
         }
      
     }
   
     
     for(let i=0;i<num1.length;i++){
         if(max!==Number(num1[i])){
             if(max2<Number(num1[i])){
                 max2=Number(num1[i])
                
             }
         }
     }
     console.log(max2)
     
    setLarge((prev) => ({
        ...prev,
        output:max2
    }))
  }
    
    return (
        <div>
            <div class="card1">
                <div class="obj10">
                    <h3>Second Largest Number</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" name="number" onChange={handleChange}  value={large.number}/><br />
                    <div className='btn2'>
                    <button onClick={max}>click</button><br />
                    </div>
                    <input type="text" value={large.output} name="output" readOnly/>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/reverse" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/sorts" ><GrLinkNext/></Link></button>
                </div>
            </div>
            </div>
        </div>
    )
}
