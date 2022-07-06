import { Stack, styled, Typography, useMediaQuery } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import {
  videoSlides,
  BANNER,
  APP,
  CHALLENGE,
  NUMBER,
  WORKS,
} from '../../constants/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { TEXT_STYLE } from "../../styles/common/textStyles";
import CountdownClock from "../../components/sections/CountdownClock";
import CountdownClockNew from "../../components/sections/countdownClockNew";

export const Section1 = () => {
  const isMobile = useMediaQuery('(max-width:700px)');
  const [indexActive, setIndexActive] = useState(0);
  const refSlide1 = useRef<any>(null);
  const refSlide2 = useRef<any>(null);
  const refSlide3 = useRef<any>(null);
  const refSlide4 = useRef<any>(null);
  const refSlide5 = useRef<any>(null);
  const data = videoSlides([
    refSlide1,
    refSlide2,
    refSlide3,
    refSlide4,
    refSlide5,
  ]);

  useEffect(() => {
    refSlide1.current?.load();
    refSlide2.current?.load();
    refSlide3.current?.load();
    refSlide4.current?.load();
    refSlide5.current?.load();
  }, [isMobile]);
  return (
    <Wrap>
      <Swiper
        autoplay={{
          delay: data[indexActive].unplayable ? 3000 : 6000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        onSlideChange={(e) => {
          data[e.activeIndex].ref?.current?.play();
          setIndexActive(e.activeIndex);
        }}
        className="mySwiper"
      >
        {data.map((slide: any, index: number) => {
          return slide.unplayable ? (
            <SwiperSlide key={index}>
              <img
                src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                className="absolute"
                alt=""
              />
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <video
                id={`video${index}`}
                ref={slide.ref}
                autoPlay={index === 0}
                loop
                muted
                playsInline
                className="absolute"
              >
                <source
                  src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                  type='video/mp4; codecs="hvc1"'
                />
                <source
                  src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                  type="video/webm"
                />
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <BoxCountDown>
        <TitleCountDown>IDO IN</TitleCountDown>
        <CountdownClockNew endDate={'2022-07-10T09:00:00.000Z'} />
      </BoxCountDown>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  width: '100vw',
  height: '100vh',
  position: 'relative',
})
const BoxCountDown = styled(Stack)({
  position: 'absolute',
  zIndex: 2,
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  background: 'linear-gradient(90deg, rgba(255, 109, 36, 0) 0%, rgba(255, 109, 36, 0.7) 11.11%, rgba(255, 109, 36, 0) 95.65%)',
  padding: 16,
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1120,
  justifyContent: 'center',
})
const TitleCountDown = styled(Typography)({
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  ...TEXT_STYLE(40, 700),
  fontFamily: 'Electrofied',
  fontStyle: 'italic',
  paddingRight: 14
})