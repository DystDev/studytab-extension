import React from 'react';

const CardDisplay = (props) => {
  return (
    <>
      <h1>CardDisplay</h1>
      <button onClick={() => props.setCurrentComponent('CardEdit')}>
        Go to cardEdit
      </button>
    </>
  );
};

export default CardDisplay;
