import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useInView } from 'react-intersection-observer';

const Sec1World = ({ world_text, sec1WT }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "0px 0px -20% 0px", // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  const Worldtext =
    world_text && RichText.asText(world_text.world_text)
      ? RichText.asText(world_text.world_text)
      : '';

  const Worldstext = Worldtext.replace(/\n/g, '<br>')

  if (world_text, sec1WT) {
    return (
      <div ref={ref}>
        <div className={'world-work ' + (inView && 'fadeup')}>
          <div className={(inView && 'map')}>
            <img src={world_text.world_map.url} alt="" />
          </div>
          <div className={(inView && 'work-text')}>
            {sec1WT}
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default Sec1World;
