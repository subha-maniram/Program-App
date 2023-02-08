import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'


 const Character = () => {
    const[char , setChar] = useState({
        fullname:"",
        target :"",
        count: 0
    });
    
    const handleChange = (e) => {
        const{name , value} =e.target

        setChar((prev) => ({
            ...prev,
            [name]:value
    }));
    }
    let value = 0

    const find = () => {
        for(let i=0;i<char.fullname.length;i++){
            if(char.fullname[i]=== char.target){
             value++;
            }
         }
         setChar((val)=>({
            ...val,
            count:value
         }))
    }

  return (
    <div>
        <div className="card1">
                <div className="obj11">
                    <h3> Count Occurance Character</h3>
                    <hr />
                    <div className='contain'>
                    <input type="text" id="char1" name="fullname" onChange={handleChange} value={char.fullname}/>
                    <input type="text" id="char" name="target" onChange={handleChange} value={char.target}/><br/>
                    <div className='btn2'>
                    <button onClick={find} >Find</button><br/>
                    </div>
                    <input type="text"  id="charans" value={char.count} name="count" readOnly/>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/sum" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/duplicates" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
    </div>
  )
}
export default Character
