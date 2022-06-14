import { Box, Container, Stack, Typography } from "@mui/material"
import { BANNER } from "../../../constants/marketplace"

export const Banner = () => {
  return (
    <Stack sx={{padding: '0 24px'}}>
      <Container disableGutters sx={container} >
        <Stack sx={bannerBox}>
          <Box><img src={BANNER.image} width="100%" /></Box>
          <Typography variant="h1" component="h1" sx={title}>{BANNER.titleTop}<br/>{BANNER.titleBot}</Typography>
        </Stack>
      </Container>
    </Stack>
  )
}

const container = {
  maxWidth: { xl: 1920 - 240 },
  marginTop: '25px'
} 
const bannerBox = {
  position: 'relative',
}
const title = {
  position: 'absolute',
  top: 'calc(50% - 12px)',
  left: 40,
  transform: 'translateY(-50%)',
  fontSize: '40px !important',
  fontStyle: 'italic',
  fontFamily: 'Electrofied'
}