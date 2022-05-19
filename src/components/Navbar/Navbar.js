import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";


export default function Navbar() {
  return (
    
        <>
        <div className="navbar">
        <div className="nav-link-container">
            <Link to="/Exercise1" className="nav-link">Exercise1</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise2" className="nav-link">Exercise2</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise3" className="nav-link">Exercise3</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise4" className="nav-link">Exercise4</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise5" className="nav-link">Exercise5</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise6" className="nav-link">Exercise6</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise7" className="nav-link">Exercise7</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise8" className="nav-link">Exercise8</Link>
          </div>
        <div className="nav-link-container">
            <Link to="/Exercise9" className="nav-link">Exercise9</Link>
          </div>
        </div>
        </>
    
  )
}
