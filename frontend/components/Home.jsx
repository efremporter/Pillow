import React from "react";
import '../css/nav.css';
const Home = () => {

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="left-side">
            <li><a className="nav" id="buy" href="">Buy
              <ul className="buy-sub">
                <li>Homes for sale</li>
                <li>Forclosures</li>
                <li>For sale by owner</li>
              </ul>
              </a></li>
            <li><a className="nav" id="rent" href="">Rent</a></li>
            <li><a className="nav" id="sell" href="">Sell</a></li>
            <li><a className="nav" id="home_loan" href="">Home Loans</a></li>
            <li><a className="nav" id="agent_finder" href="">Agent Finder</a></li>
          </ul>
          <ul className="right-side">
            <li><a className="nav" id="logo" href=""><b>Pillow</b></a></li>
            <li><a className="nav" href="">Manage Rentals</a></li>
            <li><a className="nav" href="">Advertise</a></li>
            <li><a className="nav" href="">Help</a></li>
            <li><a className="nav" href="">Sign in</a></li>
          </ul>
        </nav>
      </header>
      <div className="splashy">
        <img id="splash_pic" src="https://drexel.edu/~/media/Images/disability-resources/homepage/dragon-rec-1200x400.ashx?h=400&w=1200&hash=A8DB6E7DCFEF3E70370A260C5EC8E8CA9B18BBC8" alt="" />
        <div id="sleepy">
          <b>Sleep begins here</b>
          <br />
          <input id="splash_search" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
        </div>
      </div>
    </div>

  )
}

export default Home;