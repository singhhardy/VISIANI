import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Tvslider from '../MovieSlider/Tvslider';
import Shows from '../Shows/Shows';
import {BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';

function Home() {
  return (
    <div className="app">

    <Navbar />
    <Tvslider />
    <Footer />

    </div>
  );
}

export default Home;
