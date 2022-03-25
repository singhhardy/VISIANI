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
        <Route path='/Tv' exact  component={Tv} />
        <Route path='/Shop' exact component={Shop} />
        <Route path='/Services' exact component={Services} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={About} />
        </Switch>
      </div>
    </div>

    </Router>
  );
}

export default App;
