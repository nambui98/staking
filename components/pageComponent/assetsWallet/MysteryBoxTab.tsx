import { Backdrop, Box, BoxProps, CircularProgress, Stack, styled, Tooltip, Typography } from "@mui/material"
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { BOX_DETAILS, ICON } from "../../../constants/assetsWallet";
import { useWalletContext } from "../../../contexts/WalletContext"
import { getBoxType, getOwnedBox } from "../../../libs/claim";
import { bftBox } from "../../../libs/contracts";
import { convertWalletAddress } from "../../../libs/utils/utils";
import { TEXT_STYLE } from "../../../styles/common/textStyles";
import { BoxEmpty } from "./BoxEmpty";

interface IProps {
  boxChoose: string
  setBoxChoose: (value: string) => void
  listBoxType: any[]
}

export const MysteryBoxTab: React.FC<IProps> = ({boxChoose, setBoxChoose, listBoxType}) => {
  const { walletAccount, ethersSigner } = useWalletContext();
  const [statusLoading, setStatusLoading] = useState<boolean>(false)

  const tooltipBody = (data: any) => {
    return <BodyTooltip>
      <TooltipItem><Box><img src={ICON.shoeRed} /></Box><Typography>Iconic Shoe</Typography> <Typography>{data.detail.iconic}</Typography></TooltipItem>
      <TooltipItem><Box><img src={ICON.shoeYellow} /></Box><Typography>Rare Shoe</Typography> <Typography>{data.detail.rare}</Typography></TooltipItem>
      <TooltipItem><Box><img src={ICON.shoeGray} /></Box><Typography>Standard Shoe</Typography> <Typography>{data.detail.standard}</Typography></TooltipItem>
    </BodyTooltip>
  }

  return (
    <Wrap sx={listBoxType?.length ? {} : {maxHeight: 'initial !important'}}>
      {listBoxType?.length ? listBoxType?.map((item, index) => (
        <Item active={boxChoose === item.boxId} key={index} onClick={() => setBoxChoose(boxChoose === item.boxId ? '' : item.boxId)} >
          <img src={item.image} />
          <Title>
            <Typography>{item.title}</Typography>
            <Typography>{item.boxId}</Typography>
          </Title>
          <BoxTooltip>
            <Tooltip classes={{popper: 'tooltip--assets'}} title={tooltipBody(item)} arrow placement="top">
              <Star></Star>
            </Tooltip>
          </BoxTooltip>
        </Item>
      )) : <BoxEmpty icon={ICON.box} emptyText={'no box'} />}
      <Backdrop
        sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'transparent' }}
        open={statusLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  color: '#31373E',
  marginTop: 16,
  maxHeight: 288,
  overflow: 'auto',
  '@media (min-width: 768px)': {
    maxHeight: 465,
    minHeight: 222,
    marginTop: 0,
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      background: '#E9EAEF',
      borderRadius: 10
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
      borderRadius: 10
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
    }
  }
})
type itemProps = BoxProps & {
  active: boolean
}
const Item = styled(Box)((props: itemProps) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  borderRadius: 16,
  marginBottom: 8,
  cursor: 'pointer',
  background: props.active ? '#FFE2D3' : 'transparent',
  '&:last-of-type': {
    marginBottom: 0
  },
  '&:hover': {
    background: props.active ? '#FFE2D3' : '#E9EAEF'
  }
}))
const Title = styled(Box)({
  marginLeft: 16,
  '& p:nth-of-type(1)': {
    ...TEXT_STYLE(16, 500),
    marginBottom: 6,
    '@media (min-width: 830px)': {
      minWidth: 172
    }
  },
  '& p:nth-of-type(2)': {
    ...TEXT_STYLE(12, 500),
    color: '#5A6178'
  }
})
const Star = styled(Box)({
  width: 32,
  height: 32,
  backgroundImage: `url(${ICON.starGray})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  '&:hover': {
    backgroundImage: `url(${ICON.starYellow})`,
  }
})
const BoxTooltip = styled(Box)({
  marginLeft: 'auto',
  '@media (min-width: 830px)': {
    marginLeft: 132
  }

})
const BodyTooltip = styled(Box)({

})
const TooltipItem = styled(Box)({
  marginBottom: 8,
  display: 'flex',
  alignItems: 'center',
  '&:last-of-type': {
    marginBottom: 0
  },
  '& p:first-of-type': {
    ...TEXT_STYLE(12, 500, '#ffffff')
  },
  '& p:last-of-type': {
    ...TEXT_STYLE(12, 600, '#ffffff'),
    marginLeft: 'auto',
  },
  '& img': {
    width: 22.5
  },
  '& > div': {
    marginRight: 8,
    width: 24, 
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})