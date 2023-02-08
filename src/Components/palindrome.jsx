import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

const Palindrome = () => {
    const [palindro, setPalindro] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setPalindro(value)
    }

    const palin = () => {
        const len = palindro.length;
        for (let i = 0; i < len / 2; i++) {
            if (palindro[i] !== palindro[len - 1 - i]) {
                alert( 'It is not a palindrome');
            }
        }
        alert( 'It is a palindrome');
        setPalindro("");
    }
    return (
        <div>
            <div className="card1">
                <div className="obj2">
                    <h3>Palindrome Or Not</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" id="getstr" name="content" onChange={handleChange} value={palindro}
                    /><br />
                    <div className='btn2'>
                    <button onClick={palin}>palindrome</button><br />
                    </div>
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/fibanocci" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/prime" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
       </div>
    )
}
export default Palindrome
