import { Box, Container, InputAdornment, InputBase, Stack, styled, Tab, Table, TableBody, TableCell, TableRow, Tabs, TextField } from "@mui/material"
import { useState } from "react"
import { STAKING_ICON } from "../../constants/staking"
import { TEXT_STYLE } from "../../styles/common/textStyles"

function createData(status: string, reward: string, earned: string, tokenRemaining: string, lockUpTime: string, delayTime: string, total: string) {
  return { status, reward, earned, tokenRemaining, lockUpTime, delayTime, total };
}

export const TabPools = () => {
  const [tabCurrent, setTabCurrent] = useState<string>('1')

  const rows = [
    { name: 'FIU - FITTER Pass', data: createData('-', '-', '-', '-', '-', '-', '-') },
    { name: 'FIU - Shared Pool', data: createData('-', '-', '-', '-', '-', '-', '-') }
  ];

  return (
    <Wrap>
      <Container sx={{ maxWidth: 1120 }}>
        <Top>
          <BoxTabs value={tabCurrent} onChange={(e, value) => setTabCurrent(value)}>
            <TabItem label="All pools" />
            <TabItem label="My pool" />
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
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableBody sx={{ width: '100%'}}>
              {/* <ComingSoon>coming soon</ComingSoon> */}
              {rows.map((item, index) => (
                <>                  
                  <TitleItem key={index}><img src={STAKING_ICON.fiu} /> {item.name}</TitleItem>
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <Item sx={{ paddingLeft: 0 }} align="left">Status <Box>{item.data.status}</Box></Item>
                    <Item align="left">Reward <Box>{item.data.reward}</Box></Item>
                    <Item align="left">Earned <Box>{item.data.earned}</Box></Item>
                    <Item align="left">Token remaining <Box>{item.data.tokenRemaining}</Box></Item>
                    <Item align="left">Lock-up time <Box>{item.data.lockUpTime}</Box></Item>
                    <Item align="left">Withdrawal delay time <Box>{item.data.delayTime}</Box></Item>
                    <Item align="left">Total staked <Box>{item.data.total}</Box></Item>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Body>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const BoxBody = styled(Box)({
  '& tr': {
    display: 'block'
  }
})
const BoxItem = styled(Box)({
  position: 'relative',
})
const ComingSoon = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 8,
  background: '#FFC83A',
  textTransform: 'uppercase',
  ...TEXT_STYLE(12, 600, '#31373E')
})
const Top = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16
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
  '& fieldset': { display: 'none' }
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
  }
})
const Body = styled(Box)({
  padding: '7px 24px 8px',
  background: '#F8F9FB',
  borderRadius: 16,
  marginBottom: 24
})
const Item = styled(TableCell)({
  paddingTop: 0,
  paddingBottom: 16,
  borderBottom: '1px solid #A7ACB8',
  ...TEXT_STYLE(12, 500, '#898E9E'),
  textTransform: 'uppercase',
  '& div': {
    marginTop: 8,
    ...TEXT_STYLE(14, 500, '#31373E')
  }
})
const TitleItem = styled(Box)({
  marginBottom: 9,
  marginTop: 17,
  display: 'flex',
  alignItems: 'center',
  ...TEXT_STYLE(16, 600, '#31373E'),
  '& img': {
    marginRight: 8
  }
})