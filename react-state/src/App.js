import {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter+1)}>click here</button>
    </div>
  )
  
}

export default App;
