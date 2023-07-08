import verificationCaseValeur from '../fonction/VerificationCaseValeur'

const chercherDate = async (selectedOption, setData) => {
  console.log(selectedOption);
  if (selectedOption === "aujourd'hui") {
    const date = new Date();
    const isoDate = date.toISOString();
    verificationCaseValeur(isoDate);
  }
};

export default chercherDate;
