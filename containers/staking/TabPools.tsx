import { Box, Container, InputAdornment, InputBase, Stack, styled, Tab, Tabs, TextField } from "@mui/material"
import { useState } from "react"
import { STAKING_ICON } from "../../constants/staking"

export const TabPools = () => {
  const [tabCurrent, setTabCurrent] = useState<string>('1')

  return (
    <Wrap>
      <Container sx={{ maxWidth: 1120 }}>
        <Top>
          <Tabs value={tabCurrent} onChange={(e, value) => setTabCurrent(value)}>
            <Tab label="All pools" />
            <Tab label="My pool" />
          </Tabs>
          <Search placeholder="Search pool..." InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={STAKING_ICON.search} />
                </InputAdornment>
              ),
            }}
          />
        </Top>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const Top = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const Search = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    padding: '8px 16px',
    background: '#E9EAEF',
    borderRadius: 8,
  },
  
})