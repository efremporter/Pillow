import React from "react";
import '../css/nav.css';
const Home = () => {

  return (
    <div>
      <header className="header">
        <nav>
          <div className="left-side">
            <a className="nav" id="buy" href="">Buy</a>
            <a className="nav" id="rent" href="">Rent</a>
            <a className="nav" id="sell" href="">Sell</a>
            <a className="nav" id="home_loan" href="">Home Loans</a>
            <a className="nav" id="agent_finder" href="">Agent Finder</a>
          </div>
          <div className="right-side">
            <a className="nav" id="logo" href=""><b>Pillow</b></a>
            <a className="nav" href="">Manage Rentals</a>
            <a className="nav" href="">Advertise</a>
            <a className="nav" href="">Help</a>
            <a className="nav" href="">Sign in</a>
          </div>
        </nav>
    </header>
    <div className="splashy">
      <img id="splash_pic" src="https://drexel.edu/~/media/Images/disability-resources/homepage/dragon-rec-1200x400.ashx?h=400&w=1200&hash=A8DB6E7DCFEF3E70370A260C5EC8E8CA9B18BBC8" alt="" />
      <div id="sleepy"><b>Sleep begins here</b></div>
    </div>

    </div>

  )
}

export default Home;