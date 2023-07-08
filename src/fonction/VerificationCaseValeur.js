import React, { useState } from 'react';
import envoieRequeteAvecArgumentDate from '../fonction/requete';

const VerificationCaseValeur = (...dates) => {
  console.log(dates);

  const [takeProfit, setTakeProfit] = useState(null);
  const [stopLoss, setStopLoss] = useState(null);
  const [rrRange, setRrRange] = useState(null);
  const [tilt, setTilt] = useState(null);
  const [manualExit, setManualExit] = useState(null);
  const [tradeType, setTradeType] = useState(null);

  const valeurTakeProfitChange = (value) => {
    setTakeProfit(value);
  };

  const valeurStopLossChange = (value) => {
    setStopLoss(value);
  };

  const valeurRrRangeChange = (value) => {
    setRrRange(value);
  };

  const valeurTiltChange = (value) => {
    setTilt(value);
  };

  const valeurManualExitChange = (value) => {
    setManualExit(value);
  };

  const valeurTradeTypeChange = (value) => {
    setTradeType(value);
  };

  if (takeProfit === 'Atteint') {
    // Action à effectuer lorsque takeProfit est sélectionné avec la valeur 'Atteint'
  }

  if (stopLoss === 'Atteint') {
    // Action à effectuer lorsque stopLoss est sélectionné avec la valeur 'Atteint'
  }

  if (rrRange === '-0.5RR < BE < 0.5RR') {
    // Action à effectuer lorsque rrRange est sélectionné avec la valeur '-0.5RR < BE < 0.5RR'
  }

  setTakeProfit(null);
  setStopLoss(null);
  setRrRange(null);
  setTilt(null);
  setManualExit(null);
  setTradeType(null);

  return null;
};

export default VerificationCaseValeur;
