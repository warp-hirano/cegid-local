import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec3Services = ({ Sec3Service2Title }) => {
  const title =
    Sec3Service2Title && RichText.asText(Sec3Service2Title.sec3_service2_title)
      ? RichText.asText(Sec3Service2Title.sec3_service2_title)
      : '';

  const main =
    Sec3Service2Title && RichText.asText(Sec3Service2Title.sec3_service2_main)
      ? RichText.asText(Sec3Service2Title.sec3_service2_main)
      : '';

  const mains = main.replace(/\n/g, '<br>');

  if (Sec3Service2Title) {
    return (
      <div className="support-item">
        <div className="name">
          <p>{title}</p>
        </div>
        <img src={Sec3Service2Title.sec3_service2_img.url} alt="" />
        <p dangerouslySetInnerHTML={{ __html: mains }} />
      </div>
    );
  }
  return '';
};

export default Sec3Services;
