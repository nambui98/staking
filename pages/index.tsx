import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

import styles from '../styles/Home.module.css'
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/bundle";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import logoItem1 from "../public/logoitem1.png"
import itemImage from "../public/item.png"
const Home: NextPage = () => {
  const [indexActive, setIndexActive] = useState(0);
  // const listIcon = [
  //   <Image key="1" src={logoItem1.src} width={32} height={32} />,
  //   <Image key="1" src={logoItem1.src} width={32} height={32} />,
  //   <Image key="1" src={logoItem1.src} width={32} height={32} />,
  //   <Image key="1" src={logoItem1.src} width={32} height={32} />,
  // ]
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      const idx = index + 1;
      return '<span class="' + className + '">' + '<img src="/icon' + idx + '.png"/>' + "</span>";
    },
  };
  // useEffect(() => {

  // }, [indexActive])

  return (
    <div className={styles.container}>
      <Head>
        <title>Move to earn</title>
        <meta name="description" content="Make by Versehub" />
        <link rel="icon" href="/favicon.png" />

        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.wrapperContent} >
        <div style={{ transition: ".5s all cubic-bezier(.88,-0.68,.17,1.48)", transform: `translateY(-${indexActive * 20}%)` }}>

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

            <h1>Bycle2Earn</h1>
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
      <button className={styles.button}>PITCH DECK</button>
      <Swiper
        autoplay={{
          "delay": 2500,
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
        <SwiperSlide >
          <img src="/item.png" className='absolute' alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="/item2.png" className='absolute' alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="/item.png" className='absolute' alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="/item.png" className='absolute' alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="/item.png" className='absolute' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home
