import type { NextPage } from 'next'
import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";

import styles from '../styles/Home.module.scss'
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/bundle";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { toast } from 'react-toastify';
enum typeSlide {
  img = 1,
  video = 2,
}
const Home: NextPage = () => {
  const [indexActive, setIndexActive] = useState(0);
  const refListSlide = useRef(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      const idx = index + 1;
      return '<span class="' + className + '">' + '<img src="/icon' + idx + '.png"/>' + "</span>";
    },
  };
  const dataSlide = [
    {
      link: "/walking.mp4",
      type: typeSlide.video
    },
    {
      link: "/item4.mp4",
      type: typeSlide.video
    },
    {
      link: "/cycle.mp4",
      type: typeSlide.video
    },
    {
      link: "/item2.mp4",
      type: typeSlide.video
    },
    {
      link: "/item5.jpg",
      type: typeSlide.img
    }
  ]
  console.log(indexActive);


  return (
    <div className={styles.container}>
      <Head>
        <title>Befitter</title>
        <meta name="description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
  can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
  lifestyles and bring them to the Web3 world." />
        <meta property="og:title" content="Befitter is a Web3 lifestyle app with Social-Fi and Game-Fi elements" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.befitter.io/" />
        <meta property="og:image" content="https://befitter.io/item.png" />
        <meta property="og:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
  can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
  lifestyles and bring them to the Web3 world." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Befitter is a Web3 lifestyle app with Social-Fi and Game-Fi elements" />
        <meta property="twitter:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
  can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
  lifestyles and bring them to the Web3 world." />
        <meta property="twitter:image" content="https://befitter.io/item.png" />
        <link rel="icon" href="/favicon.png" />

        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.wrapperContent} >
        <div style={{ transition: ".7s all cubic-bezier(.88,-0.68,.17,1.48)", transform: `translateY(-${indexActive * 20}%)` }}>

          <div className={styles.content}>

            <h1>Walk2Earn</h1>
            <p>Starting your day with a short walk can
              offer a number of health benefits & tokens.</p>
          </div>
          <div className={styles.content}>

            <h1>Run2Earn</h1>
            <p>Exercising with a friend is a great way to keep
              you motivated. Let&apos;s jog and run and earn tokens.</p>
          </div>
          <div className={styles.content}>

            <h1>Cycle2Earn</h1>
            <p>Regular cycling provides numerous health benefits
              as your heart, blood vessels and lungs all get a workout.</p>
          </div>
          <div className={styles.content}>

            <h1>Draw2Earn</h1>
            <p>Move and draw amazing artworks on the map.
              Then you may sell it on the market to get tokens.</p>
          </div>
          <div className={styles.content}>

            <h1>Sleep2Earn</h1>
            <p>End your daily routine by a deep sleep.
              We pay you to sleep scientifically.</p>
          </div>
        </div>
      </div>
      <img src="/logomain.png" className={styles.logo} alt="" />
      <button className={styles.button} onClick={() => {
        toast('COMING SOON!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }}>PITCH DECK</button>
      <Swiper
        autoplay={{
          "delay": 4500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={pagination}
        modules={[Pagination, Autoplay, EffectFade]}
        onSlideChange={(e) => {
          setIndexActive(e.activeIndex)
        }}
        className="mySwiper"
      >
        <div ref={refListSlide}>
          {
            dataSlide.map((slide, index) => slide.type === typeSlide.video ? <SwiperSlide >
              <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute'
              >
                <source src={slide.link} type='video/mp4; codecs="hvc1"' />
                <source src={slide.link} type="video/webm" />
              </video>
            </SwiperSlide> : <SwiperSlide >
              <img src={slide.link} className='absolute' alt="" />
            </SwiperSlide>)
          }
        </div>
      </Swiper>
    </div>
  )
}

export default Home
