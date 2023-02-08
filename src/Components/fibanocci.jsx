import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Fibanocci = () => {

const [num,setNum] = useState({
    number:"",
    output:[]
});

const handleNum = (e) =>{
    const value = e.target.value
    setNum((Prev) =>({
        ...Prev,
        number:value
    }))
}
 
const fibanocci = () =>{
    let a = 0;
     let b = 1;
     let temp;
     let result = []
     for (let i = 1; i <= num.number; i++) {
        result.push(a);
         temp = a + b;
         a = b;
         b = temp;
     }
     setNum((Prev)=>({
        ...Prev,
        output:result
     }))

    setNum((Prev) =>({
        ...Prev,
        number:""
    }))
}

  return (
    <div>
         <div class="card1">
                <div class="obj9">
                    <h3>Fibanocci Series</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" name="number" value={num.number} onChange={handleNum} /><br/>
                    <div className='btn2'>
                    <button onClick={fibanocci} >click here</button><br/>
                    </div>
                    <textarea  rows={2} cols={35} name="output" style={{marginTop:"15px"}} value={num.output} readOnly/>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/duplicates" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/palindrome" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
       </div>
  )
}
