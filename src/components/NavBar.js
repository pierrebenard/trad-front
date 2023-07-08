import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

const NavBar = () => {
  const isAuthenticated = sessionStorage.getItem('auth') === 'true';
  const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userDataFromSession ? userDataFromSession._id : null;
  //console.log("userID : " + userId);

  return (
    <nav>
      <Link className='onglet simple' to="/">Accueil</Link>
      <Link className='onglet simple' to="/">machin</Link>
      <Link className='onglet simple' to="/">machin</Link>
      {!isAuthenticated && (
        <Link className='onglet login' to="/login">Se connecter</Link>
      )}
      {isAuthenticated && userId && (
        <Link className='onglet login' to="profil">Mon profil</Link>
      )}
    </nav>
  );
};

export default NavBar;
