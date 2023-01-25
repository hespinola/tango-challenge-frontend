import React from 'react';
import './App.css';
import { Fibonacci } from './interface/Fibonacci';

function App() {
  const [fibonacci, setFibonacci] = React.useState<number>(0)
  const [result, setResult] = React.useState<number>(0)

  const buttonClicked = async (fibo: number) => {
    try {
      const result = await fetch(`http://localhost:5050/v1/fibonacci?value=${fibo}`)
      const response = await result.json() as Fibonacci
      setResult(response.data)
    } catch (error) {
      console.error(error)
    }
  }

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
