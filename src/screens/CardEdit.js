import React, { useEffect } from 'react';

const CardEdit = (props) => {
  return (
    <>
      <h1>CardEdit</h1>
      <button onClick={() => props.setCurrentComponent('CardDisplay')}>
        Go to cardDisplay
      </button>
    </>
  );
};

export default CardEdit;
