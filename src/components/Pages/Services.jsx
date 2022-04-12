import React from 'react';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';

function Home() {
  return (
    <div className="app">

    <Navbar />
    <Services />
    <Footer />

    </div>
  );
}

export default Home;
