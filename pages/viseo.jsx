import React from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';
import { RichText } from 'prismic-reactjs';
import i18n from 'utils/i18n';

import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
import { Layout } from 'components';

// swiper関連
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper';

// スクロールアニメーション
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring'

// Cardエリアjs呼び出し
import Sec1CardSet from '../components/viseo/Sec1CardSet';
// sec1 worldwork js呼び出し
import Sec1WorldSet from '../components/viseo/Sec1WorldSet';
// sec3 service2エリア呼び出し
import Sec3ServiceSet from '../components/viseo/Sec3ServiceSet';
// sec3 パートナーカード呼び出し
import Sec3LogoCardSet from '../components/viseo/Sec3LogoCardSet';
// sec4 logoリスト呼び出し
import Sec4LogoSet from '../components/viseo/Sec4LogoSet';

// 画像インポート
import FirstViewPC from '../public/images/viseo-fv.png';
import FirstViewSP from '../public/images/viseo-fv-sp.png';
import card1 from '../public/images/card-1.png';
import card2 from '../public/images/card-2.png';
import card3 from '../public/images/card-3.png';
import WorkMap from '../public/images/world-map.png';
import SpService01 from '../public/images/sp-service01.png';
import SpService02 from '../public/images/sp-service02.png';
import SpService03 from '../public/images/sp-service03.png';
import SpService04 from '../public/images/sp-service04.png';
import support1 from '../public/images/support-1.svg';
import support2 from '../public/images/support-2.svg';
import support3 from '../public/images/support-3.svg';
import SpCard01 from '../public/images/spcard-group1.svg';
import SpCard02 from '../public/images/spcard-group2.svg';
import SpCard03 from '../public/images/spcard-group3.svg';
import SpCard04 from '../public/images/spcard-group4.svg';
import SpCard05 from '../public/images/spcard-group5.svg';
import HouseImg from '../public/images/bottom_house.png';
import SapLogo from '../public/images/sap-logo.svg';
import microsoft from '../public/images/microsoft.svg';
import amazon from '../public/images/amazon.svg';
import azure from '../public/images/azure.svg';
import shopify from '../public/images/shopify.svg';
import google from '../public/images/google.svg';
import fluent from '../public/images/fluent.svg';
import cegid from '../public/images/cegid.svg';
import boomi from '../public/images/boomi.svg';
import naplan from '../public/images/naplan.svg';
import mulesoft from '../public/images/mulesoft.svg';
import sf from '../public/images/sf.svg';

/*  section1  */
function Set1({ sec1Engtitle, sec1Jptitle, sec1Subtitle, sec1Desctext, sec1Cards, sec1Worlds, sec1WT }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <section id="sec01" className="sec-content">
      <div className="sp-wrapper">
        <div className="viseo-title">
          <h2 className="eng-title" ref={ref} >
            {(inView &&
              <div dangerouslySetInnerHTML={{ __html: sec1Engtitle }} />
            )}
          </h2>
          <Jptitle1 sec1Jptitle={sec1Jptitle} />
        </div>
        <Subtitle1 sec1Subtitle={sec1Subtitle} />
        <DescText1 sec1Desctext={sec1Desctext} />
        <Sec1CardSet sec1Cards={sec1Cards} />
        <Sec1WorldSet sec1Worlds={sec1Worlds} sec1WT={sec1WT} />
      </div>
    </section >
  );
}
function Jptitle1({ sec1Jptitle }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref} className={'jp-title ' + (inView && 'fadeupJp')}>
      {sec1Jptitle}
    </div>
  );
}
function Subtitle1({ sec1Subtitle }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div className="sub-title" ref={ref}>
      <h3 className={(inView && 'fadeup')}>
        {sec1Subtitle}
        {/* <span className=' big-subtitle'>VISEOは、</span><br />デジタル戦略の中核を担い、<br className='sp' />独立系で堅実な会社です。 */}
      </h3>
    </div>
  );
}
function DescText1({ sec1Desctext }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <p className={'desc-text ' + (inView && 'fadeup')}>{sec1Desctext}</p>
    </div>
  );
}
function CardsArea({ sec1Cards }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div className="card-area" ref={ref}>
      {(inView &&
        <div className="view-wrap">
          <div className="card-item fadeup">
            <div className="card-top">
              <img src={card1} alt="" />
            </div>
            <div className="card-bottom">
              <p>企業のデジタル化</p>
            </div>
          </div>
          <div className="card-item fadeup card-delay-02">
            <div className="card-top">
              <img src={card2} alt="" />
            </div>
            <div className="card-bottom">
              <p>顧客をつなぐ</p>
            </div>
          </div>
          <div className="card-item fadeup card-delay-04">
            <div className="card-top">
              <img src={card3} alt="" />
            </div>
            <div className="card-bottom">
              <p>革新を探求</p>
            </div>
          </div>
          {sec1Cards}
        </div>
      )}
    </div>
  );
}
function WorldWork({ sec1Worlds }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'world-work ' + (inView && 'fadeup')}>
        <div className="map">
          <img src={WorkMap} alt="" />
        </div>
        <div className="work-text">
          {sec1Worlds}
        </div>
      </div>
    </div>
  );
}
/*  /section1  */

