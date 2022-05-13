import React, { useState } from 'react';
import '../App.js';
import MainCard from '../components/MainCard.js';

const CardDisplay = (props) => {
  const [currentPrompt, setCurrentPrompt] = useState(null);

  return (
    <div className="cardDisplayScreen">
      {currentPrompt != null ? (
        <MainCard text={currentPrompt} />
      ) : (
        <MainCard text={'Loading...'} />
      )}
    </div>
  );
};

export default CardDisplay;
