import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [vowelCount, setVowelCount] = useState(null);

  const countVowels = () => {
    if (text === '') {
      setVowelCount('Please enter some text');
    } else {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
        if ('aeiouAEIOU'.includes(text[i])) {
          count++;
        }
      }
      setVowelCount(`The number of vowels are ${count}`);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Vowel Counter</h1>
      </div>
      <div className="textarea">
        <textarea
          name="vowelinput"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="count">
        <button id="count" onClick={countVowels}>
          Calculate Vowels
        </button>
      </div>
      <div className="output">{vowelCount}</div>
    </div>
  );
}

export default App;
