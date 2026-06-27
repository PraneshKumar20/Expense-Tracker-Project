import React from "react"
import "./Navbar.css"

const Navbar = () =>{
    return(
        <>
        <header className="app-header">
            <div className="header-container">
                <h1 className="app-title">ExpenseTracker</h1>
                <p className="app-subtitle">Track your expenses smartly</p>
            </div>
        </header>
        </>
    )
}

export default Navbar;