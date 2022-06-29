import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { alertTitleClasses, Stack, styled, SvgIcon, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { MARKETPLACE_ICON, MARKETPLACE_IMAGE, PROPERTIES, STATISTICAL } from '../../../constants/marketplace';
import { MarketplaceButton } from '../../buttons/MarketplaceButton';
import { TEXT_STYLE } from '../../../styles/common/textStyles';


export const ProductDetail = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [currentTab, setCurrentTab] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };
  return (
    <Wrap>
      <PropertiesBox>        
        {PROPERTIES.items?.map((item, index) => (
          <PropertiesItem key={index} isMobile={isMobile}><img src={item.icon} />
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Typography sx={{ ...TEXT_STYLE(16, 600) }}>{item.title}</Typography>
              <Box>{item.chance} <Typography>chance</Typography></Box>
            </Box>
            <Box></Box>
            <TitleBg sx={{color: index === 0 ? '#FF6F61' : index === 1 ? '#FFC83A' : '#A7ACB8'}}>{item.titleBg}</TitleBg>
          </PropertiesItem>
        ))}
      </PropertiesBox>
      <BoxTabs
        value={currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <TabItem value="1" label="Rule introduction" />
        <TabItem value="2" label="Box information" />
      </BoxTabs>
      <TabBody>
        <Typography>Special Offer: With each Mystery Shoe Box purchased in this pool, you will get $12 guaranteed allocation for the beFITTER IDO later.</Typography>
        <Typography>1. Everyone can purchase in this pool.</Typography>
        <Typography>2. One Mystery Box contains one NFT Shoe.</Typography>
        <Typography>3. Purchase limitation: 5 boxes per person.</Typography>
      </TabBody>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const bg = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  opacity: 0.3
}
const TabBody = styled(Box)({
  marginBottom: 20,
  '& p': {
    ...TEXT_STYLE(14, 500),
    color: '#5A6178',
    marginBottom: 20
  }
})
const TabItem = styled(Tab)({
  color: '#A7ACB8',
  paddingBottom: 15,
  ...TEXT_STYLE(16, 600),
  '&.Mui-selected': {
    color: '#FF6D24'
  },
})
const BoxTabs = styled(Tabs)({
  marginBottom: 16,
  borderBottom: '1px solid #E9EAEF',
  '& .MuiTabs-indicator': {
    backgroundColor: '#FF6D24'
  }
})
type PropertiesProps = BoxProps & {
  isMobile: boolean
}
const PropertiesItem = styled(Box)((props: PropertiesProps) => ({
  padding: '8px 5px 16px ',
  textAlign: 'center',
  width: 'calc(33.333% - 8px)',
  position: 'relative',
  '@media (min-width: 768px)': {
    padding: 8,
    marginBottom: 24,
    width: '100%',
    maxWidth: 352,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  '&:first-of-type > div:last-of-type': {
    background: props.isMobile ? 'linear-gradient(180deg, rgba(255, 111, 97, 0) 0%, #FF6F61 73.44%, rgba(255, 111, 97, 0) 100%)' : 'linear-gradient(90deg, rgba(255, 111, 97, 0) 0%, #FF6F61 53.12%, rgba(255, 111, 97, 0) 100%)',
    ...bg
  },
  '&:nth-of-type(2) > div:last-of-type': {
    background: props.isMobile ? 'linear-gradient(180deg, rgba(255, 200, 58, 0) 0%, #FFC83A 71.87%, rgba(255, 200, 58, 0) 100%)' : 'linear-gradient(90deg, rgba(255, 200, 58, 0) 0%, #FFC83A 53.12%, rgba(255, 200, 58, 0) 100%)',
    ...bg
  },
  '&:last-of-type > div:last-of-type': {
    background: props.isMobile ? 'linear-gradient(180deg, rgba(233, 234, 239, 0) 0%, #A7ACB8 70.83%, rgba(233, 234, 239, 0) 100%)' : 'linear-gradient(90deg, rgba(233, 234, 239, 0) 0%, #A7ACB8 53.12%, rgba(233, 234, 239, 0) 100%)',
    ...bg
  },
  '& img': {
    marginBottom: props.isMobile ? 8 : 0,
    marginRight: props.isMobile ? 0 : 16
  },
  '& p:last-of-type': {
  
    
  },
  '& > div div': {
    position: 'absolute',
    right: 81,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    ...TEXT_STYLE(20, 700),
    textAlign: 'center',

    '& p': {
      ...TEXT_STYLE(12, 700)
    }
  }
}))
const PropertiesBox = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 24,
  '@media (min-width: 768px)': {
    marginBottom: 46,
    flexDirection: 'column',
    margin: '124px 0 24px',
  }
})
const TitleBg = styled(Typography)({
  ...TEXT_STYLE(24, 600),
  fontSize: '24px !important',
  transform: 'rotate(-20deg)',
  marginLeft: 'auto',
  opacity: 0.2,
  background: 'initial !important',
  '-webkit-text-fill-color': 'initial !important',
})


