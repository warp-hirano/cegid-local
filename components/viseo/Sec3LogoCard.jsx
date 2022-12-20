import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec3LogoCard = ({ service_card_title }) => {
  const title =
    service_card_title && RichText.asText(service_card_title.service_card_title)
      ? RichText.asText(service_card_title.service_card_title)
      : '';

  if (service_card_title) {
    return (
      <div className='support-card'>
        <p className='card-title'>{title}</p>
        <div className='img-box'>
          <img src={service_card_title.service_logo_group.url} alt='' />
        </div>
      </div>
    );
  }
  return '';
};

export default Sec3LogoCard;
