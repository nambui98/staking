import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  InputBase,
  Button,
  IconButton,
  Icon,
  Theme,
  useMediaQuery,
} from '@mui/material';
// import AOS from "aos";
// import "aos/dist/aos.css";
import { TEAM } from '../../constants/common';
import { TEXT_STYLE } from '../../styles/common/textStyles';

const data = [
  {
    image: 'assets/ntando.png',
    title: 'Ntando Mahlangu',
    body: 'Ntando Mahlangu is a South African Paralympic athlete. His achievements include 2 gold medals at the 2020 Summer Paralympics, 1 silver medal at the 2016 Summer Paralympics and a two-time medalist at the World Para Athletics Championships.'
  },
  {
    image: 'assets/femita.png',
    title: 'Femita Ayanbeku',
    body: `Femita Ayanbeku is American Paralympic athlete. Her achievements include 1 gold medal and 1 bronze medal at the 2016 Paralympic Games and 1 bronze medal at the World Para Athletics Championships.`
  }
]

const Ambassadors: React.FC<any> = ({ sxProps }) => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <Container sx={{
      ...sxProps, mb: { xs: '70px', sm: '0px' }, position: 'relative',
      '@media (min-width: 768px)': {
        marginBottom: '120px'
      }
    }}>
      {!isMobile && <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
        <Box data-aos-offset="2400"
          data-aos-duration="1500" data-aos="zoom-out-right" sx={{ bottom: '0px', left: '0px', opacity: '0.2 !important' }}>
          <img width={"100%"} src={`assets/backgrounds/boy.png`} style={{ objectFit: "cover", maxWidth: '370px' }} alt="" />
        </Box>
        <Box data-aos-offset="2400"
          data-aos-duration="1500" data-aos="zoom-in" sx={{ position: 'absolute', top: '-100px', left: '0', width: '100%', height: '100%', opacity: '0.2 !important' }}>
          <img width={"100%"} src={`assets/backgrounds/road.png`} style={{ objectFit: "cover" }} alt="" />
        </Box>
        <Box data-aos-offset="2400"
          data-aos-duration="1500" data-aos="zoom-out-left" sx={{ position: 'absolute', bottom: '0px', right: '0px', opacity: '0.2 !important' }}>
          <img width={"100%"} src={`assets/backgrounds/girl.png`} style={{ objectFit: "cover", maxWidth: '350px' }} alt="" />
        </Box>
      </Box>}

      <Box display={'flex'} mb={9}
        sx={{
          alignItems: "flex-end",
          justifyContent: { xs: "center", sm: 'center' },
          flexWrap: { xs: "wrap", sm: 'nowrap' },
          '@media (max-width: 991px)': {
            marginBottom: '40px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >

        <Typography
          fontSize={{ xs: 32, sm: 56 }}
          textTransform="uppercase"
          fontFamily='Electrofied'
          fontStyle={'italic'}
          fontWeight={800}
          color="#FF6D24"
          textAlign={'center'}
        >
          Ambassadors
        </Typography>
        <Box sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <Typography
            fontSize={{ xs: 25, sm: 30 }}
            textTransform="uppercase"
            fontFamily='Electrofied'
            fontStyle={'italic'}
            fontWeight={800}
            color="#fff"
            mr={{ xs: 1, sm: 2 }}
            ml={{ xs: 1, sm: 2 }}
          >
            &
          </Typography>
          <Typography
            fontSize={{ xs: 32, sm: 56 }}
            textTransform="uppercase"
            fontFamily='Electrofied'
            fontStyle={'italic'}
            fontWeight={800}
            color="#FF6D24"            
          >
            inspirer
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        position: 'relative',
        '@media (max-width: 767px)': {
          marginLeft: '0 !important',
          width: '100% !important',
        }
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: 'space-between',
          maxWidth: '544px',
          margin: 'auto',
          '@media (max-width: 767px)': {
            flexDirection: 'column',
            maxWidth: '100%',
          }
        }}>
          {data?.map((item, index) => (
            <Box key={index} sx={{
              width: 'calc(50% - 16px)',
              '@media (max-width: 767px)': {
                width: '100%',
                display: 'flex',
                marginBottom: '40px',
                '&:last-of-type': {
                  marginBottom: '0'
                }
              }
            }}>
              <Box sx={{
                '@media (max-width: 767px)': {
                  '& img': {
                    width: '112px',
                    marginRight: '16px'
                  }
                }
              }}><img src={item.image} />
                {isMobile && <Box sx={{
                  backgroundImage: 'radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%)',
                  height: '4px',
                  marginBottom: '9px',
                  width: 'calc(100% - 16px)',
                  marginTop: '2px'
                }}></Box>}</Box>
              <Box>
                <Typography sx={{
                  ...TEXT_STYLE(24, 700, '#fff'),
                  marginTop: '16px',
                  paddingBottom: '4px',
                  '@media (max-width: 767px)': {
                    marginTop: 0,
                    paddingBottom: '8px',
                    ...TEXT_STYLE(16, 700, '#fff'),
                  }
                }}>{item.title}</Typography>
                {!isMobile && <Box sx={{
                  backgroundImage: 'radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%)',
                  height: '4px',
                  marginBottom: '9px'
                }}></Box>}
                <Typography sx={{
                  ...TEXT_STYLE(16, 500, '#E9EAEF'),
                  '@media (max-width: 767px)': {
                    marginTop: 0,
                    ...TEXT_STYLE(12, 500, '#fff'),
                    lineHeight: '18px'
                  }
                }}>{item.body}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container >
  );
};

export default Ambassadors;
