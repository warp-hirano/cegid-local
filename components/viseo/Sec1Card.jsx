import React from 'react';
import { RichText } from 'prismic-reactjs';

const TeamCard = ({ Sec1CardText }) => {
  const title =
    Sec1CardText && RichText.asText(Sec1CardText.sec1_card_text)
      ? RichText.asText(Sec1CardText.sec1_card_text)
      : '';

  if (Sec1CardText) {
    return (
      <div className="card-item fadeup">
        <div className="card-top">
          <img src={Sec1CardText.sec1_card_img.url} alt="" />
        </div>
        <div className="card-bottom">
          <p>{title}</p>
        </div>
      </div>
    );
  }
  return '';
};

export default TeamCard;
