import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { alertTitleClasses, Stack, styled, SvgIcon, Typography } from '@mui/material';
import { useState } from 'react';
import { PRODUCT_DETAIL_ICON } from '../../../constants/marketplace';
import { MarketplaceButton } from '../../buttons/MarketplaceButton';

interface IProps {
  drawerStatus: boolean;
  handleToggleDrawer: (status: boolean) => void;
  dataProduct: any;
}

const data = {
  link3d: 'https://cdn.befitter.io/Daily/',
  title: '#Daily12420',
  type: 'Daily',
  tag: 'A'
}

export const ProductDetail: React.FC<IProps> = ({ drawerStatus, handleToggleDrawer }) => {

  return (
    <Drawer
      anchor={'right'}
      open={drawerStatus}
      onClose={() => handleToggleDrawer(false)}
    >
      <BoxDetail>
        <Box sx={closeIcon} onClick={() => handleToggleDrawer(false)}><img src={PRODUCT_DETAIL_ICON.CLOSE} /></Box>
        <Shoe3d>
          <iframe src={data.link3d} />
        </Shoe3d>
        <Boxtitle>
          <Typography sx={title}>{data.title}</Typography>
          <BoxType>
            <Type>{data.type}</Type>
            <Tag>{data.tag}</Tag>
          </BoxType>
        </Boxtitle>

        <Stack sx={parameters}>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.LEVEL1_5} /> <Typography><span>Level</span>2</Typography></Box>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.SHIELDGREEN} /> <Typography><span>Condition</span>89%</Typography></Box>
          <Box sx={parametersItem}><img src={PRODUCT_DETAIL_ICON.SHOEMINT3} /> <Typography><span>Shoe Mint</span>3/7</Typography></Box>
        </Stack>
        <Stats>
          <Typography sx={statsTitle}>Item stats</Typography>
          <Stack>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.ENERGY} /> <Typography sx={statsItemTitle}>Energy</Typography></Box> <Typography sx={statsItemText}>3</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.DURABILITY} /> <Typography sx={statsItemTitle}>Durability</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>30</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.SUPPORT} /> <Typography sx={statsItemTitle}>Support</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>3</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.LUCK} /> <Typography sx={statsItemTitle}>Luck</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>15</Typography></Box>
            <Box sx={statsItem}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.RANGE} /> <Typography sx={statsItemTitle}>Range</Typography><Box sx={process}></Box></Box> <Typography sx={statsItemText}>3</Typography></Box>
          </Stack>
        </Stats>
        <MarketplaceButton title="Proceed to payment" price={4620} handleOnClick={() => null} customStyle={{ margin: 'auto 16px 16px' }} />
      </BoxDetail>
    </Drawer>
  )
}

const BoxDetail = styled(Box)({
  minWidth: '100vw',
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 580px)': {
    minWidth: '476px'
  }
})
const Shoe3d = styled(Box)({
  position: 'relative',
  '& iframe': {
    height: '336px',
    width: '100%',
    border: 0
  }
})
const closeIcon = {
  position: 'absolute',
  top: '18px',
  right: '18px',
  color: '#5A6178',
  cursor: 'pointer',
  zIndex: '2'
}
const BoxType = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
const Type = styled(Typography)({
  padding: '4px 12px',
  backgroundColor: '#55C8FC',
  borderRadius: '16px',
  fontWeight: '600',
  color: '#ffffff',
  marginRight: '8px'
})
const Tag = styled(Typography)({
  padding: '4px 12px',
  background: 'linear-gradient(268.2deg, #EC0CB7 0%, #C740D1 100%)',
  borderRadius: '12px',
  fontWeight: '600',
  color: '#ffffff',
  textDecoration: 'underline',
  fontStyle: 'italic',
})
const Boxtitle = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '16px',
})
const title = {
  color: '#31373E',
  fontSize: '20px',
  fontWeight: '700',
  '@media (min-width: 768px)': {
    fontSize: '24px',
  }
}
const parameters = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#ffe2d34d',
  padding: '8px 16px',
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
const Stats = styled(Stack)({
  margin: '0 16px 40px',
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #E9EAEF',
  '@media (min-width: 768px)': {
    margin: '0 16px 8px',
  }
})
const statsTitle = {
  fontSize: '16px',
  fontWeight: '600',
  marginBottom: '28px',
  '@media (min-width: 768px)': {
    marginBottom: '32px'
  }
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
  minWidth: '95px',
  '@media (min-width: 768px)': {
    minWidth: '101px',
  },
  ...statsItemText
}
const process = {
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  height: '4px',
  width: '145px',
  borderRadius: '2px',
  '@media (min-width: 768px)': {
    width: '185px'
  }
}
const flex = {
  display: 'flex',
  alignItems: 'center',
}
