import { React, useEffect } from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';
import { RichText } from 'prismic-reactjs';

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

// Cardエリアjs呼び出し
import Sec1CardSet from '../components/viseo/Sec1CardSet';
// sec1 worldwork js呼び出し
import Sec1WorldSet from '../components/viseo/Sec1WorldSet';
// sec3 service2エリア呼び出し
import Sec3ServiceSet from '../components/viseo/Sec3ServiceSet';
import Sec3ServiceSetSp from '../components/viseo/Sec3ServiceSetSp';
// sec3 パートナーカード呼び出し
import Sec3LogoCardSet from '../components/viseo/Sec3LogoCardSet';
// sec4 logoリスト呼び出し
import Sec4LogoSet from '../components/viseo/Sec4LogoSet';

// 画像インポート
import FirstViewPC from '../public/images/viseo-fv.png';
import FirstViewSP from '../public/images/viseo-fv-sp.png';
import SpCard01 from '../public/images/spcard-group1.svg';
import SpCard02 from '../public/images/spcard-group2.svg';
import SpCard03 from '../public/images/spcard-group3.svg';
import SpCard04 from '../public/images/spcard-group4.svg';
import SpCard05 from '../public/images/spcard-group5.svg';
import HouseImg from '../public/images/bottom_house.png';

