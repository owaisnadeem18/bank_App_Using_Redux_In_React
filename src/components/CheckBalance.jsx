import React from 'react'
import { useSelector } from 'react-redux'
import "./CheckBalance.css" 

const CheckBalance = () => {

    const amount = useSelector(state => state?.bankReducer?.value)

    console.log(amount)

  return (
    <div className="balance-container">
      <div className="balance-card">
        <h2>🏦 Bank Account</h2>
        <p className="balance-label">Your Current Balance</p>
        <h1 className="balance-amount">{amount} Rs</h1>
      </div>
    </div>
  )
}

export default CheckBalance
