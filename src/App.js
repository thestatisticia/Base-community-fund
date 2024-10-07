import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {ABI} from './abi.mjs'
import './App.css';
const CONTRACT_ADDRESS = '0x98b4175b0df547A137F9c742a85b4f58e1f69196'; // Deployed contract address on Base Sepolia

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    unemployed: false,
    monthlyIncome: '',
    outstandingDebts: ''
  });
  const [isEligible, setIsEligible] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Initialize contract
        const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract || !account) {
      alert("Please connect your wallet first.");
      return;
    }

    const { name, age, unemployed, monthlyIncome, outstandingDebts } = formData;

    try {
      // Interact with the contract to register the user and check eligibility
      await contract.methods
        .registerAndCheckEligibility(
          name, 
          parseInt(age), 
          unemployed, 
          parseInt(monthlyIncome), 
          parseInt(outstandingDebts)
        )
        .send({ from: account });

      // Fetch the user's eligibility status
      const user = await contract.methods.users(account).call();
      setIsEligible(user.isEligible);

      alert("User registered successfully!");
      if (user.isEligible) {
        alert("You are eligible for the fund transfer.");
      } else {
        alert("You are not eligible for the fund transfer.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user. See console for details.");
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 className="app-title">  Base Community Fund </h1>
      <button onClick={connectWallet} className="connect-btn">Connect Wallet</button>
      <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required className="input-field" />
        
        <label htmlFor="age" className="form-label">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} required className="input-field" />
        
        <label className="form-label">Unemployed:</label>
        <div className="checkbox-container">
          <input type="checkbox" id="unemployed" name="unemployed" checked={formData.unemployed} onChange={handleChange} />
          <label htmlFor="unemployed">Check if unemployed</label>
        </div>

        <label htmlFor="monthlyIncome" className="form-label">Monthly Income:</label>
        <input type="number" id="monthlyIncome" name="monthlyIncome" placeholder="Enter your monthly income" value={formData.monthlyIncome} onChange={handleChange} required className="input-field" />
        
        <label htmlFor="outstandingDebts" className="form-label">Outstanding Debts:</label>
        <input type="number" id="outstandingDebts" name="outstandingDebts" placeholder="Enter your outstanding debts" value={formData.outstandingDebts} onChange={handleChange} required className="input-field" />
        
        <button type="submit" className="submit-btn">Register</button>
      </form>

      {isEligible !== null && (
        <div>
          <h2>Eligibility Status: {isEligible ? "Eligible" : "Not Eligible"}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
