import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {GrLinkNext,GrLinkPrevious} from 'react-icons/gr'

export const Prime = () => {
    const [prime,setPrime] = useState('');
    const handleprime = (e) =>{
setPrime(e.target.value);
    }
    const check = () =>{

        let count = 0;
        for (let i = 1; i <= prime; i++) {
            if (prime % i === 0) {
                count++;
            }
        }
            if (count === 2) {
                alert("it is prime number")
            }
            else if (count === 1) {
                alert("it is neither prime or compoiste number")
            }
            else{
                alert("it is not prime number")
            }
            setPrime("")

        }
    


  return (
    <div>
        <div className="card1">
                <div className="obj6">
                    <h3>Prime Or Not</h3>
                    <hr/>
                    <div className='contain'>
                    <input type="text" value={prime} onChange={handleprime}/><br/>
                    <div className='btn2'>
                    <button onClick={check}>check</button><br/>
                    </div>
                    
                </div>
                <div className='pad'>
                <button className='btn'><Link to="/palindrome" ><GrLinkPrevious/></Link></button>
                <button className='btn1'><Link to="/removestring" ><GrLinkNext/></Link></button>
                </div>
                </div>
            </div>
    </div>
  )
}
