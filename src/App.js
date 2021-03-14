import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound404 from './pages/PageNotFound404';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/about' component={About}/>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={PageNotFound404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
