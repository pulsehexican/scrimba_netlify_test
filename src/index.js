import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { useState } from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);

function AddNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call Python script to add numbers
    const url = `/api/add_numbers?num1=${num1}&num2=${num2}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setResult(data.result));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
        </label>
        <br />
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
        </label>
        <br />
        <button type="submit">Add Numbers</button>
      </form>
      {result && <h1>Result: {result}</h1>}
    </div>
  );
}

export default AddNumbers;
