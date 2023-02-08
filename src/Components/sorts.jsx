import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Sort = () => {
    const [sorting, setSorting] = useState({
        num1:"",
        output:""
    })
    
    const handleChange = (e) => {
     const target = e.target.value;
     const separate = ',';
     const value=target.split(separate)

     setSorting ((prev) => ({
        ...prev,
        num1:value
     }))
    }

    const sorts = () => {
        let result = sorting.num1
        let output1=result.sort(function (a, b) { return a - b });
        setSorting((prev) => ({
            ...prev,
            output:output1
        }))
    }

 
    return (
        <div>
            <div class="card1">
                <div class="obj8">
                    <h3>Sort An Array</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" name="num1" value={sorting.num1} onChange={handleChange}/><br />
                    <div className='btn2'>
                    <button onClick={sorts}>sort</button><br/>
                    </div>
                    <input type="text" name="output" value={sorting.output} readOnly/>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/Second" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/sum" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>

        </div>
    )
}
