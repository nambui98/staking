import { Box, Stack, styled, Tab, Tabs, Typography, SvgIcon, Icon, CircularProgress, Backdrop } from "@mui/material"
import { useEffect, useState } from "react";
import { avatar, TAB } from "../../../constants/leaderboard";
import { getLeaderboardData } from "../../../libs/apis/statistical";
import { TEXT_STYLE } from "../../../styles/common/textStyles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const LeaderboardTab = () => {
  const limit = 10;
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [leaderboardData, setLeaderboardData] = useState<any>();
  const [leaderboardDataRank, setLeaderboardDataRank] = useState<any>([]);
  const [statusLoading, setStatusLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<{ type: string, limit: number, offset: number }>({ type: 'walking', limit: limit, offset: 0 })

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    if (newValue === 0) {
      setPagination({ ...pagination, type: 'walking', limit: limit });
    } else if (newValue === 1) {
      setPagination({ ...pagination, type: 'running', limit: limit });
    } else if (newValue === 2) {
      setPagination({ ...pagination, type: 'cycling', limit: limit });
    } else {
      setPagination({ ...pagination, type: 'lucky', limit: limit });
    }
  };

  const handleLoadMore = () => {
    setPagination({ ...pagination, limit: pagination.limit + limit })
  }

  useEffect(() => {
    const getData = async () => {
      setStatusLoading(true)
      const res = await getLeaderboardData({ type: pagination.type, limit: pagination.limit, offset: pagination.offset })
      if (res?.data?.meta?.code === 0) {
        setLeaderboardData(res.data.data);
        setLeaderboardDataRank(res.data.data.sort((a: any, b: any) => parseFloat(b.distance) - parseFloat(a.distance)));
      } else {
        setLeaderboardData([])
      }
      setStatusLoading(false)
    }
    getData()
  }, [pagination])

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
          <RankAvatar><img src={TAB.number2} /> <RankFrames sx={{ top: 5 }}><img style={width47} src={avatar(leaderboardDataRank[1]?.avatar?.hair)} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[1]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[1] && parseFloat(leaderboardDataRank[1]?.distance).toFixed(2)} km</KM>
        </RankItem>
        <RankItem>
          <RankAvatar><img src={TAB.number1} /><RankFrames sx={{ top: 17 }}><img style={width68} src={avatar(leaderboardDataRank[0]?.avatar?.hair)} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[0]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[0] && parseFloat(leaderboardDataRank[0]?.distance).toFixed(2)} km</KM>
        </RankItem>
        <RankItem>
          <RankAvatar><img src={TAB.number3} /><RankFrames sx={{ top: 10 }}><img style={width40} src={avatar(leaderboardDataRank[2]?.avatar?.hair)} /></RankFrames></RankAvatar>
          <TitleRank>{leaderboardDataRank[2]?.nickname}</TitleRank>
          <KM>{leaderboardDataRank[2] && parseFloat(leaderboardDataRank[2]?.distance).toFixed(2)} km</KM>
        </RankItem>
      </RankBox>
      <ListDataTab>
        {leaderboardData?.map((item: any, index: number) => (
          index > 2 && <Item key={index}><Stt>{index + 1}</Stt><img src={avatar(item?.avatar?.hair)} /><Name>{item.nickname}</Name><KmDetails>{parseFloat(item.distance).toFixed(2)} km</KmDetails></Item>
        ))}
      </ListDataTab>
      {<LoadMore onClick={handleLoadMore}>Load more</LoadMore>}
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
    margin: '0 10px'
  },
  '@media (min-width: 768px)': {
    '& img': {
      margin: '0 16px 0 18px'
    },
  }
})
const ListDataTab = styled(Box)({

})
const KM = styled(Typography)({
  ...TEXT_STYLE.text_14_400,
  color: '#5A6178',
  '@media (min-width: 768px)': {
    ...TEXT_STYLE.text_16_400,
  }
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
  transform: 'translateX(-50%)',
  '& img': {
    borderRadius: '100%'
  }
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
  padding: '10px 10px',
  alignItems: 'flex-end',
  borderRadius: 16,
  backgroundColor: '#FFF5F0',
  marginBottom: 15,
  '@media (min-width: 768px)': {
    transform: 'skew(-20deg)',
    padding: '5px 73px 9px 73px',
    '& > div': {
      transform: 'skew(20deg)'
    },
  }
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
  '& span': {
    opacity: 0,
    transition: '.3s',
    color: '#FF6D24',
    ...TEXT_STYLE.text_16_500
  },
  '& img': {
    filter: 'invert(0%) sepia(35%) saturate(204%) hue-rotate(185deg) brightness(89%) contrast(85%)',
  },
  '&.Mui-selected': {
    background: '#FFE2D3',
    '& span': {
      opacity: 1
    },
    '& img': {
      filter: 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)'
    }
  },
  '@media (min-width: 768px)': {
    marginRight: 15,
  }
})