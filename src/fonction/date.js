import axios from 'axios';

const chercherDate = async (selectedOption, setData) => {
  console.log(selectedOption);
  if (selectedOption === "aujourd'hui") {
    try {
      const response = await axios.get('http://127.0.0.1:5000/datedujour');
      setData([response.data]);
      console.log(response.data)
    } catch (error) {
      console.log('Erreur lors de la recherche :', error);
    }
  }
  if (selectedOption === "semaineEnCours") {
    try {
      const response = await axios.get('http://127.0.0.1:5000/semaineencours');
      setData([response.data]);
      console.log(response.data)
    } catch (error) {
      console.log('Erreur lors de la recherche :', error);
    }
  }
  if (selectedOption === "semaineGlissante") {
    try {
      const response = await axios.get('http://127.0.0.1:5000/semaineglissante');
      setData([response.data]);
      console.log(response.data)
    } catch (error) {
      console.log('Erreur lors de la recherche :', error);
    }
  }
  if (selectedOption === "moisEnCours") {
    try {
      const response = await axios.get('http://127.0.0.1:5000/moisencours');
      setData([response.data]);
      console.log(response.data)
    } catch (error) {
      console.log('Erreur lors de la recherche :', error);
    }
  }
  if (selectedOption === "moisGlissante") {
    try {
      const response = await axios.get('http://127.0.0.1:5000/moisglissante');
      setData([response.data]);
      console.log(response.data)
    } catch (error) {
      console.log('Erreur lors de la recherche :', error);
    }
  }
};

export default chercherDate;
