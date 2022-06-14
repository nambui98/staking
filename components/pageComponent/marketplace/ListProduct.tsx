import { Box, Stack, styled, Typography, TypographyProps } from "@mui/material"
import { useState } from "react"

const data = {
  image: 'assets/shoes/shoesItem.png',
  title: '#Daily12420',
  price: '4620',
  category: 'Daily',
  tag: 'A'
}

interface IProps {
  handleToggleDrawer: (status: boolean) => void;
  handleSetProductDetail: any
}

const ListProduct: React.FC<IProps> = ({handleToggleDrawer, handleSetProductDetail}) => {
  return (
    <Stack sx={listItemBox}>
      {Array.apply(null, Array(10))?.map((item: any, index: number) => (
        <ShoesItem key={index} onClick={() => handleToggleDrawer(true)}>
          <Stack sx={boxImage}>
            <Tag background="linear-gradient(268.2deg, #EC0CB7 0%, #C740D1 100%)">{data.tag}</Tag>
            <Type>{data.category}</Type>
            <img src={data.image} />
          </Stack>
          <Typography sx={titleItem}>{data.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><img src={'assets/logo/bnbCoin.svg'} /><Typography sx={priceItem}>{data.price}</Typography></Box>
        </ShoesItem>
      ))}
    </Stack>
  )
}

export default ListProduct;

const listItemBox = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: 'row',
  '@media (min-width: 768px)': {
    width: 'calc(100% - 256px - 32px)',
  }
}
const ShoesItem = styled(Stack)({
  cursor: 'pointer',
  transition: '.4s',
  borderRadius: '12px',
  width: 'calc(50% - 16px)',
  '@media (min-width: 1024px)': {
    width: 'calc(25% - 16px)'
  },
  '@media(min-width: 1280px)': {
    width: 'calc(20% - 16px)',
    marginBottom: '32px'
  },
})
const boxImage = {
  position: 'relative',
  padding: '24px 20px',
  border: '1px solid #E9EAEF',
  borderRadius: '12px',
  '& img': {
    maxWidth: '175.8px',
    margin: 'auto',
    width: '100%'
  },
}
type TagProp = TypographyProps & {
  background: string
}
const Tag = styled(Typography)((props: TagProp) => ({
  position: 'absolute',
  bottom: '0',
  right: '0',
  background: props.background,
  fontSize: '14px',
  color: '#ffffff',
  textDecoration: 'underline',
  padding: '4px 11px',
  borderRadius: '12px 0px'
}))
const Type = styled(Typography)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '4px 12px',
  borderRadius: '0px 12px 0px 11px',
  background: '#55C8FC',
  color: '#ffffff'
})
const titleItem = {
  margin: '16px 0',
  color: "#31373E",
  fontSize: '18px',
  fontWeight: 700
}
const priceItem = {
  marginLeft: '4px',
  color: '#5A6178',
  fontSize: '16px',
  fontWeight: 600
}