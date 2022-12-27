import { useInView } from 'react-intersection-observer';
import React from 'react';

const Sec1World = ({ WorldText, sec1WT }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if ("WorldText", "sec1WT") {
    return (
      <div ref={ref}>
        <div className={`world-work ${(inView && 'fadeup')}`}>
          <div className={(inView && 'map')}>
            <img src={WorldText.world_map.url} alt="" />
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
