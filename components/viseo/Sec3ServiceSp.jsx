import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec3ServicesSp = ({ Sec3Service1SpTitle }) => {
  const title =
    Sec3Service1SpTitle && RichText.asText(Sec3Service1SpTitle.sec3_service_sp_title)
      ? RichText.asText(Sec3Service1SpTitle.sec3_service_sp_title)
      : '';

  const titles = title.replace(/\n/g, '<br>');

  if (Sec3Service1SpTitle) {
    return (
      <div className="service-container">
        <img src={Sec3Service1SpTitle.sec3_service_sp_img.url} alt="" />
        <p className="service-name" dangerouslySetInnerHTML={{ __html: titles }} />
      </div>
    );
  }
  return '';
};

export default Sec3ServicesSp;
