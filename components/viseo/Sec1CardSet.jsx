import Sec1Card from './Sec1Card';
import { useInView } from 'react-intersection-observer';

const Sec1CaerSet = ({ sec1Cards }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec1Cards) {
    return (
      <div className='card-area' ref={ref}>
        {(inView &&
          <div className='view-wrap'>
            {sec1Cards.map((sec1_card_text) => (
              <Sec1Card sec1_card_text={sec1_card_text} key={`sec1_card_text-${sec1_card_text.sec1_card_text[0].text}`} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return '';
};

export default Sec1CaerSet;