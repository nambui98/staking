import React, { ReactNode, useEffect, useRef, useState } from 'react'
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

type Props = { indexActive: number, setIndexActive: Function }

const SwiperDynamic = ({ indexActive, setIndexActive }: Props) => {
    // const [indexActive, setIndexActive] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 700 })
    // const [isMobile, setIsMobile] = useState<boolean>(false);
    const refSlide1 = useRef<any>(null);
    const refSlide2 = useRef<any>(null);
    const refSlide3 = useRef<any>(null);
    const refSlide4 = useRef<any>(null);
    const refSlide5 = useRef<any>(null);

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '<img src="' + data[index]?.icon + '"/>' + "</span>";
        },
    };
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
            linkMB: "/videos/runMobile.mkv",
            type: typeSlide.video,
            ref: refSlide2,
            icon: "/images/run.svg",
            content: <><h1>Run<span>2</span>Earn</h1>
                <p>Exercising with a friend is a great way to keep
                    you motivated. Let&apos;s jog and run and earn tokens.</p></>
        },
        {
            link: "/videos/cycle.mp4",
            linkMB: "/videos/cycleMobile.mkv",
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
        <Swiper
            autoplay={{
                "delay": data[indexActive]?.type === typeSlide.img ? 3000 : 6000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            pagination={pagination}
            modules={[Pagination, Autoplay, EffectFade]}
            onSlideChange={(e) => {
                data[e.previousIndex].ref?.current?.pause();
                data[e.activeIndex].ref?.current?.play();
                setTimeout(() => { data[e.previousIndex].ref?.current?.load(); }, 500)
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