/*  section2  */
function Set2({ sec2Engtitle, sec2Subtitle, sec2Leadtext, sec2Maintext, sec2OfficeMap }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <section id="sec02" className="sec-content">
      <div className="viseo-title">
        <h2 className="eng-title" ref={ref} >
          {(inView &&
            <div dangerouslySetInnerHTML={{ __html: sec2Engtitle }} />
          )}
        </h2>
      </div>
      <div className="green-back">
        <LeadText sec2Subtitle={sec2Subtitle} sec2Leadtext={sec2Leadtext} />
        <ViseoText sec2Maintext={sec2Maintext} />
        <div className="green-wrap sp">
          <div className="lead-text">
            <h3>グローバルに展開し、<br className="sp" />最も意欲的な企業に貢献</h3>
            <p>顧客のニーズに応え、グローバルな展開をサポートするワールドワイドな存在感</p>
          </div>
          <p className="main-text">
            シンガポール、マレーシア、セブ、シュラバヤ、<br />
            香港、上海、深セン、東京、シドニー、メルボルン、<br />
            ブリスベン、バンガロールに拠点を置き、<br />
            現在アジア太平洋地域は<span>9</span>カ国<span>12</span>拠点に及んでいます。
          </p>
        </div>
        <ViseoOffice sec2OfficeMap={sec2OfficeMap} />
      </div>
    </section>
  );
}
function LeadText({ sec2Subtitle, sec2Leadtext }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'lead-text pc ' + (inView && 'fadeup')}>
        {/* <h3>グローバルに展開し、<br className="sp" />最も意欲的な企業に貢献</h3>
        <p>顧客のニーズに応え、グローバルな展開をサポートするワールドワイドな存在感</p> */}
        <h3>{sec2Subtitle}</h3>
        <p>{sec2Leadtext}</p>
      </div>
    </div >
  );
}
function ViseoText({ sec2Maintext }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      {/* <p className={'main-text pc ' + (inView && 'fadeup')}>
        シンガポール、マレーシア、セブ、シュラバヤ、香港、上海、深セン、東京、<br className='pc' />
        シドニー、メルボルン、ブリスベン、バンガロールに拠点を置き、<br />
        現在アジア太平洋地域は<span>9</span>カ国<span>12</span>拠点に及んでいます。
  </p> */}
      <p className={'main-text pc ' + (inView && 'fadeup')}>{sec2Maintext}</p>
    </div>
  );
}
function ViseoOffice({ sec2OfficeMap }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <img src={sec2OfficeMap} alt="" className={(inView && 'fadeup')} />
    </div>
  );
}
/*  /section2  */

