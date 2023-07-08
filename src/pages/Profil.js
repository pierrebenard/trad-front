import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/profil.css';

import NavBar from '../components/NavBar';

import ProfilCaseRadio, { soumissionsFormulaire } from '../components/ProfilCaseRadio';

const Profil = () => {

  //initialisation des variables
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  //recupere les sessions pour afficher les données
  useEffect(() => {
    try {
      const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
      const auth = sessionStorage.getItem('auth');

      //console.log("auth : " + auth);

      if (userDataFromSession && userDataFromSession.username && userDataFromSession.email) {
        setUsername(userDataFromSession.username);
        setEmail(userDataFromSession.email);
      } else {
        setUsername('Username non trouvé');
        setEmail('Email non trouvé');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }, []);

  //systeme de deconnexion et suppression des variables
  const deconnexion = () => {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('userData');
    navigate('/login');
  };

  //initialisation des options du selecteur
  

  return (
    <>
      <div className='tout'>
        <NavBar />
        <div className="contenu-global">
          <div className="cadre-infos">
            <h1>{username}</h1>
            <p>{email}</p>
            <button className='deconnexion' onClick={deconnexion}>Se déconnecter</button>
            <div className="selecteur">
              <div className='toutesLesCoches'>
                <ProfilCaseRadio />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Utilisez les données renvoyées dans votre interface utilisateur */}
      {data.map((item) => (
        <div key={item._id}>
          {/* Affichez les propriétés pertinentes de chaque élément */}
          <p>Date: {item.date}</p>
          <p>Autre propriété: {item.autrePropriete}</p>
        </div>
      ))}
    </>
  );
};

export default Profil;
