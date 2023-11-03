import './App.css';
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFormat = function() {
    const splitted = fullName.split(' ');
    setFirstName(splitted[0]);
    setLastName(splitted[1]);
  }


  return (
    <div className="App">
      <div>Enter Full Name Here:</div>
      <input type='text' id='userInput' onChange={(e) => setFullName(e.target.value)}></input><br></br>
      <button onClick={handleFormat}>Format</button>
      <div>First name: {firstName}</div>
      <div>Last name: {lastName}</div>
    </div>
  );
}

export default App;
