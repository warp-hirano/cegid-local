import React from 'react';

const Sec4Logo = ({ ImgNumber }) => {
  if (ImgNumber) {
    return (
      <li className="fadeup">
        <img src={ImgNumber.partner_logo.url} alt="" />
      </li>
    );
  }
  return '';
};

export default Sec4Logo;
