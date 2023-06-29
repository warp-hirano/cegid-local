import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
/* eslint-disable import/first */
gsap.registerPlugin(ScrollTrigger);
/* eslint-disable import/first */
import { Link as Scroll } from 'react-scroll';
import NextLink from 'next/link';

import { Client, manageLocal } from 'utils/prismicHelpers';
/* import useShouldLoadDistortion from 'components/hooks/useShouldLoadDistortion'; */
/* import dynamic from 'next/dynamic'; */

/* eslint-disable import/first */
import { init, send } from 'emailjs-com';

/**
 * Viseo Page component
 */

function ViseoPage({ userID, serviceID, templateID }) {
  const [formNameSei, setNameSei] = useState('');
  const [formNameMei, setNameMei] = useState('');
  const [formCompany, setCompany] = useState('');
  const [formMail, setMail] = useState('');
  const [formPhone, setPhone] = useState('');
  const [formMessage, setMessage] = useState('');
  const sendMail = () => {
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);
      const templateParam = {
        to_name: formNameSei + formNameMei,
        company: formCompany,
        from_email: formMail,
        title: 'WARP Viseoページ お問い合わせ',
        message: formMessage,
      };
      send(serviceID, templateID, templateParam).then(() => {
        window.alert('お問い合わせを送信致しました。');
        setNameSei('');
        setNameMei('');
        setCompany('');
        setMail('');
        setMessage('');
        setPhone('');
      });
    }
  };

  const submitBtnClick = () => {
    const psei = document.contactForm.name_sei.value;
    const pmei = document.contactForm.name_mei.value;
    const pemail = document.contactForm.email.value;
    const pphone = document.contactForm.phone.value;
    const pcompany = document.contactForm.company.value;
    const pcontent = document.contactForm.content.value;
    let isTure = true;
    if (psei) {
      document.getElementById('formNameSei').classList.remove('err');
      isTure = true;
    } else {
      document.getElementById('formNameSei').classList.add('err');
      isTure = false;
    }
    if (pmei) {
      document.getElementById('formNameMei').classList.remove('err');
      isTure = true;
    } else {
      document.getElementById('formNameMei').classList.add('err');
      isTure = false;
    }
    if (pemail) {
      document.getElementById('form_email').classList.remove('err');
      if (!pemail.match(/.+@.+\..+/)) {
        document.getElementById('form_email').classList.add('err');
        document.getElementById('errTxt_email').textContent = 'メールアドレスを入力してください';
        isTure = false;
      } else {
        document.getElementById('form_email').classList.remove('err');
        isTure = true;
      }
    } else {
      document.getElementById('form_email').classList.add('err');
      isTure = false;
    }
    if (pphone) {
      document.getElementById('formPhone').classList.remove('err');
      isTure = true;
    } else {
      document.getElementById('formPhone').classList.add('err');
      isTure = false;
    }
    if (pcompany) {
      document.getElementById('formCompany').classList.remove('err');
      isTure = true;
    } else {
      document.getElementById('formCompany').classList.add('err');
      isTure = false;
    }
    if (pcontent) {
      document.getElementById('form_content').classList.remove('err');
      isTure = true;
    } else {
      document.getElementById('form_content').classList.add('err');
      isTure = false;
    }
    // submit()でフォームの内容を送信
    // document.myform.submit();
    if (isTure) {
      /* function formMessage(message){
        if(message==='OK'){
          alert('お問い合わせありがとうございます\n内容は送信されました');
          document.contactForm.reset();
        }
      } */
      sendMail();
    }
  };
  /* const shouldLoadDistortion = useShouldLoadDistortion(); */

  /* function playVideo(el) {
    const vid = document.getElementById(el);
    vid.play();
    // console.log('playing video');
  } */

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.viseo__section__head',
      start: '100px top',
      toggleClass: { targets: '.viseo__section__head', className: 'scrolled' },
      once: true,
      // markers: true
    });
    const ttlAnimElems = document.getElementsByClassName('anim_svg_line');
    for (let i = 0; i < ttlAnimElems.length; i += 1) {
      gsap.to(ttlAnimElems[i], {
        scrollTrigger: {
          trigger: ttlAnimElems[i],
          start: 'top 50%',
          toggleClass: { targets: ttlAnimElems[i], className: 'act' },
          once: true,
          // markers: true
        },
      });
    }
    const scrlAnimElems = document.getElementsByClassName('scrl_anim');
    for (let i = 0; i < scrlAnimElems.length; i += 1) {
      gsap.to(scrlAnimElems[i], {
        scrollTrigger: {
          trigger: scrlAnimElems[i],
          start: 'top 50%',
          toggleClass: { targets: scrlAnimElems[i], className: 'act' },
          once: true,
          // markers: true
        },
      });
    }
    /* ScrollTrigger.create({
      trigger: '#cegid_video_wrap',
      start: 'top center-=10%',
      once: true,
      // markers: true,
      onEnter: ({ progress, direction, isActive }) => {
        console.log(progress, direction, isActive);
        playVideo('cegid_video');
      },
    });
    ScrollTrigger.create({
      trigger: '#cegid_video_wrap2',
      start: 'top center-=10%',
      once: true,
      // markers: true,
      onEnter: ({ progress, direction, isActive }) => {
        console.log(progress, direction, isActive);
        playVideo('cegid_video2');
      },
    }); */
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Viseo | Warp Japan VISEO</title>
        <meta
          property="og:title"
          content="Shopify | Warp Japan VISEO"
          key="title"
        />
        <meta property="og:image" content="/images/warp-team.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@digital_tokyo" />
        <meta name="twitter:title" content="Shopify | Warp Japan VISEO" />
        <link rel="preconnect" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://warp-kakigori.prismic.io" />
        <link
          rel="preload"
          href="https://use.typekit.net/cqb8zcm.css"
          as="style"
        />
        <link rel="stylesheet" href="https://use.typekit.net/zby4zve.css" />
      </Head>
      <div className="viseo__body">
        <header className="viseo__header">
          <div className="viseo__wrapper">
            <h1 className="cegid__header__h1">
              <NextLink href="/">
                <img src="/images/cegid/logo.svg" alt="warpjapan viseo" />
              </NextLink>
            </h1>
            <Scroll to="contact" smooth className="viseo__header__btn font_outfit">
              <span>Contact Us</span>
              <svg width="33px" x="0px" y="0px" viewBox="0 0 33.8 8.7" xmlSpace="preserve"><polygon className="st0" points="29.4,0 28.7,0.7 31.8,3.9 0,3.9 0,4.9 31.8,4.9 28.7,8 29.4,8.7 33.8,4.4 " /></svg>
            </Scroll>
          </div>
        </header>
        <main className="viseo__main">
          <section className="viseo__section viseo__section__head scrl_anim">
            <div className="viseo__section__logo-wrap">
              <img src="/images/viseo/viseo_logo.png" alt="warpjapan viseo" />
            </div>
            <p className="viseo__section__title__p anim_obj03">
              Warp JapanはVISEO
              <br className="sp" />
              グループの一員です
            </p>
            <div className="viseo__section__head__img anim_obj04">
              <div className="viseo__section__head__img__wrap">
                <img src="/images/viseo/fv_img.png" className="viseo__section__head__img__phone" alt="firstview" />
              </div>
            </div>
            <div className="viseo__section__head__business anim_obj03">
              <p className="viseo__section__head__p anim_obj03">
                Warp Japan VISEOは、
                <br />
                テクノロジーを使ってあなたの
                <br className="sp" />
                ビジネスを革新します
              </p>
              <div className="business__wrap anim_obj03">
                <div className="business__item">
                  <h2 className="font_mont">Positive</h2>
                  <p>私たちは、環境、クライアント、従業員、経済、そして社会全体に前向きな影響を与えたいと考えています。</p>
                </div>
                <div className="business__item">
                  <h2 className="font_mont">Digital</h2>
                  <p>
                    クラウドファーストの時代に、お客様にとってビジネス上重要なデジタル変革プロジェクトを提供することで、それを実現します。
                    デジタル領域にビジネスの変革をもたらしてテクノロジー変革やイノベーションを起こします。
                  </p>
                </div>
                <div className="business__item">
                  <h2 className="font_mont">Makers</h2>
                  <p>
                    常に「クリエイター」として行動し、世界中で最高水準のデリバリーモデルに基づいて活動する
                    最高の才能を動員することを誇りに思っています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="ourServices" className="viseo__section viseo__section__whatwedo viseo__section__whatwedo__01">
            <div className="viseo__wrapper">
              <h2 className="font_outfit scrl_anim">
                <span className="main anim_obj01">
                  <div id="ourServices" className="viseo__section">
                    <h2 className="font_outfit scrl_anim">
                      <span className="main anim_obj01 font_mont">A global presence</span>
                    </h2>
                    <div className="anim_obj02">
                      <p className="bold">
                        顧客のニーズに応え、グローバルな展開をサポートするワールドワイドな存在感
                      </p>
                      <p className="sub">
                        シンガポール、マレーシア、セブ、シュラバヤ、香港、上海、深セン、東京、
                        <br className="pc" />
                        シドニー、メルボルン、ブリスベン、バンガロールに拠点を置き、
                        <br className="pc" />
                        現在アジア太平洋地域は9カ国12拠点に及んでいます。
                      </p>
                    </div>
                    <div className="world-wrap">
                      <img className="world-map pc" src="/images/viseo/world-map-pc.svg" alt="cegid world map" />
                      <img className="world-map sp" src="/images/viseo/world-map-sp.svg" alt="cegid world map" />
                    </div>
                  </div>
                </span>
              </h2>
            </div>
          </section>

          <section id="ourServices" className="sec03 viseo__section viseo__section__whatwedo viseo__section__whatwedo__02">
            <div className="viseo__wrapper">
              <h2 className="font_outfit scrl_anim">
                <span className="main anim_obj01 font_mont">Our expertise</span>
              </h2>
              <div className="scrl_anim">
                <p className="sub anim_obj03">
                  VISEO は、日本国内外でのプロセスから技術的な実装まで、
                  <br className="pc" />
                  あなたのビジネスをサポートするグローバルな存在と専門性を持っています。
                  <br className="pc" />
                  さらに、プロジェクト全体にわたって最後までガイドします。
                </p>
              </div>
              <div className="expertise__wrap scrl_anim">
                <div className="expertise_card anim_obj02">
                  <div className="expertise__card__top__img">
                    <img src="/images/viseo/Icon_SAP.svg" alt="SAP logo" />
                  </div>
                  <div className="expertise__card__title">
                    <h2>SAPソリューションズ</h2>
                  </div>
                  <div className="expertise__card__text">
                    <p>
                      SAPテクノロジーに関する強力な専門知識により、
                      私たちはプリセールスからプロジェクトデリバリーまで、
                      お客様に最高のサービスを提供することをお約束します。
                      そのため、SAPアプリケーションのクラウドへの移行計画、新しいERPの導入、
                      経費処理のデジタル化など、どのような場合でも、当社の専門知識にお任せください。
                    </p>
                  </div>
                </div>
                <div className="expertise_card anim_obj02">
                  <div className="expertise__card__top__img">
                    <img src="/images/viseo/Icon_e-commerce.svg" alt="e-commerce logo" />
                  </div>
                  <div className="expertise__card__title">
                    <h2>Eコマース</h2>
                  </div>
                  <div className="expertise__card__text">
                    <p>
                      Salesforce Commerce Cloud、Shopify Plus、Fluent Commerce、Akeneoなど、
                      最高クラスのソリューションと提携しています。日本、シンガポール、フィリピンなど
                      アジア太平洋地域に拠点を置き、ローカルサポートやリモート開発リソースを
                      リーズナブルなコストでご提案します。
                    </p>
                  </div>
                  <div className="expertise__card__bottom__img">
                    <a href="https://www.warpjapan.com/ja-jp/shopify"><img src="/images/viseo/shopify_puls_logo.svg" alt="shopify puls" /></a>
                    <a href="https://www.warpjapan.com/ja-jp/salesforce"><img src="/images/viseo/sfcc_logo.svg" alt="salesforce commerce cloud" /></a>
                  </div>
                </div>
                <div className="expertise_card anim_obj02">
                  <div className="expertise__card__top__img">
                    <img src="/images/viseo/Icon_Retail.svg" alt="Retail logo" />
                  </div>
                  <div className="expertise__card__title">
                    <h2>
                      リテールプランニング＆
                      <br />
                      サプライチェーン
                    </h2>
                  </div>
                  <div className="expertise__card__text">
                    <p>
                      私たちは、日本国内外の小売業者に合わせた一貫したサービスを提供しています。
                      <br />
                      VISEOは、革新的で目的にかなったビジネスソリューションにより、
                      <br />
                      お客様の潜在能力を引き出すお手伝いをすることで、より多くのことを可能にします。
                    </p>
                  </div>
                  <div className="expertise__card__bottom__img">
                    <img src="/images/viseo/cegid_logo.svg" alt="cegid" />
                  </div>
                </div>
                <div className="expertise_card anim_obj02">
                  <div className="expertise__card__top__img">
                    <img src="/images/viseo/Icon_Digital.svg" alt="Digital" />
                  </div>
                  <div className="expertise__card__title">
                    <h2>DevOpsの取組み</h2>
                  </div>
                  <div className="expertise__card__text">
                    <p>
                      日本国内外のお客様との豊富な取引経験を持つ当社のコンサルタントは、
                      DevOpsアプローチを導入してお客様の資産を設計し、アプリケーションやインフラの監視、
                      機能テストやパフォーマンステストなどの品質プロセスの自動化をセットアップします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="viseo__section viseo__section__more ">
            <div className="viseo__wrapper logo__area scrl_anim">
              <h2 className="scrl_anim">
                <span className="main anim_obj02 font_mont">Partners</span>
              </h2>
              <p className="anim_obj03">デジタルトランスフォーメーションにおけるリーディングベンダーとのパートナーシップ</p>
              <div className="partners__logo__wrap scrl_anim">
                <div className="logo__item anim_obj02">
                  <img src="/images/sap-logo.svg" alt="SAP Gold Partner" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/microsoft.svg" alt="Microsoft Gold Partner" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/amazon.svg" alt="AWS" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/azure.svg" alt="Microsoft Azure" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/shopify.svg" alt="Shopify plus" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/google.svg" alt="Google cloud" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/boomi.svg" alt="boomi" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/naplan.svg" alt="Anaplan" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/mulesoft.svg" alt="Mulesoft" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/sf.svg" alt="salesforce partner" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/fluent.svg" alt="fluentcommerce" />
                </div>
                <div className="logo__item anim_obj02">
                  <img src="/images/cegid.svg" alt="cegid" />
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="viseo__section viseo__section__form scrl_anim">
            <div className="viseo__wrapper">
              <div className="viseo__section__form__head anim_obj01">
                <h2 className="font_mont">Let’s work together</h2>
                <p>
                  あなたのビジネス目標を教えてください。
                  <br className="pc" />
                  一緒に素晴らしいものを作る方法を見ていきます。
                </p>
              </div>
              <div className="viseo__section__form__btns anim_obj02">
                <a href="tel:03-6441-2450" className="viseo__section__form__btn viseo__section__form__btn--tel">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.804" height="27.811" viewBox="0 0 27.804 27.811">
                    <path id="phone" d="M18.042,18.043c-2.752,2.75-5.94,5.382-7.2,4.122-1.8-1.8-2.915-3.374-6.892-.177s-.921,5.326.826,7.071c2.016,2.016,9.533.108,16.962-7.32S31.069,6.792,29.051,4.776c-1.747-1.749-3.868-4.8-7.063-.826s-1.627,5.088.179,6.892C23.423,12.1,20.792,15.291,18.042,18.043Z" transform="translate(-2.001 -2)" fill="#fff" />
                  </svg>
                  <span className="font_outfit">03-6441-2450</span>
                </a>
                <a href="mailto:info@warpjapan.com" className="viseo__section__form__btn viseo__section__form__btn--mail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31.29" height="20.859" viewBox="0 0 31.29 20.859">
                    <path id="mail" d="M2,6.235l13.037,7a3.758,3.758,0,0,0,3.15,0l13.037-7C32.072,5.778,32.875,4,31.316,4H1.906C.346,4,1.149,5.778,2,6.235Zm29.619,3.83c-.965.5-12.841,6.691-13.432,7a2.962,2.962,0,0,1-1.575.346,2.962,2.962,0,0,1-1.575-.346c-.591-.309-12.4-6.5-13.364-7C.993,9.709,1,10.124,1,10.444V23.121A2.116,2.116,0,0,0,2.738,24.86H30.551a2.116,2.116,0,0,0,1.738-1.738V10.446C32.29,10.126,32.3,9.71,31.617,10.065Z" transform="translate(-1 -4)" fill="#fff" />
                  </svg>
                  <span className="font_outfit">info@warpjapan.com</span>
                </a>
              </div>
              <form className="contactForm" name="contactForm">
                <div className="viseo__section__form__row">
                  <div id="formNameSei" className="viseo__section__form__col">
                    <label htmlFor="name_sei" className="viseo__section__form__label">
                      <span>姓</span>
                      <input
                        type="text"
                        id="name_sei"
                        name="name_sei"
                        className="formInput"
                        value={formNameSei}
                        onChange={(e) => setNameSei(e.target.value)}
                      />
                    </label>
                    <p className="errTxt">必須項目です</p>
                  </div>
                  <div id="formNameMei" className="viseo__section__form__col">
                    <label htmlFor="name_mei" className="viseo__section__form__label">
                      <span>名</span>
                      <input
                        type="text"
                        id="name_mei"
                        name="name_mei"
                        className="formInput"
                        value={formNameMei}
                        onChange={(e) => setNameMei(e.target.value)}
                      />
                    </label>
                    <p className="errTxt">必須項目です</p>
                  </div>
                </div>
                <div className="viseo__section__form__row">
                  <div id="form_email" className="viseo__section__form__col">
                    <label htmlFor="email" className="viseo__section__form__label">
                      <span>Eメール</span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="formInput"
                        value={formMail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </label>
                    <p id="errTxt_email" className="errTxt">必須項目です</p>
                  </div>
                  <div id="formCompany" className="viseo__section__form__col">
                    <label htmlFor="company" className="viseo__section__form__label">
                      <span>会社名</span>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="formInput"
                        value={formCompany}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </label>
                    <p className="errTxt">必須項目です</p>
                  </div>
                </div>
                <div className="viseo__section__form__row">
                  <div id="formPhone" className="viseo__section__form__col col1">
                    <label htmlFor="phone" className="viseo__section__form__label">
                      <span>電話番号</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="formInput"
                        value={formPhone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </label>
                    <p className="errTxt">必須項目です</p>
                  </div>
                </div>
                <div className="viseo__section__form__row">
                  <div id="form_content" className="viseo__section__form__col col1">
                    <label htmlFor="content">
                      <span>
                        プロジェクトに関する詳細
                        <br className="sp_show" />
                        （サービス、スコープ、タイムラインなど）
                      </span>
                      <textarea
                        type="text"
                        name="content"
                        id="content"
                        className="formInput"
                        cols="30"
                        rows="3"
                        value={formMessage}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </label>
                    <p className="errTxt">必須項目です</p>
                  </div>
                </div>

                <div className="viseo__section__form__row">
                  <button id="submitBtn" className="submitBtn" onClick={submitBtnClick} type="button">送信</button>
                </div>
              </form>
            </div>
          </section>
          <section className="viseo__section viseo__section__see">
            <div className="scrl_anim">
              <h2 className="font_mont anim_obj02">
                See more
              </h2>
            </div>
            <div className="more__btn__wrap scrl_anim">
              <div className="more_btn anim_obj02">
                <a href="https://warpjapan.com/ja-jp/" className="font_mont">Warp Japan</a>
              </div>
              <div className="more_btn anim_obj02">
                <a href="https://www.viseo.com/en/emea" className="font_mont">VISEO</a>
              </div>
            </div>
          </section>
          <footer className="viseo__footer">
            <div className="viseo__wrapper">
              <div className="viseo__footer__left">
                <h3><img src="/images/shopify/ttl_footer.svg" alt="warpjapan viseo" /></h3>
                <p>私たちは、デジタル領域を中心としたプランニング、デザイン、テクノロジーによって、ビジネスの成長に貢献することをミッションとするデジタルエージェンシーです。</p>
              </div>
              <div className="viseo__footer__right">
                <p>
                  Tokyo office
                  <br />
                  〒106-0043
                  <br />
                  東京都港区麻布永坂町1番地
                  <br />
                  麻布パークサイドビル503室
                  <br />
                  03-6441-2450
                  <br />
                  info@warpjapan.com
                </p>
              </div>
              <p className="viseo__footer__copy font_outfit">
                &copy;2023 Warp japan Viseo
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
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
      'shopifypage',
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

  /* const userID = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID; *//*  一時的/0531 */
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
      /* userID,
      serviceID,
      templateID, *//* 一時的/0531 */
    },
  };
}

export default ViseoPage;
