import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec4Logo = ({ img_number }) => {

  if (img_number) {
    return (
      <li className='fadeup'>
        <img src={img_number.partner_logo.url} />
      </li>
    );
  }
  return '';
};

export default Sec4Logo;
