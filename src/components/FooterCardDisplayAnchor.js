import React from 'react';
import { AiOutlineFolderAdd } from 'react-icons/ai';
const FooterCardDisplayAnchor = (props) => {
  return (
    <div className="footerEditAnchor">
      <div onClick={() => props.onAdd()}>
        <AiOutlineFolderAdd size="3em" />
      </div>
    </div>
  );
};

export default FooterCardDisplayAnchor;
