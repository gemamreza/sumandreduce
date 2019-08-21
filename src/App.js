import React from 'react';
import './App.css';
import Home from './components/Home';
import {withRouter,Route} from 'react-router-dom';
import Add from './components/Add';
import Reduce from './components/Reduce';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/add' component={Add} exact />
      <Route path='/reduce' component={Reduce} exact />
    </div>
  );
}

export default withRouter(App);
