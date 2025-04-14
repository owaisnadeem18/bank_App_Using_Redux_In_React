import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Deposit.css"

const DepositBalance = () => {

    const dispatch = useDispatch()

    const handleDeposit = () => {
        if (Value > 0) {
          dispatch({ type: 'deposit', payload: Number(Value) });
          SetValue(0); // Clear the input after deposit
          alert("✅ Amount Deposited Successfully!");
        } else {
          alert("⚠️ Please enter a valid amount!");
        }
      };

  const [Value , SetValue] = useState(0)

  return (
    <div className="deposit-container">
      <div className="deposit-card">
        <h2>💰 Deposit Funds</h2>
        <input
          type="number"
          min="1"
          value={Value}
          onChange={(e) => SetValue(e.target.value)}
          placeholder="Enter amount to deposit"
          className="deposit-input"
        />
        <button onClick={handleDeposit} className="deposit-button">
          Deposit Now
        </button>
      </div>
    </div>
  )
}

export default DepositBalance