/*  section3  */
function Set3({ sec3Engtitle, sec3Jptitle, sec3Bluetitle1, sec3Bluetitle2, sec3Bluetitle3, sec3Service2, sec3Serviceimg, sec3Servicetext, sec3LogoGroup }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <section id="sec03" className="sec-content">
      <div className="wrap">
        <div className="sp-wrapper">
          <div className="viseo-title">
            <h2 className="eng-title" ref={ref} >
              {(inView &&
                <div dangerouslySetInnerHTML={{ __html: sec3Engtitle }} />
              )}
            </h2>
            <Jptitle3 sec3Jptitle={sec3Jptitle} />
          </div>
          <Bluetitle1 sec3Bluetitle1={sec3Bluetitle1} />
          <ServiceImg1 sec3Serviceimg={sec3Serviceimg} />
          <div className="service-img sp">
            <div className="service-container">
              <img src={SpService01} alt="" />
              <p className="service-name">ビジネス<br />アプリケーション</p>
            </div>
            <div className="service-container">
              <img src={SpService02} alt="" />
              <p className="service-name">インテリジェントERP &<br />コア・プラットフォーム</p>
            </div>
            <div className="service-container">
              <img src={SpService03} alt="" />
              <p className="service-name">データ &<br />アナリティクス</p>
            </div>
            <div className="service-container">
              <img src={SpService04} alt="" />
              <p className="service-name">デザイン & 開発</p>
            </div>
          </div>
          <Bluetitle2 sec3Bluetitle2={sec3Bluetitle2} />
          <Sec3ServiceSet sec3Service2={sec3Service2} />
          <div className="support-img sp">
            <div className="support-container">
              <img src={support1} alt="" />
              <div className="support-text">
                <h3>構想</h3>
                <p>アドバイザリー、アイデア、構築</p>
              </div>
            </div>
            <div className="support-container">
              <img src={support2} alt="" />
              <div className="support-text">
                <h3>創る</h3>
                <p>デザイン、開発、実装、統合化</p>
              </div>
            </div>
            <div className="support-container">
              <img src={support3} alt="" />
              <div className="support-text">
                <h3>実施</h3>
                <p>デプロイメント、変更管理、<br />保守・モニタリング</p>
              </div>
            </div>
          </div>
          <Bluetitle3 sec3Bluetitle3={sec3Bluetitle3} />
          <ServiceText sec3Servicetext={sec3Servicetext} />
        </div>
        <Sec3LogoCardSet sec3LogoGroup={sec3LogoGroup} />
        <div className="support-card-area sp">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.5}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            <SwiperSlide className="swiperslide">
              <div className="support-card">
                <p className="card-title">顧客体験</p>
                <div className="img-box">
                  <img src={SpCard01} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <div className="support-card">
                <p className="card-title">小売Eコマース</p>
                <div className="img-box">
                  <img src={SpCard02} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <div className="support-card">
                <p className="card-title">サプライチェーンDOM</p>
                <div className="img-box">
                  <img src={SpCard03} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <div className="support-card">
                <p className="card-title">IT・データ統合</p>
                <div className="img-box">
                  <img src={SpCard04} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <div className="support-card">
                <p className="card-title">ERP</p>
                <div className="img-box">
                  <img src={SpCard05} alt="" className="resize" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
