import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Shows from './components/Shows/Shows'
import Movies from './components/Movies/Movies';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Tv from './components/Pages/Tv';
import Services from './components/Pages/Services';
import Shop from './components/Pages/Shop';
import Contact from './components/Pages/Contact';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className='content'>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Tv'  component={Tv} />
        <Route path='/Shop'  component={Shop} />
        <Route path='/Services'  component={Services} />
        <Route path='/About'  component={About} />
        <Route path='/Contact'  component={Contact} />
        </Switch>
      </div>
    </div>

    </Router>
  );
}


export default App;
