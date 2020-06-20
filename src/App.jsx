import React, { useState } from 'react';
import './App.css';
import Element from './components/Element';

function App() {
  const [question, setQuestion] = useState([1, 3, 4, 5, 6]);
  const getColor = (id) => {
    return question.includes(id) 
      ? 'blue'
      : 'white';
  }

  return (
    <div className="App">
      <div className="container">
        {
          util.arrayInRange(25).map(num => (
            <Element key={num} backgroundColor={getColor(num)} />
          ))
        }
        <p>count</p>
        <button className="button">play</button>
      </div>
    </div>
  );
}

const util = {
  arrayInRange: (max) => {
    let array = Array(max);
    for (let i = 0; i < max; i++) {
      array[i] = i;
    }
    return array;
  }
}

export default App;
