import { NavLink, Route, Routes } from "react-router-dom"
import CheckBalance from "./components/CheckBalance"
import DepositBalance from "./components/DepositBalance"
import Withdraw from "./components/Withdraw"
import "./App.css"

function App() {

  return (
    <>
        <nav className="navbar">
        <h1 className="logo">🏦 My Bank</h1>
        <div className="nav-links">
          <NavLink to="/" className="link">Check Balance</NavLink>
          <NavLink to="/deposit" className="link">Deposit</NavLink>
          <NavLink to="/withdraw" className="link">Withdraw</NavLink>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route element={<CheckBalance />} path="/" />
          <Route element={<DepositBalance />} path="/deposit" />
          <Route element={<Withdraw />} path="/withdraw" />
        </Routes>
      </div>
    </>
  )
  
}


export default App
