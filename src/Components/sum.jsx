import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

export const Sum = () => {
    const [number, setNumber] = useState({
        num: [],
        result: 0
    })

    const handleChange = (e) => {
        const target = e.target.value;
        const seperate = ',';
        let value = target.split(seperate)//convert the number separete by comma to array
        console.log(value)

        setNumber((prev) => ({
            ...prev,
            num: value
        }))
    }
    console.log(number)
    const sums = () => {
        const num = number.num;
        console.log(num)
        const value = num.reduce((first, sum) => (Number(first) + Number(sum)))
        console.log(value)

        setNumber((prev) => ({
            ...prev,
            result: value
        }))
    }



    return (
        <div>
            <div class="card1">
                <div class="obj7">
                    <h3>Sum Of Array</h3>
                    <hr />
                    <div className='contain'>
                        <input type="text" name="num" onChange={handleChange} value={number.num} /><br />
                        <div className='btn2'>
                        <button onClick={sums}>sum</button><br />
                        </div>
                        <input type="text" name="result" value={number.result} />

                    </div >
                    <div className='pad'>
                        <button className=' btn'><Link to="/sorts" ><GrLinkPrevious /></Link></button>
                        <button className='btn1'><Link to="/character" ><GrLinkNext /></Link></button      >

                    </div>
                </div>
            </div>

        </div>
    )
}
