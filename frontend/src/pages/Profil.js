import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';

//création du composant
const Profil = () => {

  //initialisaton de la fonction de redirection
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  //inscription de l'utilisateur
  useEffect(() => {
    try {
      //recuperation des sessions
      const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
      const auth = sessionStorage.getItem('auth');

      console.log("auth : " + auth);

      //recuperation des données des sessions
      if (userDataFromSession && userDataFromSession.username && userDataFromSession.email) {
        setUsername(userDataFromSession.username);
        setEmail(userDataFromSession.email);
      } else {
        setUsername('Username non trouvé');
        setUsername('Email non trouvé');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }, []);

  //fonction de déconnexion
  const deconnexion = () => {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <>
    <div className='tout'>
        <NavBar />
        <div className="contenu-global">
            <div className="cadre-infos">
                <h1>{username}</h1>
                <p>{email}</p>
                <button className='deconnexion' onClick={deconnexion}>Se déconnecter</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default Profil;
