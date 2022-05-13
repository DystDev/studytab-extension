/* eslint-disable no-unused-vars */
/*global chrome*/
import React, { useEffect, useState } from 'react';
import '../App.js';
import FooterCardEditAnchor from '../components/FooterCardEditAnchor.js';
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
      <FooterCardEditAnchor onAdd={() => {props.setCurrentComponent('CardEdit')}}/>
    </div>
  );
};

export default CardDisplay;
