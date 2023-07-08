import React, { useState } from 'react';
import axios from 'axios';

import CaseRadio from './CaseRadio';
import Button from './Button';
import Selector from './Selector';

const ProfilCaseRadio = ({ selectedOption }) => {
  const [takeProfit, setTakeProfit] = useState(null);
  const [stopLoss, setStopLoss] = useState(null);
  const [rrRange, setRrRange] = useState(null);
  const [otherSelectedOption, setOtherSelectedOption] = useState('');
  const [secondSelectedOption, setSecondSelectedOption] = useState('');

  const options = [
    { value: "aujourd'hui", label: "Aujourd'hui" },
    { value: 'semaineEnCours', label: 'Semaine en cours' },
    { value: 'semaineGlissante', label: 'Semaine glissante' },
    { value: 'moisGlissant', label: 'Mois glissant' },
    { value: 'moisEnCours', label: 'Mois en cours' },
    { value: '3mois', label: '3 mois' },
    { value: '6mois', label: '6 mois' },
    { value: '1an', label: '1 an' },
    { value: '2ans', label: '2 ans' },
    { value: 'tout', label: 'Tout' },
    { value: 'choixlibre', label: 'Choix libre' },
  ];
  const secondOptions = [
    { value: "DowJonesIndustrialAverage", label: "Dow Jones Industrial Average" },
    { value: 'NasdaqComposite', label: 'Nasdaq Composite' },
    { value: 'FTSE100', label: 'FTSE 100' },
    { value: 'DAX30', label: 'DAX 30' },
    { value: 'CAC40', label: 'CAC 40' },
    { value: 'Nikkei225', label: 'Nikkei 225' },
    { value: 'ShangaiComposite', label: 'Shangai Composite' },
    { value: 'HangSengIndex', label: 'Hang Seng Index' },
    { value: 'S&P/ASX200', label: 'S&P/ASX 200' },
    { value: 'Bovespa', label: 'Bovespa' },
    { value: 'Nifty50', label: 'Nifty 50' },
    { value: 'TAIEX', label: 'TAIEX' },
    { value: 'RTSIndex', label: 'RTS Index' },
    { value: 'S&P/TSXComposite', label: 'S&P/TSX Composite' },
  ];

  const valeurTakeProfitChange = (value) => {
    setTakeProfit(value);
  };

  const valeurStopLossChange = (value) => {
    setStopLoss(value);
  };

  const valeurRrRangeChange = (value) => {
    setRrRange(value);
  };

  const soumissionsFormulaire = async () => {

    let argumentDate = "";
    if (otherSelectedOption === "aujourd'hui") {
      argumentDate = "aujourd'hui";
      console.log(argumentDate)
    } else if (otherSelectedOption === "semaineEnCours") {
      argumentDate = "semaineEnCours";
      console.log(argumentDate)
    } else if (otherSelectedOption === "semaineGlissante") {
      argumentDate = "semaineGlissante";
      console.log(argumentDate)
    } else if (otherSelectedOption === "moisGlissant") {
      argumentDate = "moisGlissant";
      console.log(argumentDate)
    } else if (otherSelectedOption === "moisEnCours") {
      argumentDate = "moisEnCours";
      console.log(argumentDate)
    }

    // Deuxième sélecteur
    let argumentFiltre = "";
    if (secondSelectedOption === "option1") {
      argumentFiltre = "valeur1";
      console.log(argumentFiltre)
    } else if (secondSelectedOption === "option2") {
      argumentFiltre = "valeur2";
      console.log(argumentFiltre)
    } else if (secondSelectedOption === "option3") {
      argumentFiltre = "valeur3";
      console.log(argumentFiltre)
    }

    // appel à l'api
    if (takeProfit === 'Atteint') {
      const takeProfitRequeteAtteint = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/TPRatteint?date=${argumentDate}&filtre=${argumentFiltre}`);
          console.log(response.data);
          return response.data;
        } catch (error) {console.error(error); throw error;}
      };
      await takeProfitRequeteAtteint();
    } else if (takeProfit === 'Dépassé') {
    } else if (takeProfit === 'Non atteint') {
      const takeProfitRequeteAtteint = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/TPRnonAtteint?date=${argumentDate}&filtre=${argumentFiltre}`);
          console.log(response.data);
          return response.data;
        } catch (error) {console.error(error); throw error;}
      };
      await takeProfitRequeteAtteint();
    }

    if (stopLoss === 'Atteint') {
      console.log('Stop loss atteint');
    } else if (stopLoss === 'Partiel') {
      console.log('Stop loss partiel');
    }

    if (rrRange === '-0.5RR < BE < 0.5RR') {
      console.log('RR range valide');
    }
  };

  return (
    <div>
      {/* Premier sélecteur */}
      <Selector
        options={options}
        value={otherSelectedOption}
        onChange={(selected) => setOtherSelectedOption(selected)}
      />

      {/* Deuxième sélecteur */}
      <Selector
        options={secondOptions}
        value={secondSelectedOption}
        onChange={(selected) => setSecondSelectedOption(selected)}
      />
      
      <CaseRadio titre="Take profit" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" selectedCaseOption={takeProfit} onChange={valeurTakeProfitChange}/>
      <CaseRadio titre="Stop loss" nomOption1="Atteint" nomOption2="Partiel" selectedCaseOption={stopLoss} onChange={valeurStopLossChange}/>
      <CaseRadio titre="-0.5RR < BE < 0.5RR" nomOption1=" " selectedCaseOption={rrRange} onChange={valeurRrRangeChange}/>
      <Button label="chercher" onClick={soumissionsFormulaire} />
    </div>
  );
};

export default ProfilCaseRadio;
