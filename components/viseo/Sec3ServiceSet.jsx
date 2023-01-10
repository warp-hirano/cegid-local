import { useInView } from 'react-intersection-observer';
import Sec3Service from './Sec3Service';

const Sec3ServiceSet = ({ sec3Service2 }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec3Service2) {
    return (
      <div ref={ref}>
        <div className="support-area">
          <div className={`area-div ${(inView && 'fadeup')}`}>
            {sec3Service2.map((Sec3Service2MapTitle) => (
              <Sec3Service Sec3Service2Title={Sec3Service2MapTitle} key={`sec3_service2_title-${Sec3Service2MapTitle.sec3_service2_title[0].text}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default Sec3ServiceSet;
