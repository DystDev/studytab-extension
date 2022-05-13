import SText from './SText';
import React from 'react';

const MainCard = (props) => {
  return (
    <div className="mainCardContainer">
      <SText>{props.text}</SText>
    </div>
  );
};

export default MainCard;
