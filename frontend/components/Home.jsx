import React from "react";
import '../css/nav.css';
const Home = () => {

  return (
    <header className="header">
      <nav>
        <div className="left-side">
          <a className="nav" id="buy" href="">Buy</a>
          <a className="nav" id="rent" href="">Rent</a>
          <a className="nav" id="sell" href="">Sell</a>
          <a className="nav" id="home_loan" href="">Home Loans</a>
          <a className="nav" id="agent_finder" href="">Agent Finder</a>
        </div>
        <a className="nav" id="logo" href="">Pillow</a>
        <a className="nav" href="">Manage Rentals</a>
        <a className="nav" href="">Advertise</a>
        <a className="nav" href="">Help</a>
        <a className="nav" href="">Sign in</a>
      </nav>
  </header>
  )
}

export default Home;