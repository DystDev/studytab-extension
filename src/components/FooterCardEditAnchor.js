import React from 'react';

const FooterCardEditAnchor = (props) => {
  return (
    <div className="footerEditAnchor">
      <div onClick={() => props.onAdd()}>
        <p>Go back...</p>
      </div>
    </div>
  );
};

export default FooterCardEditAnchor;
