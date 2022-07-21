import React, { ReactNode, Suspense, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
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

type Props = { indexActive: number, setIndexActive: Function, data: slide[] }

const SwiperDynamic = ({ indexActive, setIndexActive, data }: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 700 })
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '<img src="' + data[index]?.icon + '"/>' + "</span>";
        },
    };



    return (

        <Swiper
            autoplay={{
                "delay": data[indexActive]?.type === typeSlide.img ? 3000 : 6000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            pagination={pagination}
            modules={[Pagination, Autoplay, EffectFade]}
            onSlideChange={(e) => {
                // data[e.previousIndex].ref?.current?.pause();
                data[e.activeIndex].ref?.current?.play();
                // setTimeout(() => { data[e.previousIndex].ref?.current?.load(); }, 200)
                // setDurationActive(dataSlide[e.activeIndex].ref?.current?.duration * 1000 || 3000)
                setIndexActive(e.activeIndex)
            }}
            className="mySwiper"
        >
            {
                data.map((slide: slide, index: number) => {
                    return slide.type === typeSlide.video ? <SwiperSlide key={index}>
                        <video
                            id={`video${index}`}
                            ref={slide.ref}
                            autoPlay={index === 0}
                            loop
                            muted
                            playsInline
                            className='absolute'
                        >
                            <source src={isMobile ? slide.linkMB || slide.link : slide.link} type='video/mp4; codecs="hvc1"' />
                            <source src={isMobile ? slide.linkMB || slide.link : slide.link} type="video/webm" />
                        </video>
                    </SwiperSlide> : <SwiperSlide key={index}>
                        <img src={isMobile ? slide.linkMB || slide.link : slide.link} className='absolute' alt="" />
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}
export default SwiperDynamic;