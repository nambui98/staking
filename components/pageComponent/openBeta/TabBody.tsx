import styled from "@emotion/styled"
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabBody = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrap>
      <Container>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <TabItem label="Item One" {...a11yProps(0)} />
            <TabItem label="Item Two" {...a11yProps(1)} />
            <TabItem label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabBodyItem value={value} index={0}>
          Item One
        </TabBodyItem>
        <TabBodyItem value={value} index={1}>
          Item Two
        </TabBodyItem>
        <TabBodyItem value={value} index={2}>
          Item Three
        </TabBodyItem>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const TabItem = styled(Tab)({
  fontFamily: 'Electrofied',
  fontStyle: 'italic',
  fontSize: '32px',
  fontWeight: '400',
  textTransform: 'uppercase',
  color: '#5A6178',
  '&.Mui-selected': {
    color: '#FF6D24',
  }
})
const TabBodyItem = styled(TabPanel)({
  
})