/*  section1  */
function Set1({ sec1Engtitle, sec1Jptitle, sec1Subtitle,
  sec1Desctext, sec1Cards, sec1Worlds, sec1WT }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <section id="sec01" className="sec-content">
      <div className="sp-wrapper">
        <div className="viseo-title">
          <h2 className="eng-title" ref={ref}>
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
    </section>
  );
}
function Jptitle1({ sec1Jptitle }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '0px 0px -20% 0px', // ref要素が現れてから20%過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div ref={ref} className={`jp-title ${(inView && 'fadeupJp')}`}>
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
    <div ref={ref} className={`sub-title ${(inView && 'fadeup')}`}>
      {sec1Subtitle}
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
      <p className={`desc-text ${(inView && 'fadeup')}`}>{sec1Desctext}</p>
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
        <h2 className="eng-title" ref={ref}>
          {(inView &&
            <div dangerouslySetInnerHTML={{ __html: sec2Engtitle }} />
          )}
        </h2>
      </div>
      <div className="green-back">
        <LeadText sec2Subtitle={sec2Subtitle} sec2Leadtext={sec2Leadtext} />
        <ViseoText sec2Maintext={sec2Maintext} />

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
      <div className={`lead-text ${(inView && 'fadeup')}`}>
        <h3>{sec2Subtitle}</h3>
        <p>{sec2Leadtext}</p>
      </div>
    </div>
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
      <p className={`main-text ${(inView && 'fadeup')}`}>{sec2Maintext}</p>
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
function Set3({ sec3Engtitle, sec3Jptitle, sec3Bluetitle1, sec3Bluetitle2,
  sec3Bluetitle3, sec3Service2, sec3ServiceSp, sec3Serviceimg, sec3Servicetext, sec3LogoGroup }) {
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
            <h2 className="eng-title" ref={ref}>
              {(inView &&
                <div dangerouslySetInnerHTML={{ __html: sec3Engtitle }} />
              )}
            </h2>
            <Jptitle3 sec3Jptitle={sec3Jptitle} />
          </div>
          <Bluetitle1 sec3Bluetitle1={sec3Bluetitle1} />
          <ServiceImg1 sec3Serviceimg={sec3Serviceimg} />
          <Sec3ServiceSetSp sec3ServiceSp={sec3ServiceSp} />
          <Bluetitle2 sec3Bluetitle2={sec3Bluetitle2} />
          <Sec3ServiceSet sec3Service2={sec3Service2} />
          <Bluetitle3 sec3Bluetitle3={sec3Bluetitle3} />
          <ServiceText sec3Servicetext={sec3Servicetext} />
        </div>
        <Sec3LogoCardSet sec3LogoGroup={sec3LogoGroup} />
        <div className="support-card-area sp">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
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
            className="mySwiper"
          >
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
      <div className={`jp-title ${(inView && 'fadeupJp')}`}>{sec3Jptitle}</div>
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
      <h3 className={`blue-title ${(inView && 'fadeup')}`}>{sec3Bluetitle1}</h3>
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
      <h3 className={`blue-title ${(inView && 'fadeup')}`}>{sec3Bluetitle2}</h3>
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
      <h3 className={`blue-title ${(inView && 'fadeup')}`}>{sec3Bluetitle3}</h3>
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
      <div className={`img-area pc ${(inView && 'fadeup')}`}>
        <img src={sec3Serviceimg} alt="" />
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
      <p className={`main-text ${(inView && 'fadeup')}`}>
        {sec3Servicetext}
      </p>
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
          <h2 className="eng-title" ref={ref}>
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
      <div className={`jp-title ${(inView && 'fadeupJp')}`}>{sec4Jptitle}</div>
    </div>
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
        <div className={`contact-btn-area ${(inView && 'fadeup')}`}>
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
    const result1 = doc.data.sec1_eng_title[0].text.split('');
    let newText1 = '';

    for (let i = 0; i < result1.length; i += 1) {
      newText1 += `<span>${result1[i]}</span>`;
    }

    let sec1Engtitle = newText1;
    sec1Engtitle = sec1Engtitle.replace(/\s/g, '&nbsp;');
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
    const result2 = doc.data.sec2_eng_title[0].text.split('');
    let newText2 = '';

    for (let i = 0; i < result2.length; i += 1) {
      newText2 += `<span>${result2[i]}</span>`;
    }

    let sec2Engtitle = newText2;
    sec2Engtitle = sec2Engtitle.replace(/\s/g, '&nbsp;');
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
    const result3 = doc.data.sec3_eng_title[0].text.split('');
    let newText3 = '';

    for (let i = 0; i < result3.length; i += 1) {
      newText3 += `<span>${result3[i]}</span>`;
    }

    let sec3Engtitle = newText3;
    sec3Engtitle = sec3Engtitle.replace(/\s/g, '&nbsp;');
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
    const result4 = doc.data.sec4_eng_title[0].text.split('');
    let newText4 = '';

    for (let i = 0; i < result4.length; i += 1) {
      newText4 += `<span>${result4[i]}</span>`;
    }

    let sec4Engtitle = newText4;
    sec4Engtitle = sec4Engtitle.replace(/\s/g, '&nbsp;');
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

    const sec3ServiceSp =
      doc && doc.data.sec3_service_sp
        ? doc.data.sec3_service_sp
        : '';

    const sec3LogoGroup =
      doc && doc.data.service_card_area
        ? doc.data.service_card_area
        : '';

    const sec4LogoGroup =
      doc && doc.data.sec4_logo_area
        ? doc.data.sec4_logo_area
        : '';

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        footer={footer}
        title="WarpJapan For Viseo"
        isPreview={preview.isActive}
      >
        <link rel="stylesheet" href="https:// cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <script src="https:// cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" />

        <div className="viseo-wrapper" data-scroll-section>
          <div className="fv-area">
            <img src={FirstViewPC} alt="" className="pc" />
            <img src={FirstViewSP} alt="" className="sp" />
            <p>{Fvtitle}</p>
          </div>
          <Set1
            sec1Engtitle={sec1Engtitle}
            sec1Jptitle={sec1Jptitle}
            sec1Subtitle={sec1Subtitle}
            sec1Desctext={sec1Desctext}
            sec1Cards={sec1Cards}
            sec1Worlds={sec1Worlds}
            sec1WT={sec1WT}
          />
          <Set2
            sec2Engtitle={sec2Engtitle}
            sec2Subtitle={sec2Subtitle}
            sec2Leadtext={sec2Leadtext}
            sec2Maintext={sec2Maintext}
            sec2OfficeMap={sec2OfficeMap}
          />
          <Set3
            sec3Engtitle={sec3Engtitle}
            sec3Jptitle={sec3Jptitle}
            sec3Bluetitle1={sec3Bluetitle1}
            sec3Bluetitle2={sec3Bluetitle2}
            sec3Bluetitle3={sec3Bluetitle3}
            sec3Service2={sec3Service2}
            sec3ServiceSp={sec3ServiceSp}
            sec3Serviceimg={sec3Serviceimg}
            sec3Servicetext={sec3Servicetext}
            sec3LogoGroup={sec3LogoGroup}
          />
          <Set4
            sec4Engtitle={sec4Engtitle}
            sec4Jptitle={sec4Jptitle}
            sec4LogoGroup={sec4LogoGroup}
          />
          <Set5 />
        </div>
      </Layout>
    );
  }

  const toggleVisibility = () => {
    const setIsVisible = '';
    return (
      window.scrollY > 500
        ? setIsVisible(true)
        : setIsVisible(false)
    );
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
  }
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
