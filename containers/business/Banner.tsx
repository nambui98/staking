import { Box, styled } from "@mui/material"
import { BANNER } from "../../constants/business"

export const Banner: React.FC<any> = ({customStyle}) => {
  return (
    <Wrap sx={{...customStyle}}>
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={'videos/video_banner_business.mp4'}
          type='video/mp4; codecs="hvc1"'
        />
        <source
          src={'videos/video_banner_business.mp4'}
          type="video/webm"
        />
      </video>
    </Wrap>
  )
}

const Wrap = styled(Box)({
  width: '100%',
  
  '& video': {
    width: '100%',
  }
})