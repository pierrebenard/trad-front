import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import errorMsg from '../components/errorMsg';
import '../css/login.css';

//création du composant
const Login = () => {
  //initialisation de la fonction de redirection
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  //fonction exécutée à chaque caractère rentré dans un champ
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  //fonction exécutée à l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    //vérification si l'utilisateur existe
    try {
      const response = await axios.post('https://trad-back.onrender.com//api/auth/login', {
        email: userData.email,
        password: userData.password
      });

      const { token, userId } = response.data;
      localStorage.setItem('authToken', token);
      console.log('User ID:', userId);
      console.log('Token:', token);

      //requête pour récupérer les informations d'un utilisateur spécifique depuis l'API back-end
      const userResponse = await axios.get(`http://localhost:4200/api/auth/getUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const user = userResponse.data.user;

      //stocker les informations de l'utilisateur dans des sessions
      sessionStorage.setItem('auth', 'true');
      sessionStorage.setItem('userData', JSON.stringify(user));

      const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
      const auth = sessionStorage.getItem('auth');

      console.log("Session username:", userDataFromSession.username);
      console.log("Session email:", userDataFromSession.email);
      console.log("auth : " + auth);

      //redirection de l'utilisateur
      navigate('/profil');
    } catch (error) {
      console.log('Error:', error);
      //gestion de l'erreur
      setError('Erreur de connexion. Veuillez vérifier vos informations.');
    }
  };

  const [error, setError] = useState(null); // État pour stocker l'erreur

  return (
    <div className="tout">
      <NavBar />
      <div className="contenu-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Votre E-mail</label>
            <input type="email" name="email" onChange={handleChange} placeholder="votreadresseemail@gmail.com" required id='email' />
          </div>
          <div>
            <label htmlFor="password">Votre mot de passe</label>
            <input type="password" name="password" onChange={handleChange} placeholder="********" required id='password' />
          </div>
          <Link className='lien' to="/register">Je n'ai pas de compte</Link>
          <button className='bouton' type="submit">Se connecter</button>
        </form>
        {error && <errorMsg title="Pas bon" />} {<errorMsg title="pas bon"/>}
      </div>
    </div>
  );
};

export default Login;
