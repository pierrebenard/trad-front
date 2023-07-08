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
    // Premier sélecteur
    let argument = "";
    if (otherSelectedOption === "aujourd'hui") {
      argument = "aujourd'hui";
      console.log(argument)
    } else if (otherSelectedOption === "semaineEnCours") {
      argument = "semaineEnCours";
      console.log(argument)
    } else if (otherSelectedOption === "semaineGlissante") {
      argument = "semaineGlissante";
      console.log(argument)
    } else if (otherSelectedOption === "moisGlissant") {
      argument = "moisGlissant";
      console.log(argument)
    } else if (otherSelectedOption === "moisEnCours") {
      argument = "moisEnCours";
      console.log(argument)
    }

    // Deuxième sélecteur
    let secondArgument = "";
    if (secondSelectedOption === "option1") {
      secondArgument = "valeur1";
      console.log(secondArgument)
    } else if (secondSelectedOption === "option2") {
      secondArgument = "valeur2";
      console.log(secondArgument)
    } else if (secondSelectedOption === "option3") {
      secondArgument = "valeur3";
      console.log(secondArgument)
    }

    // Appel à l'API en utilisant les arguments sélectionnés
    // ...

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
