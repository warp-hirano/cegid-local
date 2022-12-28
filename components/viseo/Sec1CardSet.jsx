import { useInView } from 'react-intersection-observer';
import Sec1Card from './Sec1Card';

const Sec1CaerSet = ({ sec1Cards }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec1Cards) {
    return (
      <div className="card-area" ref={ref}>
        {(inView &&
          (
            <div className="view-wrap">
              {sec1Cards.map((Sec1MapText) => (
                <Sec1Card Sec1CardText={Sec1MapText} key={`sec1_card_text-${Sec1MapText.sec1_card_text[0].text}`} />
              ))}
            </div>
          )
        )}
      </div>
    );
  }
  return '';
};

export default Sec1CaerSet;
