import { useInView } from 'react-intersection-observer';
import Sec4Logo from './Sec4Logo';

const Sec4LogoSet = ({ sec4LogoGroup }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  if (sec4LogoGroup) {
    return (
      <div className="logo-wrap fadeup" ref={ref}>
        {(inView &&
          (
            <ul className="logo-list">
              {sec4LogoGroup.map((ImgMapNumber) => (
                <Sec4Logo ImgNumber={ImgMapNumber} key={`img_number-${ImgMapNumber.img_number[0].text}`} />
              ))}
            </ul>
          )
        )}
      </div>
    );
  }
  return '';
};

export default Sec4LogoSet;
