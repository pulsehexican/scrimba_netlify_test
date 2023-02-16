import logo from './logo.svg';
import './App.css';
import AddNumbers from './AddNumbers';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Enjoy !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >TOmasz, Learn React to be a professional fullstack dev.
        </a>
      </header>
    </div>
  );
}

export default App;


function App1() {
  return (<p>
          Test return funtion paragraph
        </p>
    );
}

export default function adresses() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=YOUR_API_KEY`);
      const data = await response.json();
      const balanceInEther = parseFloat(data.result) / 1000000000000000000;
      setBalance(balanceInEther);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ethereum Address:
          <input type="text" value={address} onChange={handleInputChange} />
        </label>
        <button type="submit">Check Balance</button>
      </form>
      {balance && <p>Balance: {balance} ETH</p>}
    </div>
  );
}

