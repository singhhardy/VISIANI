import React from 'react';
import Navbar from '../Navbar/Navbar';
import Showcase from '../Showcase/Showcase';
import Shows from '../Shows/Shows';
import Movies from '../Movies/Movies';
import Faq from '../Faq/Faq';
import Plans from '../Plans/Plans';
import Footer from '../Footer/Footer';
import Ani from '../Fish/Ani';
import Testimonials from '../Testimonials/Testimonials';
import Appdownload from '../Appdownload/Appdownload';
import {BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';

function Home() {
  return (
    <div className="app">
    <Navbar />
    <Showcase />
    <Shows />
    <Movies />
    <Plans />
    <Faq />
    <Testimonials />
    <Appdownload />
    <Footer />

    </div>
  );
}

export default Home;
