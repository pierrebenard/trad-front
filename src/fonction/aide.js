import React from 'react'

const aide = () => {
  return (
    <div>
        <CaseRadio titre="Take profit" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" onChange={valeurTakeProfitChange}/>
        <CaseRadio titre="Stop loss" nomOption1="Atteint" nomOption2="Partiel" onChange={valeurStopLossChange}/>
        <CaseRadio titre="-0.5RR < BE < 0.5RR" nomOption1=" " onChange={valeurRrRangeChange}/>
        <CaseRadio titre="Journée de tilt (>2 fois la perte habituelle)" nomOption1=" " onChange={valeurTiltChange}/>
        <CaseRadio titre="Sortie manuelle ( succès / échec)" nomOption1="Succès" nomOption2="Echec" onChange={valeurManualExitChange}/>
        <CaseRadio titre="Trade tjs positif ou négatif" nomOption1="Positif" nomOption2="Negatif" onChange={valeurTradeTypeChange}/>
    </div>
  )
}

export default aide

