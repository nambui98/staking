import { Stack, styled, useMediaQuery } from "@mui/material"
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
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  width: '100vw',
  height: '100vh',
})