function Jptitle3({ sec3Jptitle }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'jp-title ' + (inView && "fadeupJp")}>{sec3Jptitle}</div>
    </div>
  );
}
function Bluetitle1({ sec3Bluetitle1 }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <h3 className={'blue-title ' + (inView && 'fadeup')}>{sec3Bluetitle1}</h3>
    </div>
  );
}
function Bluetitle2({ sec3Bluetitle2 }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <h3 className={'blue-title ' + (inView && 'fadeup')}>{sec3Bluetitle2}</h3>
    </div>
  );
}
function Bluetitle3({ sec3Bluetitle3 }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <h3 className={'blue-title ' + (inView && 'fadeup')}>{sec3Bluetitle3}</h3>
    </div>
  );
}
function ServiceImg1({ sec3Serviceimg }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'img-area pc ' + (inView && 'fadeup')}>
        <img src={sec3Serviceimg} alt="" />
      </div>
    </div >
  );
}
function ServiceImg2({ }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'support-area pc ' + (inView && 'fadeup')}>
        <div className={'support-item ' + (inView && 'fadeup')}>
          <div className="name">構想</div>
          <img src={support1} alt="" />
          <p>アドバイザー<br />アイデア<br />構築</p>
        </div>
        <div className={'support-item ' + (inView && "fadeup card-delay-02")}>
          <div className="name">創る</div>
          <img src={support2} alt="" />
          <p>デザイン<br />開発<br />実装<br />統合化</p>
        </div>
        <div className={'support-item ' + (inView && "fadeup card-delay-04")}>
          <div className="name">実施</div>
          <img src={support3} alt="" />
          <p>デプロイメント<br />変更管理<br />保守・モニタリング</p>
        </div>
      </div>
    </div>
  );
}
function ServiceText({ sec3Servicetext }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <p className={'main-text ' + (inView && 'fadeup')}>
        {sec3Servicetext}
      </p>
    </div>
  );
}
function SupportCard() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'support-card-area pc ' + (inView && 'fadeup')}>
        <div className="support-card">
          <p className="card-title">顧客体験</p>
          <div className="img-box">
            <img src={SpCard01} alt="" />
          </div>
        </div>
        <div className="support-card">
          <p className="card-title">小売Eコマース</p>
          <div className="img-box">
            <img src={SpCard02} alt="" />
          </div>
        </div>
        <div className="support-card">
          <p className="card-title">サプライチェーンDOM</p>
          <div className="img-box">
            <img src={SpCard03} alt="" />
          </div>
        </div>
        <div className="support-card">
          <p className="card-title">IT・データ統合</p>
          <div className="img-box">
            <img src={SpCard04} alt="" />
          </div>
        </div>
        <div className="support-card">
          <p className="card-title">ERP</p>
          <div className="img-box">
            <img src={SpCard05} alt="" className="resize" />
          </div>
        </div>
      </div>
    </div>
  );
}
/*  /section3  */

/*  section4  */
function Set4({ sec4Engtitle, sec4Jptitle, sec4LogoGroup }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <section id="sec04" className="sec-content">
      <div className="sp-wrapper">
        <div className="viseo-title">
          <h2 className="eng-title" ref={ref} >
            {(inView &&
              <div dangerouslySetInnerHTML={{ __html: sec4Engtitle }} />
            )}
          </h2>
          <Jptitle4 sec4Jptitle={sec4Jptitle} />
        </div>
      </div>
      <Sec4LogoSet sec4LogoGroup={sec4LogoGroup} />
    </section>
  );
}
function Jptitle4({ sec4Jptitle }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref}>
      <div className={'jp-title ' + (inView && "fadeupJp")}>{sec4Jptitle}</div>
    </div>
  );
}
function PartnerLogo() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -10% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div className="logo-wrap fadeup" ref={ref}>
      {(inView &&
        <ul className="logo-list">
          <li className='fadeup'><img src={SapLogo} alt="" /></li>
          <li className="fadeup logo-delay-02"><img src={microsoft} alt="" /></li>
          <li className="fadeup logo-delay-03"><img src={amazon} alt="" /></li>
          <li className="fadeup logo-delay-04"><img src={azure} alt="" /></li>
          <li className="fadeup logo-delay-05"><img src={shopify} alt="" /></li>
          <li className="fadeup logo-delay-06"><img src={google} alt="" /></li>
          <li className="fadeup logo-delay-07"><img src={fluent} alt="" /></li>
          <li className="fadeup logo-delay-08"><img src={cegid} alt="" /></li>
          <li className="fadeup logo-delay-09"><img src={boomi} alt="" /></li>
          <li className="fadeup logo-delay-10"><img src={naplan} alt="" /></li>
          <li className="fadeup logo-delay-11"><img src={mulesoft} alt="" /></li>
          <li className="fadeup logo-delay-12"><img src={sf} alt="" /></li>
        </ul>
      )}
    </div >

  );
}
/*  /section4  */

/*  section5  */
function Set5() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <section id="sec05" className="sec-content">
      <div className="contact-content" ref={ref}>
        <div className="contact-area">
          <img src={HouseImg} alt="" />
          <div className="contact-text">
            <h2>CONTACT US</h2>
            <a href="">お問い合わせはこちら</a>
          </div>
        </div>
        <div className={'contact-btn-area ' + (inView && 'fadeup')}>
          <div className="contact-btn">
            <a href="">Warp Japan</a>
          </div>
          <div className="contact-btn">
            <a href="">VISEO</a>
          </div>
        </div>
      </div>
    </section>
  );
}
/*  /section5  */


