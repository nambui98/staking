import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { alertTitleClasses, Stack, SvgIcon, Typography } from '@mui/material';
import { useState } from 'react';
import { PRODUCT_DETAIL_ICON } from '../../../constants/marketplace';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';

interface IProps {
  drawerStatus: boolean;
  handleToggleDrawer: (status: boolean) => void;
  dataProduct: any;
}

const data = {
  link3d: 'https://cdn.befitter.io/Daily/',
  title: '#Daily12420',
  type: 'Daily',
  tag: 'Adidas'
}

export const ProductDetail: React.FC<IProps> = ({ drawerStatus, handleToggleDrawer }) => {

  return (
    <Drawer
      anchor={'right'}
      open={drawerStatus}
      onClose={() => handleToggleDrawer(false)}
    >
      <Stack sx={boxDetail}>
        <Box sx={closeIcon} onClick={() => handleToggleDrawer(false)}><img src={PRODUCT_DETAIL_ICON.CLOSE} /></Box>
        <Box sx={shoe3d}>
          <iframe src={data.link3d} />
          <Stack sx={boxType}>
            <Typography sx={type}>{data.type}</Typography>
            <Typography sx={tag}>{data.tag}</Typography>
          </Stack>
        </Box>
        <Typography sx={title}>{data.title}</Typography>
        <Stack sx={parameters}>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.LEVEL1_5} /> <Typography><span>Level</span>2</Typography></Box>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.SHIELDGREEN} /> <Typography><span>Condition</span>89%</Typography></Box>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.SHOEMINT3} /> <Typography><span>Shoe Mint</span>3/7</Typography></Box>
        </Stack>
        <Stack sx={stats}>
          <Typography sx={statsTitle}>Item stats</Typography>
          <Stack>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.ENERGY} /> <Typography sx={statsItemTitle}>Energy</Typography></Box> <Typography sx={statsItemText}>3</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.DURABILITY} /> <Typography sx={statsItemTitle}>Durability</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>30</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.SUPPORT} /> <Typography sx={statsItemTitle}>Support</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>3</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.LUCK} /> <Typography sx={statsItemTitle}>Luck</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>15</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.RANGE} /> <Typography sx={statsItemTitle}>Range</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>3</Typography></Box>
          </Stack>
        </Stack>
        <MarketplaceButton title="Proceed to payment" price={4620} handleOnClick={() => null} customStyle={{margin: 'auto 24px 16px'}} />
      </Stack>
    </Drawer>
  )
}

const boxDetail = {
  minWidth: '476px',
  position: 'relative',
  height: '100%',
}
const shoe3d = {
  position: 'relative',
  '& iframe': {
    height: '336px',
    width: '100%'
  }
}
const closeIcon = {
  position: 'absolute',
  top: '18px',
  right: '18px',
  color: '#5A6178',
  cursor: 'pointer',
  zIndex: '2'
}
const boxType = {
  position: 'absolute',
  bottom: '16px',
  left: '16px',
  flexDirection: 'row',
  alignItems: 'center',
}
const type = {
  padding: '4px 12px',
  backgroundColor: '#55C8FC',
  borderRadius: '16px',
  fontWeight: '600',
  color: '#ffffff',
  marginRight: '8px'
}
const tag = {
  padding: '4px 12px',
  backgroundColor: '#31373E',
  borderRadius: '16px',
  fontWeight: '600',
  color: '#ffffff',
  marginRight: '8px'
}
const title = {
  color: '#31373E',
  fontSize: '24px',
  fontWeight: '700',
  margin: '16px 24px'
}
const parameters = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#ffe2d34d',
  padding: '8px 24px',
  marginBottom: '16px',
}
const parametersItem = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& span': {
    color: '#5A6178',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '3px',
  },
  '& p': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '8px',
    fontSize: '16px',
    color: '#31373E',
    fontWeight: '700'
  }
}
const stats = {
  margin: '0 24px 8px',
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #E9EAEF'
}
const statsTitle = {
  fontSize: '16px',
  fontWeight: '600',
  marginBottom: '28px',
}
const statsItem = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px'
}
const statsItemText = {
  fontSize: '16px',
  color: '#5A6178',
  fontWeight: '500'
}
const statsItemTitle = {
  marginLeft: '8px',  
  minWidth: '101px',  
  ...statsItemText
}
const process = {
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  height: '4px',
  width: '137px',
  borderRadius: '2px'
}
const flex = {
  display: 'flex',
  alignItems: 'center',
}
