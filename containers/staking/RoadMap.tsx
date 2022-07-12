import { Box, BoxProps, Container, Stack, styled, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { ROAD_MAP, STAKING_ICON, STAKING_IMAGE } from "../../constants/staking"
import { TEXT_STYLE } from "../../styles/common/textStyles"
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export const RoadMap = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)


  return (
    <Wrap>
      <Container sx={{ maxWidth: 1120 }}>
        <Inner>
          <Title>Road map</Title>
          <NavigationItem ref={navigationPrevRef} className="swiper-button-prev"><img src={STAKING_ICON.arrowLeftGray} /></NavigationItem>
          <NavigationItem ref={navigationNextRef} className="swiper-button-next"><img src={STAKING_ICON.arrowLeftGray} /></NavigationItem>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation, Pagination]}
          >

            {ROAD_MAP.items?.map((item, index) => (
              <SwiperSlide key={index}>
                <Item active={item.status}>
                  <Image><img src={item.status ? item.image : STAKING_IMAGE.boxGray} /></Image>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <Name>{item.title}</Name>
                    <Status active={item.status}>{item.status ? 'LIVE' : 'UPCOMING'}</Status>
                  </Box>
                </Item>
              </SwiperSlide>
            ))}

          </Swiper>
        </Inner>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  '& img': {
    width: '100%',
  }
})
const Inner = styled(Box)({
  position: 'relative',
})
const Title = styled(Typography)({
  ...TEXT_STYLE(24, 500, '#000000'),
  marginBottom: 16
})
type itemProps = BoxProps & {
  active: boolean
}
const Item = styled(Box)((props: itemProps) =>({
  padding: 16,
  borderRadius: 12,
  backgroundColor: props.active ? '#FFE2D3' : '#F8F9FB',
  display: 'flex',
  minHeight: 108
}))
const Image = styled(Box)({
  maxWidth: 80,
  marginRight: 16
})
const Name = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#31373E')
})
const Status = styled(Typography)((props: itemProps) => ({
  padding: '4px 8px',
  ...TEXT_STYLE(14, 500, '#ffffff'),
  backgroundColor: props.active ? '#FF6F61' : '#A7ACB8',
  textTransform: 'uppercase',
  marginTop: 'auto',
  display: 'inline-block'
}))
const NavigationItem = styled(Box)({
  '&:after': {
    display: 'none',
  },
  '&.swiper-button-next': {
    top: '15px !important',
    transform: 'rotate(180deg)'
  },
  '&.swiper-button-prev': {
    top: '15px !important',
    right: '59px !important',
    left: 'unset !important'
  }
})
