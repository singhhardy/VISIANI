import React from 'react';
import Navbar from '../Navbar/Navbar';
import Showcase from '../Showcase/Showcase';
import Shows from '../Shows/Shows';
import Movies from '../Movies/Movies';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';

function Home() {
  return (
    <div className="app">

    <Navbar />
    <Movies />
    <Footer />

    </div>
  );
}

export default Home;
