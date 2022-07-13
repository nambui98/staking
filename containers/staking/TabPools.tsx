import { Box, Container, InputAdornment, InputBase, Stack, styled, Tab, Table, TableBody, TableCell, TableRow, Tabs, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { PopupMessage } from "../../components/pageComponent/claim/PopupMessage";
import { STAKING_ICON } from "../../constants/staking"
import { TEXT_STYLE } from "../../styles/common/textStyles"

function createData(status: string, reward: string, earned: string, tokenRemaining: string, lockUpTime: string, delayTime: string, total: string) {
  return { status, reward, earned, tokenRemaining, lockUpTime, delayTime, total };
}

export const TabPools = () => {
  const [tabCurrent, setTabCurrent] = useState<number>(1)
  const [statusPopup, setStatusPopup] = useState<any>({
    status: false,
    content: <Box></Box>
  });

  const rows = [
    { name: 'FIU - FITTER Pass', data: createData('-', '-', '-', '-', '-', '-', '-') },
    { name: 'FIU - Shared Pool', data: createData('-', '-', '-', '-', '-', '-', '-') }
  ];

  const handleShowPopupPass = () => {
    setStatusPopup({
      status: true,
      content: <Box>
        <Typography><b>FITTER Pass:</b></Typography>
        <Typography>1.Stake FIU, minimum 1000 FIU.</Typography>
        <Typography>2.Earn FITTER Pass</Typography>
        <Typography>3.You have to stake at least 24h to receive Pass. </Typography>
        <Typography>4.For every 1000 FIU staked per 480h, you earn one FITTER Pass.</Typography>
        <Typography>For every 20.000 FIU staked per 24h, you earn one FITTER Pass. </Typography>
        <Typography>For every 40.000 FIU staked per 24h, you earn 2 FITTER Passes,....</Typography>
        <Typography>The more token you stake, the more reward you will receive. </Typography>
        <Typography>5.Specially, in the first 72 hours from this campaign begin, you have chance to get double the reward.</Typography>
        <Typography>Ex: With 20.000 FIU staked per 24h, you earn 2 FITTER Pass.</Typography>
        <Typography>5.Staking does have a short cooldown period of 14 days, meaning once you want to exit, you have to wait 14 days.</Typography>
      </Box>
    })
  }

  const handleShowPopupShared = () => {
    setStatusPopup({
      status: true,
      content: <Box>
        <Typography><b>Shared Pool: </b></Typography>
        <Typography>1.Stake FIU, minimum 1000 FIU.</Typography>
        <Typography>2.Earn FIU</Typography>
        <Typography>3.High-yield in return, take place in 1 month</Typography>
        <Typography>4.Unlimited number of stakers and token</Typography>
        <Typography>5.In the first 3 days from this campaign begin, you have chance to get double the reward.</Typography>
        <Typography>6.Staking does have a short cooldown period of 14 days, meaning once you want to exit, you have to wait 14 days.</Typography>
      </Box>
    })
  }

  return (
    <Wrap>
      <Container sx={{ maxWidth: 1120 }}>
        <Top>
          <BoxTabs value={tabCurrent}>
            <TabItem className={tabCurrent === 0 ? "Mui-selected" : ''} label="All pools" onClick={() => setTabCurrent(0)} />
            <TabItem className={tabCurrent === 1 ? "Mui-selected" : ''} label="My pool" onClick={() => setTabCurrent(1)} />
          </BoxTabs>
          <Search placeholder="Search pool..." InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <img src={STAKING_ICON.search} />
              </InputAdornment>
            ),
          }}
          />
        </Top>
        <Body>
          <Box sx={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: '100%' }} aria-label="simple table">
              <TableBody sx={{ width: '100%' }}>
                {rows.map((item, index) => (
                  <BoxTr
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}
                  >
                    {/* <TitleItem key={index}><img src={STAKING_ICON.fiu} /> {item.name} <span onClick={index === 0 ? handleShowPopupPass : handleShowPopupShared}>How it works?</span></TitleItem>
                    <ComingSoon sx={{
                      top: index === 0 ? '0 !important' : 4
                    }}>coming soon</ComingSoon>
                    <Item sx={{ paddingLeft: '8px', borderRadiusTopleft: '12px' }} align="left">Status <Box>{item.data.status}</Box></Item>
                    <Item align="left">Reward <Box>{item.data.reward}</Box></Item>
                    <Item align="left">Earned <Box>{item.data.earned}</Box></Item>
                    <Item align="left">Token remaining <Box>{item.data.tokenRemaining}</Box></Item>
                    <Item align="left">Lock-up time <Box>{item.data.lockUpTime}</Box></Item>
                    <Item align="left">Withdrawal delay time <Box>{item.data.delayTime}</Box></Item>
                    <Item align="left">Total staked <Box>{item.data.total}</Box></Item> */}
                  </BoxTr>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Body>
      </Container>
      <PopupMessage title="How it works?" status={statusPopup.status} titleButton="I understand" handleToggleStatus={() => setStatusPopup({ ...statusPopup, status: false })} sx={customWidthPopup}
        handleClickButton={() => setStatusPopup({ ...statusPopup, status: false })} message={<BodyPopup>
          {statusPopup.content}
        </BodyPopup>} />
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const customWidthPopup = {
  '@media (min-width: 650px)': {
    width: '541px !important',
    paddingTop: '8px'
  }
}
const BodyPopup = styled(Box)({
  '& p': {
    marginBottom: 10,
    textAlign: 'left',
  },
  '& b': {
    color: '#31373E'
  }
})
const ComingSoon = styled(Box)({
  position: 'absolute',
  top: 4,
  right: 0,
  padding: 8,
  background: '#FFC83A',
  textTransform: 'uppercase',
  ...TEXT_STYLE(12, 600, '#31373E')
})
const Top = styled(Box)({
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
  '@media (min-width: 768px)': {
    display: 'flex',
  }
})
const Search = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    padding: '8px 16px',
    background: '#E9EAEF',
    borderRadius: 8,
    width: 320,
    height: 40
  },
  '& input': {
    padding: 0,
    ...TEXT_STYLE(14, 500, '#A7ACB8')
  },
  '& fieldset': { display: 'none' },
  '@media (max-width: 767px)': {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      width: '100%',
      height: 35
    },
  }
})
const TabItem = styled(Tab)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  padding: '8px 16px',
  borderRadius: 18,
  '&.Mui-selected': {
    background: '#FFE2D3',
    color: '#FF6D24',
  }
})
const BoxTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '@media (max-width: 767px)': {
    marginBottom: 10
  }
})
const Body = styled(Box)({
  padding: 16,
  background: '#F8F9FB',
  borderRadius: 16,
  marginBottom: 24,
  // '& tr': {
  //   background: '#FFFFFF',
  //   padding: 8
  // }
})
const BoxTr = styled(TableRow)({
  background: '#FFFFFF',
})
const Item = styled(TableCell)({
  paddingTop: 35,
  paddingBottom: 16,
  borderBottom: '8px solid transparent',
  ...TEXT_STYLE(12, 500, '#898E9E'),
  textTransform: 'uppercase',
  '& div': {
    marginTop: 8,
    ...TEXT_STYLE(14, 500, '#31373E')
  }
})
const TitleItem = styled(Box)({
  position: 'absolute',
  top: 0,
  margin: '8px 0 0 8px',
  display: 'flex',
  alignItems: 'center',
  ...TEXT_STYLE(16, 600, '#31373E'),
  '& img': {
    marginRight: 8
  },
  '& span': {
    ...TEXT_STYLE(12, 500, '#55C8FC'),
    marginLeft: 8,
    cursor: 'pointer',
  }
})