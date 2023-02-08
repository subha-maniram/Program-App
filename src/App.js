import React from 'react';

import Reverse from './Components/reverse';
import Character from './Components/character'
import Palindrome from './Components/palindrome';
import './App.css';
import { Fibanocci } from './Components/fibanocci';
import { Sum } from './Components/sum';
import { Prime } from './Components/prime';
import { Removestring } from './Components/removeString';
import { Sort } from './Components/sorts';
import { Duplicates } from './Components/duplicates';
import { Second } from './Components/Second';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <div className='cont'>
        <h1>QUIZ APPLICATION</h1>
      </div>
      <div className='container'>

        <Routes>
          <Route path="/" element={<Prime />}></Route>

          <Route path="/prime" element={<Prime />}></Route>
          <Route path="/fibanocci" element={<Fibanocci />}></Route>
          <Route path="/palindrome" element={<Palindrome />}></Route>
          <Route path="/reverse" element={<Reverse />}></Route>
          <Route path="/character" element={<Character />}></Route>
          <Route path="/removeString" element={<Removestring />}></Route>
          <Route path="/duplicates" element={<Duplicates />}></Route>
          <Route path="/Second" element={<Second />}></Route>
          <Route path="/sorts" element={<Sort />}></Route>
          <Route path="/sum" element={<Sum />}></Route>
        </Routes>

      </div>
      <div className='footer'>
      <footer>All rights are reserved</footer>
      </div>
    </div>
  )
}

export default App