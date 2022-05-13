/* eslint-disable no-unused-vars */
/*global chrome*/
import React, { useEffect, useState } from 'react';
import '../App.js';
import MainCard from '../components/MainCard.js';

const CardDisplay = (props) => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [currentSets, setCurrentSets] = useState(null);

  const fetchData = async () => {
    try {
      chrome.storage.sync.get(['sets'], function (result) {
        result = JSON.parse(result);
      });
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cardDisplayScreen">
      {currentPrompt != null ? (
        <MainCard text={currentPrompt} />
      ) : (
        <MainCard
          text={'No sets! Click the button at the bottom to add a set!'}
        />
      )}
    </div>
  );
};

export default CardDisplay;