function ViseoPage({ doc, menu, footer, lang, preview }) {
  if (doc && doc.data) {

    const Fvtitle =
      doc && RichText.render(doc.data.fv_title)
        ? RichText.render(doc.data.fv_title)
        : '';

    // sec1ここから

    /* ----- 配列取り出し ----- */
    let result1 = doc.data.sec1_eng_title[0].text.split('');
    let newText1 = '';

    for (let i = 0; i < result1.length; i++) {
      newText1 += '<span>' + result1[i] + '</span>';
    }

    const sec1Engtitle = newText1;
    /* ---------------------- */

    const sec1Jptitle =
      doc && RichText.render(doc.data.sec1_jp_title)
        ? RichText.render(doc.data.sec1_jp_title)
        : '';

    const sec1Subtitle =
      doc && RichText.render(doc.data.sec1_sub_title)
        ? RichText.render(doc.data.sec1_sub_title)
        : '';

    const sec1Desctext =
      doc && RichText.render(doc.data.sec1_main_text)
        ? RichText.render(doc.data.sec1_main_text)
        : '';

    // sec2ここから

    /* ----- 配列取り出し ----- */
    let result2 = doc.data.sec2_eng_title[0].text.split('');
    let newText2 = '';

    for (let i = 0; i < result2.length; i++) {
      newText2 += '<span>' + result2[i] + '</span>';
    }

    const sec2Engtitle = newText2;
    /* ---------------------- */

    const sec2Leadtext =
      doc && RichText.render(doc.data.sec2_lead_text)
        ? RichText.render(doc.data.sec2_lead_text)
        : '';

    const sec2Subtitle =
      doc && RichText.render(doc.data.sec2_sub_title)
        ? RichText.render(doc.data.sec2_sub_title)
        : '';

    const sec2Maintext =
      doc && RichText.render(doc.data.sec2_main_text)
        ? RichText.render(doc.data.sec2_main_text)
        : '';

    // sec3ここから

    /* ----- 配列取り出し ----- */
    let result3 = doc.data.sec3_eng_title[0].text.split('');
    let newText3 = '';

    for (let i = 0; i < result3.length; i++) {
      newText3 += '<span>' + result3[i] + '</span>';
    }

    const sec3Engtitle = newText3;
    /* ---------------------- */

    const sec3Jptitle =
      doc && RichText.render(doc.data.sec3_jp_title)
        ? RichText.render(doc.data.sec3_jp_title)
        : '';

    const sec3Bluetitle1 =
      doc && RichText.render(doc.data.sec3_blue_title1)
        ? RichText.render(doc.data.sec3_blue_title1)
        : '';

    const sec3Bluetitle2 =
      doc && RichText.render(doc.data.sec3_blue_title2)
        ? RichText.render(doc.data.sec3_blue_title2)
        : '';

    const sec3Bluetitle3 =
      doc && RichText.render(doc.data.sec3_blue_title3)
        ? RichText.render(doc.data.sec3_blue_title3)
        : '';

    const sec3Servicetext =
      doc && RichText.render(doc.data.sec3_service3_text)
        ? RichText.render(doc.data.sec3_service3_text)
        : '';

    // sec4ここから
    /* ----- 配列取り出し ----- */
    let result4 = doc.data.sec4_eng_title[0].text.split('');
    let newText4 = '';

    for (let i = 0; i < result4.length; i++) {
      newText4 += '<span>' + result4[i] + '</span>';
    }

    const sec4Engtitle = newText4;
    /* ---------------------- */

    const sec4Jptitle =
      doc && RichText.render(doc.data.sec4_jp_title)
        ? RichText.render(doc.data.sec4_jp_title)
        : '';


    // 画像関係

    const sec2OfficeMap =
      doc && doc.data.sec2_office_map.url
        ? doc.data.sec2_office_map.url
        : '';

    const sec1Cards =
      doc && doc.data.sec1_card_area
        ? doc.data.sec1_card_area
        : '';

    const sec1Worlds =
      doc && doc.data.world_work
        ? doc.data.world_work
        : '';

    const sec1WT =
      doc && RichText.render(doc.data.world_work[0].world_text)
        ? RichText.render(doc.data.world_work[0].world_text)
        : '';

    const sec3Serviceimg =
      doc && doc.data.sec3_service_img1.url
        ? doc.data.sec3_service_img1.url
        : '';

    const sec3Service2 =
      doc && doc.data.sec3_service2_area
        ? doc.data.sec3_service2_area
        : '';

    const sec3LogoGroup =
      doc && doc.data.service_card_area
        ? doc.data.service_card_area
        : '';

    const sec4LogoGroup =
      doc && doc.data.sec4_logo_area
        ? doc.data.sec4_logo_area
        : '';

    const currentLang = lang.currentLang.slice(0, 2);
    const translations = i18n[currentLang];

    const [query, setQuery] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    const [thankYou, setThankYou] = useState(null);

    // Update inputs value
    const handleParam = () => (e) => {
      const { name } = e.target;
      const { value } = e.target;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    // Form Submit function
    const formSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });

      fetch(`https:// getform.io/f/${token}`, {
        method: 'POST',
        body: formData,
      }).then(() => {
        setQuery({ name: '', email: '', message: '', company: '' });
        setThankYou(translations.thankyou);
      });
    };

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        footer={footer}
        title='WarpJapan For Viseo'
        isPreview={preview.isActive}
      >
        <link rel='stylesheet' href='https:// cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css' />
        <script src='https:// cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'></script>
        <div className="viseo-wrapper" data-scroll-section>
          <div className="fv-area">
            <img src={FirstViewPC} alt="" className="pc" />
            <img src={FirstViewSP} alt="" className="sp" />
            <p>{Fvtitle}</p>
          </div>
          <Set1
            sec1Engtitle={sec1Engtitle} sec1Jptitle={sec1Jptitle} sec1Subtitle={sec1Subtitle}
            sec1Desctext={sec1Desctext} sec1Cards={sec1Cards} sec1Worlds={sec1Worlds} sec1WT={sec1WT} />
          <Set2
            sec2Engtitle={sec2Engtitle} sec2Subtitle={sec2Subtitle} sec2Leadtext={sec2Leadtext}
            sec2Maintext={sec2Maintext} sec2OfficeMap={sec2OfficeMap} />
          <Set3
            sec3Engtitle={sec3Engtitle} sec3Jptitle={sec3Jptitle} sec3Bluetitle1={sec3Bluetitle1}
            sec3Bluetitle2={sec3Bluetitle2} sec3Bluetitle3={sec3Bluetitle3} sec3Service2={sec3Service2}
            sec3Serviceimg={sec3Serviceimg} sec3Servicetext={sec3Servicetext} sec3LogoGroup={sec3LogoGroup} />
          <Set4 sec4Engtitle={sec4Engtitle} sec4Jptitle={sec4Jptitle} sec4LogoGroup={sec4LogoGroup} />
          <Set5 />
        </div >
      </Layout >
    );
  }

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    window.scrollY > 500
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (doc && doc.data) {
    useUpdatePreviewRef(preview, doc.id);
    useUpdateToolbarDocs(homepageToolbarDocs(preview.activeRef, doc.lang), [
      doc,
    ]);
  };

}

export async function getServerSideProps({
  preview,
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null;
  const isPreview = preview || false;
  const client = Client();
  const doc =
    (await client.getSingle(
      'viseo',
      ref ? { ref, lang: locale } : { lang: locale },
    )) || {};
  const menu =
    (await client.getSingle(
      'top_menu',
      ref ? { ref, lang: locale } : { lang: locale },
    )) || {};

  const footer =
    (await client.getSingle(
      'footer',
      ref ? { ref, lang: locale } : { lang: locale },
    )) || {};

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  return {
    props: {
      menu,
      doc,
      footer,
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  };
}

export default ViseoPage;
