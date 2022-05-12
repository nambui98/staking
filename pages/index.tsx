import type { NextPage } from 'next'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive'
import styles from '../styles/Home.module.scss'
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/bundle";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';
const DynamicSwiper = dynamic(() => import('../components/swiper'), { ssr: false })
enum typeSlide {
  img = 1,
  video = 2,
}
type slide = {
  link: string,
  linkMB?: string,
  type: typeSlide,
  ref?: any,
  icon: string,
  content: ReactNode
}

const Home: NextPage = () => {
  const [indexActive, setIndexActive] = useState(0);
  const refSlide1 = useRef<any>(null);
  const refSlide2 = useRef<any>(null);
  const refSlide3 = useRef<any>(null);
  const refSlide4 = useRef<any>(null);
  const refSlide5 = useRef<any>(null);
  const data = [
    {
      link: "/videos/walking.mp4",
      type: typeSlide.video,
      ref: refSlide1,
      icon: "/images/walk.svg",
      content: <>
        <h1>Walk<span>2</span>Earn</h1>
        <p>Starting your day with a short walk can
          offer a number of health benefits & tokens.</p>
      </>
    },
    {
      link: "/videos/item4.mp4",
      linkMB: "/videos/runMobile.mp4",
      type: typeSlide.video,
      ref: refSlide2,
      icon: "/images/run.svg",
      content: <><h1>Run<span>2</span>Earn</h1>
        <p>Exercising with a friend is a great way to keep
          you motivated. Let&apos;s jog and run and earn tokens.</p></>
    },
    {
      link: "/videos/cycle.mp4",
      linkMB: "/videos/cycleMobile.mp4",
      type: typeSlide.video,
      ref: refSlide3,
      icon: "/images/cycle.svg",
      content: <> <h1>Cycle<span>2</span>Earn</h1>
        <p>Regular cycling provides numerous health benefits
          as your heart, blood vessels and lungs all get a workout.</p></>
    },
    {
      link: "/videos/item2.mp4",
      type: typeSlide.video,
      ref: refSlide4,
      icon: "/images/draw.svg",
      content: <>
        <h1>Draw<span>2</span>Earn</h1>
        <p>Move and draw amazing artworks on the map.
          Then you may sell it on the market to get tokens.</p></>
    },
    {
      link: "/images/item5.jpg",
      linkMB: "/images/sleepMobile.png",
      type: typeSlide.img,
      icon: "/images/sleep.svg",
      content: <><h1>Sleep<span>2</span>Earn</h1>
        <p>End your daily routine by a deep sleep.
          We pay you to sleep scientifically.</p></>
    }
  ]
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
        <meta property="og:image" content="https://befitter.io/images/item.png" />
        <meta property="og:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
  can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
  lifestyles and bring them to the Web3 world." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Befitter is a Web3 lifestyle app with Social-Fi and Game-Fi elements" />
        <meta property="twitter:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
  can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
  lifestyles and bring them to the Web3 world." />
        <meta property="twitter:image" content="https://befitter.io/images/item.png" />
      </Head>
      <div className='mobile'>
        <h1>Phone devices are not supported yet</h1>
      </div>
      <div className={styles.main}>

        <div className={styles.wrapperContent} >
          <div style={{ transition: ".7s all cubic-bezier(.88,-0.68,.17,1.48)", transform: `translateY(-${indexActive * 20}%)` }}>
            {
              data.map((item: slide, index: number) => <div key={index} className={styles.content}>
                {item.content}

              </div>)
            }

          </div>
        </div>
        <img src="/images/logomain.png" className={styles.logo} alt="" />
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
        <DynamicSwiper indexActive={indexActive} setIndexActive={setIndexActive} data={data} />
      </div>
    </div>
  )
}

export default Home
