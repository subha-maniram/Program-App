import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

const Reverse = () => {
    const [reverse, setReverse] = useState({
        string : "",
        reversestr:""
    });
    // const [result,setResult] = useState("");
    
    const handleChange = (e) => {
        const value=e.target.value
        setReverse((prev) => ({
            ...prev,
            string:value
        }));
    }
    
    let result="";
    const reverseString = () => {
        let rev = reverse.string.split("");
            for (let i = rev.length - 1; i >= 0; i--) {
           result += rev[i];

        }
       setReverse ((val) => ({
           ...val,
           reversestr:result
       }))
    }
    

    return (
        <>
            <div className="card1">
                <div className="obj1">
                    <h3>Reverse String</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" value={reverse.string} name="string" onChange={handleChange} /><br />
                    <div className='btn2'>
                    <button onClick={reverseString}>reverse</button><br />
                    </div>
                    <input type="text" id="revans" name="reversestr" value={reverse.reversestr} readOnly/>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/removeString" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/Second" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Reverse