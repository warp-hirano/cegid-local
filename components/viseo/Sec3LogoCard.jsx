import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec3LogoCard = ({ ServiceCardTitle }) => {
  const title =
    ServiceCardTitle && RichText.asText(ServiceCardTitle.service_card_title)
      ? RichText.asText(ServiceCardTitle.service_card_title)
      : '';

  if (ServiceCardTitle) {
    return (
      <div className="support-card">
        <p className="card-title">{title}</p>
        <div className="img-box">
          <img src={ServiceCardTitle.service_logo_group.url} alt="" />
        </div>
      </div>
    );
  }
  return '';
};

export default Sec3LogoCard;
