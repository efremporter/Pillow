import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import '../../app/assets/stylesheets/css/nav.css';
// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Home from './Home';
import { logout } from '../actions/session_actions';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Logout_container from './logout/logout_container';

const App = () => (
  <div>
    <header className="header">
      {/* <Link to="/" className="header-link">
        <h1 className="logo">Pillow</h1>
      </Link> */}
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
          <li><b><Link to="/" className="nav" id="logo">Pillow</Link></b></li>
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
        <Logout_container/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <Route path="/" component={Home}/> */}
    </Switch>
  </div>
);

export default App;
