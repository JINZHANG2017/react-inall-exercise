import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator.js";
import Counter from "./Counter.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/calculator'>在线计算器</NavLink>
            <NavLink to='/counter'>在线倒计时器</NavLink>
          </header>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/counter' component={Counter}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
