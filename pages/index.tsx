import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/Home.module.css'
import { Pagination } from "swiper";
import "swiper/css/bundle";
import 'swiper/css';
import "swiper/css/pagination";
import logoItem1 from "../public/logoitem1.png"
const Home: NextPage = () => {
  const [indexActive, setIndexActive] = useState(0);
  const listIcon = [
    <Image src={logoItem1.src} width={32} height={32} />,
    <Image src={logoItem1.src} width={32} height={32} />,
    <Image src={logoItem1.src} width={32} height={32} />,
    <Image src={logoItem1.src} width={32} height={32} />,
  ]
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
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.wrapperContent} >
        <div style={{ transition: ".5s all", transform: `translateY(-${indexActive * 300}px)` }}>

          <div className={styles.content}>

            <h1>Walk2Earn</h1>
            <p>Starting your day with a short walk can
              offer a number of health benefits & tokens.</p>
          </div>
          <div className={styles.content}>

            <h1>Walk2Earn</h1>
            <p>Starting your day with a short walk can
              offer a number of health benefits & tokens.</p>
          </div>
          <div className={styles.content}>

            <h1>Walk2Earn</h1>
            <p>Starting your day with a short walk can
              offer a number of health benefits & tokens.</p>
          </div>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={(e) => {
          setIndexActive(e.activeIndex)
        }}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className={styles.item} style={{ backgroundImage: "url(/item.png)" }}>

          </div>
          {/* <img src='/item.png' /> */}
        </SwiperSlide>
        <SwiperSlide >
          <div className={styles.item} style={{ backgroundImage: "url(/item.png)" }}>

          </div>
          {/* <img src='/item.png' /> */}
        </SwiperSlide>
        <SwiperSlide >
          <div className={styles.item} style={{ backgroundImage: "url(/item.png)" }}>

          </div>
          {/* <img src='/item.png' /> */}
        </SwiperSlide>
        <SwiperSlide >
          <div className={styles.item} style={{ backgroundImage: "url(/item.png)" }}>

          </div>
          {/* <img src='/item.png' /> */}
        </SwiperSlide>
        <SwiperSlide >
          <div className={styles.item} style={{ backgroundImage: "url(/item.png)" }}>

          </div>
          {/* <img src='/item.png' /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home
