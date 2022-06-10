import { Box, Container, Stack } from "@mui/material";
import type { NextPage } from "next";
import MainLayout from '../../components/layouts/MainLayout';
import { Banner } from "./container/Banner";
import Filter from "./container/Filter";
import ListItem from "./container/ListItem";

const Marketplace: NextPage = () => {
  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Banner />
      <Box sx={{margin: '0 24px'}}>
        <Container disableGutters sx={container}>
          <Stack sx={body}>
            <Filter/>
            <ListItem/>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  )
}

export default Marketplace;

const container = {
  maxWidth: { xl: 1920 - 240 },
  marginTop: '25px'
} 

const body = {
  justifyContent: 'space-between',
  flexDirection: 'row',
  color: '#31373E'
}