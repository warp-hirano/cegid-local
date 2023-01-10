import { useInView } from 'react-intersection-observer';
import Sec3ServiceSp from './Sec3ServiceSp';

const Sec3ServiceSetSp = ({ sec3ServiceSp }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec3ServiceSp) {
    return (
      <div ref={ref}>
        <div className={`area-div sp ${(inView && 'fadeup')}`}>
          {sec3ServiceSp.map((Sec3ServiceMap) => (
            <Sec3ServiceSp Sec3Service1SpTitle={Sec3ServiceMap} key={`sec3_service_sp_title-${Sec3ServiceMap.sec3_service_sp_title[0].text}`} />
          ))}
        </div>
      </div>
    );
  }
  return '';
};

export default Sec3ServiceSetSp;
