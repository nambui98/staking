import { Box, Stack, Typography } from "@mui/material"
import { useState } from "react"

const data = {
  image: 'assets/shoes/shoesItem.png',
  title: '#Daily12420',
  price: '4620',
  category: 'Daily',
  tag: 'Adidas'
}

interface IProps {
  handleToggleDrawer: (status: boolean) => void;
  handleSetProductDetail: any
}

const ListProduct: React.FC<IProps> = ({handleToggleDrawer, handleSetProductDetail}) => {
  return (
    <Stack sx={listItemBox}>
      {Array.apply(null, Array(10))?.map((item: any, index: number) => (
        <Stack sx={shoesItem} key={index} onClick={() => handleToggleDrawer(true)}>
          <Stack sx={boxImage}>
            <Typography sx={tag}>{data.tag}</Typography>
            <Typography sx={type}>{data.category}</Typography>
            <img src={data.image} />
          </Stack>
          <Typography sx={titleItem}>{data.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}><img src={'assets/logo/bnbCoin.svg'} /><Typography sx={priceItem}>{data.price}</Typography></Box>
        </Stack>
      ))}
    </Stack>
  )
}

export default ListProduct;

const listItemBox = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: 'calc(100% - 256px - 32px)',
  flexDirection: 'row',
}
const shoesItem = {
  cursor: 'pointer',
  transition: '.4s',
  borderRadius: '12px',
  '@media(min-width: 1280px)': {
    width: 'calc(20% - 16px)',
    marginBottom: '32px'
  },
  '&:hover': {
    boxShadow: 'rgb(0 0 0 / 16%) 0px 2px 24px',
  }
}
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
const tag = {
  position: 'absolute',
  top: '7px',
  right: '7px',
  padding: '4px 12px',
  borderRadius: '16px',
  background: '#31373E',
  fontSize: '14px',
  color: '#ffffff'
}
const type = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '4px 12px',
  borderRadius: '0px 12px 0px 11px',
  background: '#55C8FC',
  color: '#ffffff'
}
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