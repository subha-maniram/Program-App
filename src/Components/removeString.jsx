import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Removestring = () => {
    const [string, setString] = useState({
        str: "",
        target: "",
        output: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setString((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const remove = () => {

        let str2 = string.str.split("");
        let str3;
        str3 = str2.filter(e => e !== string.target);
        str3 = str3.join("")
       setString ((prev) => ({
        ...prev,
        output:str3
       }))
    }
    return (
        <div>
            <div class="card1">
                <div class="obj3">
                    <h3>Remove The Given String</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" name="str" onChange={handleChange} value={string.str} />
                    <input type="text" name="target" onChange={handleChange} value={string.target} /><br />
                    <div className='btn2'>
                    <button onClick={remove}>remove string</button><br />
                    </div>
                    <input type="text" name="output" value={string.output} readOnly />
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/prime" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/reverse" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
        </div>
    )
}
