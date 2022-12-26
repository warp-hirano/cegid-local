import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sec3Services = ({ sec3_service2_title }) => {
  const title =
    sec3_service2_title && RichText.asText(sec3_service2_title.sec3_service2_title)
      ? RichText.asText(sec3_service2_title.sec3_service2_title)
      : '';

  const main =
    sec3_service2_title && RichText.asText(sec3_service2_title.sec3_service2_main)
      ? RichText.asText(sec3_service2_title.sec3_service2_main)
      : '';

  const mains = main.replace(/\n/g, '<br>')

  if (sec3_service2_title) {
    return (
      <div className='support-item'>
        <div className='name'>
          <p>{title}</p>
        </div>
        <img src={sec3_service2_title.sec3_service2_img.url} />
        <p dangerouslySetInnerHTML={{ __html: mains }} />
      </div>
    );
  }
  return '';
};

export default Sec3Services;
