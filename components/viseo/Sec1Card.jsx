import React from 'react';
import { RichText } from 'prismic-reactjs';

const TeamCard = ({ sec1_card_text }) => {
  const title =
    sec1_card_text && RichText.asText(sec1_card_text.sec1_card_text)
      ? RichText.asText(sec1_card_text.sec1_card_text)
      : '';

  if (sec1_card_text) {
    return (
      <div className="card-item fadeup">
        <div className='card-top'>
          <img src={sec1_card_text.sec1_card_img.url} />
        </div>
        <div className='card-bottom'>
          <p>{title}</p>
        </div>
      </div>
    );
  }
  return '';
};

export default TeamCard;
