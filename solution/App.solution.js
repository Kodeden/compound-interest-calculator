import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [investedAmount, setInvestedAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [yearsInvested, setYearsInvested] = useState(0);
  const [investmentTotal, setInvestmentTotal] = useState(0);

  useEffect(() => {
    let calculatedVal = investedAmount * (1 + (interestRate / 100)) ** yearsInvested;
    calculatedVal = calculatedVal.toFixed(2); // Sets to two decimal places
    calculatedVal = calculatedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Adds commas

    setInvestmentTotal(`$${calculatedVal}`);
  }, [investedAmount, interestRate, yearsInvested]);

  return (
    <div className='App'>
      <div className='header'>
        <p>Compound Interest Calculator</p>
      </div>
      <div className="calc-container">
        <div className='inputs'>
          <div className='calc-input'>
            <label>Amount</label>
            <input type="number" value={investedAmount} onChange={(e) => setInvestedAmount(e.target.value)} />
          </div>
          <div className='calc-input'>
            <label>Interest Rate</label>
            <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          </div>
          <div className='calc-input'>
            <label>Years Invested</label>
            <input type="number" value={yearsInvested} onChange={(e) => setYearsInvested(e.target.value)} />
          </div>
        </div>
        <div className='calc-total'>
          <span>{investmentTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default App;