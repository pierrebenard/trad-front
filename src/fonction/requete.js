import axios from 'axios';

const envoieRequeteAvecArgumentDate = async (...dates) => {
  try {
    const promises = dates.map(async (date) => {
      const response = await axios.get(`http://127.0.0.1:5000/datedujour?date=${date}`);
      return response.data;
    });

    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.log('Erreur lors de la recherche :', error);
  }
};

export default envoieRequeteAvecArgumentDate;
