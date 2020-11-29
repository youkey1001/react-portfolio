import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Works from './Works';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import '../css/Main.css';

const Main = () => {

  return (
    <div id="main" className="inner">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/works' component={Works} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
    </div>
  )
}

export default Main;