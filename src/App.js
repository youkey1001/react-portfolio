import React from 'react';
// import Button from './components/button';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Main />
      </Router>
    </React.Fragment>
  )
}

export default App;