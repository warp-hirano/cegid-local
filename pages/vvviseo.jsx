import React from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';

import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
import { Layout } from 'components';
import dynamic from 'next/dynamic';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import firstview_pc from '../public/images/viseo-fv.png';
import firstview_sp from '../public/images/viseo-fv-sp.png';
import card1 from '../public/images/card-1.png';
import card2 from '../public/images/card-2.png';
import card3 from '../public/images/card-3.png';
import work_map from '../public/images/world-map.png';
import world_office from '../public/images/world-office.png';
import service_img_1 from '../public/images/service-1.png';
import sp_service_01 from '../public/images/sp-service01.png';
import sp_service_02 from '../public/images/sp-service02.png';
import sp_service_03 from '../public/images/sp-service03.png';
import sp_service_04 from '../public/images/sp-service04.png';
import support1 from '../public/images/support-1.png';
import support2 from '../public/images/support-2.png';
import support3 from '../public/images/support-3.png';
import house_img from '../public/images/bottom_house.png';
import sap_logo from '../public/images/sap-logo.svg';
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

function ViseoPage({ doc, menu, footer, lang, preview }) {
  if (doc && doc.data) {
    useUpdatePreviewRef(preview, doc.id);
    useUpdateToolbarDocs(homepageToolbarDocs(preview.activeRef, doc.lang), [
      doc,
    ]);

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        footer={footer}
        title="WarpJapan For Viseo"
        isPreview={preview.isActive}
      >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        <div className="viseo-wrapper" data-scroll-section>
          <div className='fv-area'>
            <img src={firstview_pc} alt="" className='pc' />
            <img src={firstview_sp} alt="" className='sp' />
          </div>
          <section id='sec01' className="sec-content">
            <div className='sp-wrapper'>
              <div className='title'>
                <h2 className='eng-title'>WHO WE ARE</h2><div className='jp-title'>わたしたちについて</div>
              </div>
              <div className='sub-title'>
                <h3 className=''><span className='sp big-subtitle'>VISEOは、</span><br />デジタル戦略の中核を担い、<br className='sp' />独立系で堅実な会社です。</h3>
              </div>
              <p className='text'>デジタル領域にビジネスの変革をもたらして<br className='pc' />テクノロジー変革やイノベーションを起こします。</p>
              <div className='card-area'>
                <div className='card-item'>
                  <div className='card-top'>
                    <img src={card1} alt="" />
                  </div>
                  <div className='card-bottom'>
                    <p>企業のデジタル化</p>
                  </div>
                </div>
                <div className='card-item'>
                  <div className='card-top'>
                    <img src={card2} alt="" />
                  </div>
                  <div className='card-bottom'>
                    <p>顧客をつなぐ</p>
                  </div>
                </div>
                <div className='card-item'>
                  <div className='card-top'>
                    <img src={card3} alt="" />
                  </div>
                  <div className='card-bottom'>
                    <p>革新を探求</p>
                  </div>
                </div>
              </div>
              <div className='world-work'>
                <div className='map'>
                  <img src={work_map} alt="" />
                </div>
                <div className='work-text'>
                  <p><span>5大陸</span>でのプレゼンス<br /><br />世界中で<span>2500人</span>を超える従業員<br /><br /><span>21年間</span>にわたる絶え間ないダイナミズム</p>
                </div>
              </div>
            </div>
          </section>
          <section id='sec02' className="sec-content">
            <div className='title'>
              <h2 className='eng-title right-title'>VISEO</h2>
            </div>
            <div className='green-back'>
              <div className='green-wrap sp'>
                <div className='lead-text'>
                  <h3>グローバルに展開し、<br className='sp' />最も意欲的な企業に貢献</h3>
                  <p>顧客のニーズに応え、グローバルな展開をサポートするワールドワイドな存在感</p>
                </div>
                <p className='main-text'>シンガポール、マレーシア、セブ、シュラバヤ、<br className='sp' />香港、上海、深セン、東京、<br className='pc' />
                  シドニー、メルボルン、<br className='sp' />ブリスベン、バンガロールに拠点を置き、<br className='pc' />
                  現在<br className='sp' />アジア太平洋地域は<span>9</span>カ国<span>12</span>拠点に及んでいます。
                </p>
              </div>
              <img src={world_office} alt="" />
            </div>
          </section>
          <section id='sec03' className="sec-content">
            <div className='wrap'>
              <div className='sp-wrapper'>
                <div className='title'>
                  <h2 className='eng-title'>OUR SERVICE</h2><div className='jp-title'>わたしたちのサービス</div>
                </div>
                <h3 className='blue-text'>グローバルな専門知識 <br className='sp' />アプリケーションサービス</h3>
                <div className='img-area pc'>
                  <img src={service_img_1} alt="" />
                </div>
                <div className='service-img sp'>
                  <div className='service-container'>
                    <img src={sp_service_01} alt="" />
                    <p className='service-name'>ビジネス<br />アプリケーション</p>
                  </div>
                  <div className='service-container'>
                    <img src={sp_service_02} alt="" />
                    <p className='service-name'>インテリジェントERP &<br />コア・プラットフォーム</p>
                  </div>
                  <div className='service-container'>
                    <img src={sp_service_03} alt="" />
                    <p className='service-name'>データ &<br />アナリティクス</p>
                  </div>
                  <div className='service-container'>
                    <img src={sp_service_04} alt="" />
                    <p className='service-name'>デザイン & 開発</p>
                  </div>
                </div>
                <h3 className='blue-text'>エンドトゥーエンドサポート</h3>
                <div className='support-area pc'>
                  <div className='support-item'>
                    <div className='name'>構想</div>
                    <img src={support1} alt='' />
                    <p>アドバイザー<br />アイデア<br />構築</p>
                  </div>
                  <div className='support-item'>
                    <div className='name'>創る</div>
                    <img src={support2} alt='' />
                    <p>デザイン<br />開発<br />実装<br />統合化</p>
                  </div>
                  <div className='support-item'>
                    <div className='name'>実施</div>
                    <img src={support3} alt='' />
                    <p>デプロイメント<br />変更管理<br />保守・モニタリング</p>
                  </div>
                </div>
                <div className='support-img sp'>
                  <div className='support-container'>
                    <img src={support1} alt="" />
                    <div className='support-text'>
                      <h3>構想</h3>
                      <p>アドバイザリー、アイデア、構築</p>
                    </div>
                  </div>
                  <div className='support-container'>
                    <img src={support2} alt="" />
                    <div className='support-text'>
                      <h3>創る</h3>
                      <p>デザイン、開発、実装、統合化</p>
                    </div>
                  </div>
                  <div className='support-container'>
                    <img src={support3} alt="" />
                    <div className='support-text'>
                      <h3>実施</h3>
                      <p>デプロイメント、変更管理、<br />保守・モニタリング</p>
                    </div>
                  </div>
                </div>
                <h3 className='blue-text'>小売業のデジタル変革をリード</h3>
                <p className='main-text'>
                  全世界で500人以上のコンサルタントが、<br />ユニファイド・コマース戦略を実現し、小売の未来を<br className="sp" />デザイン
                </p>
                <div className='support-card-area'>
                  <div className='support-card'>
                    <p className='card-title'>顧客体験</p>
                    <div className='img-box'>
                      <img src='' alt='' />
                      <img src='' alt='' />
                      <img src='' alt='' />
                    </div>
                  </div>
                  <div className='support-card'>
                    <p className='card-title'>小売Eコマース</p>
                    <div className='img-box'>
                      <img src='' alt='' />
                      <img src='' alt='' />
                      <img src='' alt='' />
                    </div>
                  </div>
                  <div className='support-card'>
                    <p className='card-title'>サプライチェーンDOM</p>
                    <div className='img-box'>
                      <img src='' alt='' />
                      <img src='' alt='' />
                      <img src='' alt='' />
                    </div>
                  </div>
                  <div className='support-card'>
                    <p className='card-title'>IT・データ統合</p>
                    <div className='img-box'>
                      <img src='' alt='' />
                      <img src='' alt='' />
                      <img src='' alt='' />
                    </div>
                  </div>
                  <div className='support-card'>
                    <p className='card-title'>ERP</p>
                    <div className='img-box'>
                      <img src='' alt='' />
                      <img src='' alt='' />
                      <img src='' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='sec04' className="sec-content">
            <div className='sp-wrapper'>
              <div className='title'>
                <h2 className='eng-title'>OUR PARTNERS</h2><div className='jp-title'>わたしたちのパートナー</div>
              </div>
            </div>
            <div className='logo-wrap'>
              <div className='logo-list'>
                <img src={sap_logo} alt="" />
                <img src={microsoft} alt="" />
                <img src={amazon} alt="" />
                <img src={azure} alt="" />
                <img src={shopify} alt="" />
                <img src={google} alt="" />
                <img src={fluent} alt="" />
                <img src={cegid} alt="" />
                <img src={boomi} alt="" />
                <img src={naplan} alt="" />
                <img src={mulesoft} alt="" />
                <img src={sf} alt="" />
              </div>
            </div>
          </section>
          <section id='sec05' className="sec-content">
            <div className='contact-content'>
              <div className='contact-area'>
                <img src={house_img} alt="" />
                <div className='contact-text'>
                  <h2>CONTACT US</h2>
                  <a href=''>お問い合わせはこちら</a>
                </div>
              </div>
              <div className='contact-btn-area'>
                <div className='contact-btn'>
                  <a href=''>Warp Japan</a>
                </div>
                <div className='contact-btn'>
                  <a href=''>VISEO</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
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
      'aboutpage',
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
