import { useInView } from 'react-intersection-observer';
import Sec3LogoCard from './Sec3LogoCard';

const Sec3LogoCardSet = ({ sec3LogoGroup }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec3LogoGroup) {
    return (
      <div ref={ref}>
        <div className={`support-card-area pc ${(inView && 'fadeup')}`}>
          {sec3LogoGroup.map((ServiceCardMapTitle) => (
            <Sec3LogoCard ServiceCardTitle={ServiceCardMapTitle} key={`service_card_title-${ServiceCardMapTitle.service_card_title[0]}`} />
          ))}
        </div>
      </div>
    );
  }
  return '';
};

export default Sec3LogoCardSet;
