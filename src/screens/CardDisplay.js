import React, { useState } from 'react';
import '../App.js';
import MainCard from '../components/MainCard.js';

const CardDisplay = (props) => {
  const [currentPrompt, setCurrentPrompt] = useState(null);

  chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
  });

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
