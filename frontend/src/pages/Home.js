import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  return (
  <div className="tout">
    <NavBar />
    <div className="logo">
        <h1>Psychotics</h1>
    </div>
    <div className="commencer">
        <Link className='bouton' to="/login">Commencer maintenant</Link>
    </div>
  </div>
  )
};

export default Home;
