import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Withdraw.css"

const Withdraw = () => {

    const [withdrawAmount , SetWithdrawAmount] = useState(0)

    const currentBalance = useSelector(state => state?.bankReducer?.value)

    const handleWithdraw = () => {
        const amount = Number(withdrawAmount);
    
        if (amount <= 0) {
          alert("⚠️ Please enter a valid amount to withdraw.");
        } else if (amount > currentBalance) {
          alert("❌ Insufficient balance.");
        } else {
          dispatch({ type: "withdraw", payload: amount });
          SetWithdrawAmount(0);
          alert("✅ Amount withdrawn successfully!");
        }
      };

    const dispatch = useDispatch()

    return (
        <div className="withdraw-container">
        <div className="withdraw-card">
          <h2>💸 Withdraw Funds</h2>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => SetWithdrawAmount(e.target.value)}
            placeholder="Enter amount to withdraw"
            className="withdraw-input"
          />
          <button onClick={handleWithdraw} className="withdraw-button">
            Withdraw Now
          </button>
        </div>
      </div>
  )
}

export default Withdraw