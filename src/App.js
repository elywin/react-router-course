import React from 'react';
import {Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Card from './Components/Card'

function App() {
  return (
    <React.Fragment>
      <nav>
      <div className="nav-wrapper">
        <Link to="#" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
        </ul>
      </div>
    </nav>

    <Switch>
  <Route path exact = '/'> <Home/> </Route>
  <Route path ="/about" > <About/> </Route>
  <Route path= '/alumni'> <Alumni/> </Route>
</Switch>
  
    <Card/>
    <Footer/>
    </React.Fragment>
  );
}


function Alumni(){
 return  <h1>I am at Alumni</h1>
}

export default App;
