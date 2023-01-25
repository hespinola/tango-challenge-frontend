import React from 'react';
import './App.css';

const buttonClicked = (fibo: number) => {
  
}

function App() {
  const [fibonacci, setFibonacci] = React.useState<number>(0)
  const [result, setResult] = React.useState<number>(0)

  return (
    <div className="App">
      <h2>Calculate Fibonacci</h2>
      <div className="Form">
        <input type="number" placeholder="6" onChange={(event) => setFibonacci(Number(event.target.value))} />
        <button onClick={() => buttonClicked(fibonacci)}>Calculate</button>
      </div>
      <div className="Result">
        Fibonacci Result: <span>{result}</span>
      </div>
    </div>
  );
}

export default App;
