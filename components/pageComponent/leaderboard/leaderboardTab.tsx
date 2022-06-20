import { Box, Stack, styled, Tab, Tabs, Typography, SvgIcon, Icon } from "@mui/material"
import { useEffect, useState } from "react";
import { TAB } from "../../../constants/leaderboard";
import { getLeaderboardData } from "../../../libs/apis/statistical";
import { TEXT_STYLE } from "../../../styles/common/textStyles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const listItem = (data: any) => {
  return (
    <ListDataTab>
      {data?.map((item: any, index: number) => (
        index > 2 && <Item key={index}><Stt>{index + 1}</Stt><img src={'assets/litePaper-token-fiu.png'} /><Name>{item.nickname}</Name><KmDetails>{parseFloat(item.distance).toFixed(2)} km</KmDetails></Item>
      ))}
    </ListDataTab>
  )
}

export const LeaderboardTab = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [leaderboardData, setLeaderboardData] = useState<any>();
  const [currentType, setCurrentType] = useState<string>('walking');
  const [leaderboardDataRank, setLeaderboardDataRank] = useState<any>([]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setLimit(10);
    if(newValue === 0){
      setCurrentType('walking');
    } else if(newValue === 1){
      setCurrentType('running')
    } else if(newValue === 2){
      setCurrentType('cycling')
    } else {
      setCurrentType('lucky')
    }
    setCurrentTab(newValue);
  };

  const handleLoadMore = () => {
    setLimit(limit + 10)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getLeaderboardData({ type: currentType, limit: limit, offset: currentOffset })
      if (res.data.meta.code === 0) {
        setLeaderboardData(res.data.data);
        setLeaderboardDataRank(res.data.data.sort((a: any, b: any) => parseFloat(b.distance) - parseFloat(a.distance)));
      } else {
        setLeaderboardData([])
      }
    }
    getData();
  }, [currentTab, currentOffset, limit])

  return (
    <Wrap>
      <TabsBox>
        <Tabs value={currentTab} onChange={handleChangeTab} variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          {TAB.items?.map((item, index) => (
            <TabTitle key={index} iconPosition='start' icon={<img src={item.icon} />} label={<span>{item.title}</span>} />
          ))}
        </Tabs>
      </TabsBox>
      <RankBox>
        <RankItem>
          <RankAvatar><img src={TAB.number2} /> <RankFrames sx={{ top: 7 }}><img style={width47} src={'assets/litePaper-token-fiu.png'} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[1]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[1] && parseFloat(leaderboardDataRank[1]?.distance).toFixed(2)} km</KM>
        </RankItem>
        <RankItem>
          <RankAvatar><img src={TAB.number1} /><RankFrames sx={{ top: 24 }}><img style={width68} src={'assets/litePaper-token-fiu.png'} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[0]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[0] && parseFloat(leaderboardDataRank[0]?.distance).toFixed(2)} km</KM>
        </RankItem>
        <RankItem>
          <RankAvatar><img src={TAB.number3} /><RankFrames sx={{ top: 14 }}><img style={width40} src={'assets/litePaper-token-fiu.png'} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[2]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[2] && parseFloat(leaderboardDataRank[2]?.distance).toFixed(2)} km</KM>
        </RankItem>
      </RankBox>
      {TAB.items?.map((item, index) => (
        <TabPanel key={index} value={currentTab} index={index}>
          {listItem(leaderboardData)}
        </TabPanel>
      ))}
      <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const width47 = {
  width: 47,
  height: 47
}
const width68 = {
  width: 68,
  height: 68
}
const width40 = {
  width: 40,
  height: 40
}
const LoadMore = styled(Typography)({
  color: '#5A6178',
  ...TEXT_STYLE.text_16_500,
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'pointer',
})
const KmDetails = styled(Typography)({
  color: '#5A6178',
  ...TEXT_STYLE.text_16_400,
  marginLeft: 'auto'
})
const Stt = styled(Typography)({
  ...TEXT_STYLE.text_16_600,
  color: '#000000'
})
const Name = styled(Typography)({
  ...TEXT_STYLE.text_14_600
})
const Item = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#31373E',
  marginBottom: 16,
  '& img': {
    width: 48,
    height: 48,
    borderRadius: '100%',
    margin: '0 16px 0 18px'
  }
})
const ListDataTab = styled(Box)({

})
const KM = styled(Typography)({
  ...TEXT_STYLE.text_16_400,
  color: '#5A6178'
})
const TitleRank = styled(Typography)({
  ...TEXT_STYLE.text_16_600,
  color: '#31373E',
  marginBottom: 4
})
const RankFrames = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)'
})
const RankAvatar = styled(Box)({
  position: 'relative',
  marginBottom: 9,
  '& > img': {
    objectFit: 'cover',
  }
})
const RankItem = styled(Box)({
  textAlign: 'center',
})
const RankBox = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '5px 73px 9px 73px',
  alignItems: 'flex-end',
  borderRadius: 16,
  backgroundColor: '#FFF5F0',
  marginBottom: 15
})
const TabsBox = styled(Box)({
  borderBottom: '1px solid #E9EAEF',
  paddingBottom: 8,
  marginBottom: 8
})
const TabTitle = styled(Tab)({
  padding: '0px 18px',
  borderRadius: 20,
  minHeight: 40,
  marginRight: 15,
  '& span': {
    opacity: 0,
    transition: '.3s',
    color: '#FF6D24',
    ...TEXT_STYLE.text_16_500
  },
  '&.Mui-selected': {
    background: '#FFE2D3',
    '& span': {
      opacity: 1
    }
  }
})