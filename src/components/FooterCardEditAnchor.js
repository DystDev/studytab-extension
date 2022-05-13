import React from 'react';
import { AiOutlineFolderAdd } from 'react-icons/ai';
const FooterCardEditAnchor = (props) => {
  return (
    <div className="footerEditAnchor" onClick={() => props.onAdd()}>
      <AiOutlineFolderAdd size="3em" />
    </div>
  );
};

export default FooterCardEditAnchor;
