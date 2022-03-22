import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Shows from './components/Shows/Shows'
import Movies from './components/Movies/Movies';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">

    <Navbar />
    <Showcase />
    <Shows />
    <Movies />
    <Faq />
    <Footer />

    </div>
  );
}

export default App;
