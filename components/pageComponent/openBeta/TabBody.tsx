import styled from "@emotion/styled"
import { Box, Container, Link, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import { TAB_BODY } from "../../../constants/openBeta";
import { TEXT_STYLE } from "../../../styles/common/textStyles";

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
        <BoxBodyTab>
          <Typography>{children}</Typography>
        </BoxBodyTab>
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
          <BoxTabs value={value} onChange={handleChange}>
            <TabItem label="SUMMARY" {...a11yProps(0)} />
            <TabItem label="REWARD" {...a11yProps(1)} />
            <TabItem label="RULES" {...a11yProps(2)} />
          </BoxTabs>
        </Box>
        <TabBodyItem value={value} index={0} sx={{ padding: 0 }}>
          <TitleImage><img src={TAB_BODY.summary.titleImage} /></TitleImage>
          <Stack>
            {TAB_BODY.summary.list?.map((item, index) => (
              <SummaryTitleItem key={index}><Typography>{item.title}</Typography> <span>{item.data}</span></SummaryTitleItem>
            ))}
          </Stack>
          <BoxEmail>
            <Typography>{TAB_BODY.summary.contact.title}</Typography>
            <BoxEmailItem><img src={TAB_BODY.summary.contact.mailIcon} /> <Link href={`mailto:${TAB_BODY.summary.contact.email}`}>{TAB_BODY.summary.contact.email}</Link></BoxEmailItem>
          </BoxEmail>
        </TabBodyItem>
        <TabBodyItem value={value} index={1}>
          <TitleImage><img src={TAB_BODY.reward.titleImage} /></TitleImage>
          {TAB_BODY.reward.list?.map((item, index) => (
            <BoxRewardItem key={index}>
              <Box><RewardTitleItem>{item.title}</RewardTitleItem><RewardSubtitleItem>{item.subtitle}</RewardSubtitleItem></Box>
              <Box>{item.data?.map((data, key) => <RewardBodyItem key={key}><img src={TAB_BODY.reward.listIcon} />{data}</RewardBodyItem>)}</Box>
            </BoxRewardItem>
          ))}
          <TotalPrize>
            <TotalPrizeTitle>{TAB_BODY.reward.total.title}</TotalPrizeTitle>
            <TotalPrizeBody><span>10,000 $FIU</span> and <span>370 shoe NFTs</span>, each NFT could worth up to 1,000 USD</TotalPrizeBody>
          </TotalPrize>
          <KeyNote>
            <KeyNoteTitle>{TAB_BODY.reward.keyNote.title}</KeyNoteTitle>
            <Stack>
              {TAB_BODY.reward.keyNote.data?.map((item, index) =>
              <KeyNoteItem key={index} sx={index === 2 || index === 3 ? {marginBottom: '4px !important'} : {}}>
                <Typography sx={{opacity: index < 3 ? 1 : 0}}>•</Typography>
                {item}
              </KeyNoteItem>)}
            </Stack>
          </KeyNote>
          <Box>
            <Typography sx={{color: '#5A6178', marginBottom: '10px', ...TEXT_STYLE(16, 500)}}>If you have any related concerns, kindly contact beFITTER for support!</Typography>
            <Typography sx={{color: '#5A6178', ...TEXT_STYLE(16, 500)}}>Email: <span style={{color: '#FF8A50 '}}>team@befitter.io</span></Typography>
          </Box>
          {/* <TitleImage><img src={TAB_BODY.reward.titleImage2} /></TitleImage>
          <BodyGetReward>{TAB_BODY.reward.bodyGetReward}</BodyGetReward> */}
        </TabBodyItem>
        <TabBodyItem value={value} index={2}>
          <TitleImage><img src={TAB_BODY.rules.titleImage} /></TitleImage>
          <RuleJoin>
            <Typography sx={{ color: '#31373E !important', fontWeight: '600 !important' }}>For iOS users:</Typography>
            <Typography>- Download Testflight and follow <Link href='https://testflight.apple.com/join/7ZprWPng'>THIS LINK</Link></Typography>
            <Typography sx={{ color: '#31373E !important', fontWeight: '600 !important' }}>For Android users:</Typography>
            <Typography>- Download <Link href='#'> HERE </Link></Typography>
            <Typography>Users who took part in beFITTER Alpha Test and already have an account will need to log in.</Typography>
            <Typography>Users who didn’t take part in beFITTER Alpha Test and don’t have an account will need to create an account. </Typography>
            <Typography>To be qualified to take part in beFITTER’s Open Beta Testnet, event participants need to go to the Wallet section in beFITTER app and claim their Testnet shoe NFT. </Typography>
            <Typography>How to transfer your testnet Genesis Shoe NFT to your beFITTER spending wallet? Just follow the instructions <Link href='/howToJoinChain'>HERE</Link>.</Typography>
            <Typography>Event participants need to do at least 1 physical activity with beFITTER app to earn a ticket: </Typography>
            <span>• Walking and running: Earn 1 ticket every 3km</span>
            <span>• Cycling: Earn 1 ticket every 6 km</span>
          </RuleJoin>
          <TitleImage><img src={TAB_BODY.rules.warningIcon} />&nbsp; &nbsp;<img src={TAB_BODY.rules.titleImage2} /></TitleImage>
          {TAB_BODY.rules.list?.map((item, index) => <EventRuleITem key={index}><img src={TAB_BODY.rules.listIcon} /> {item}</EventRuleITem>)}
        </TabBodyItem>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  marginBottom: 60
})
const font16 = {
  fontSize: 16,
  fontWeight: 500
}
const font18_600 = {
  fontSize: 18,
  fontWeight: 600
}
const colorGradient = {
  WebkitBackgroundClip: 'text !important',
  WebkitTextFillColor: 'transparent',
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
}
const BoxEarn = styled(Stack)({

})
const EventRuleITem = styled(Typography)({
  marginBottom: 30,
  ...font18_600,
  color: '#31373E',
  display: 'flex',
  alignItems: 'flex-start',
  '& img': {
    paddingTop: 5,
    marginRight: 16
  },
  '@media (max-width: 767px)': {
    fontSize: 16,
    marginBottom: 20
  }
})
const RuleJoin = styled(Typography)({
  marginBottom: 40,
  '& p': {
    color: '#5A6178',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 17,
    '@media (min-width: 768px)': {
      fontSize: 18,
    }
  },
  '& span': {
    color: '#31373E',
    fontSize: 16,
    fontWeight: '600',
    display: 'block',
    '@media (min-width: 768px)': {
      fontSize: 18,
    }
  },
  '& span:nth-child(2)': {
    marginBottom: 5
  },
  '& span:nth-child(3)': {
    marginBottom: 17
  },
  '& a': {
    color: '#FF8A50',
    textDecoration: 'underline'
  }
})
const BodyGetReward = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: '#5A6178',
  marginBottom: 10,
  '@media (min-width: 768px)': {
    marginBottom: 40,
    fontSize: 18,
  }
})
const KeyNote = styled(Stack)({
  marginBottom: 26
})
const KeyNoteTitle = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: '#31373E',
  marginBottom: 15
})
const KeyNoteItem = styled(Typography)({
  marginBottom: 14,
  fontSize: 14,
  fontWeight: '500',
  color: '#5A6178',
  flexDirection: 'row',
  display: 'flex',
  '& p': {
    marginRight: 6
  }
})
const TotalPrize = styled(Stack)({
  backgroundImage: `url(${TAB_BODY.reward.total.background})`,
  backgroundRepeat: 'no-repeat',
  padding: '24px 40px',
  marginBottom: 24,
  '@media (max-width: 1023px)': {
    backgroundPosition: '100%',
    backgroundSize: 'cover'
  },
  '@media (max-width: 767px)': {
    backgroundImage: "none",
    marginBottom: 10,
    padding: '10px 0'
  }
})
const TotalPrizeTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 400,
  fontStyle: 'italic',
  fontFamily: 'Electrofied',
  marginBottom: 10,
  color: '#31373E',
  '@media (min-width: 768px)': {
    fontSize: 24,
    marginBottom: 16,
  }
})
const TotalPrizeBody = styled(Typography)({
  fontSize: 19,
  fontWeight: 500,
  color: '#31373E',
  '& span': {
    ...colorGradient,
    fontWeight: 700,
  },
  '@media (min-width: 768px)': {
    fontSize: 24,
  }
})
const BoxRewardItem = styled(Stack)({
  marginBottom: 20,
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  }
})
const RewardBodyItem = styled(Typography)({
  ...font16,
  color: '#5A6178',
  '&:first-child': {
    marginBottom: 16
  },
  '& img': {
    marginRight: 8
  }
})
const RewardTitleItem = styled(Typography)({
  ...colorGradient,
  fontSize: 20,
  fontWeight: 600,
  width: 195,
  marginRight: 92,
  marginBottom: 5,
  '@media (min-width: 768px)': {
    fontSize: 24,
  }
})
const RewardSubtitleItem = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: '#31373E',
  '@media (max-width: 767px)': {
    marginBottom: 20,
    fontSize: 14,
  }
})
const BoxTabs = styled(Tabs)({
  marginBottom: 42,
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  '@media (max-width: 767px)': {
    paddingBottom: 5,
    borderBottom: '1px solid #E9EAEF',
    marginBottom: 16,
    '& .MuiTabs-flexContainer': {
      overflow: 'auto',
      width: '100%',
      justifyContent: 'initial',
    },
  }
})
const TabItem = styled(Tab)({
  fontFamily: 'Electrofied',
  fontStyle: 'italic',
  fontSize: '24px',
  fontWeight: '400',
  textTransform: 'uppercase',
  padding: '0 13.5px',
  color: '#5A6178',
  '&:first-child': {
    paddingLeft: 0
  },
  '&.Mui-selected': {
    color: '#FF6D24',
  },
  '@media (min-width: 768px)': {
    padding: '0 37px',
    fontSize: '32px',
  }
})
const TitleImage = styled(Box)({
  marginBottom: 27,
  '& img': {
    maxWidth: '100%'
  }
})
const TabBodyItem = styled(TabPanel)({

})
const SummaryTitleItem = styled(Typography)({
  color: '#31373E',
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '20px',
  '& p': {
    fontWeight: '500',
    color: '#5A6178',
    width: '206px',
    marginRight: '40px',
    display: 'inline-block'
  },
  '@media (max-width: 767px)': {
    display: 'flex',
    fontSize: '16px',
    flexDirection: 'column',
    '& span': {
      margin: '8px 0 0 16px'
    }
  }
})
const BoxBodyTab = styled(Box)({
  marginBottom: 4
})
const BoxEmail = styled(Stack)({
  padding: '32px 24px',
  backgroundImage: `url(${TAB_BODY.summary.contact.backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  '& p, & a': {
    fontSize: 16,
    fontWeight: '600',
    color: '#31373E',
    '@media (min-width: 768px)': {
      fontSize: 18,
    }
  },
  '@media (max-width: 767px)': {
    backgroundSize: 'cover',
    backgroundPosition: '100%'
  }
})
const BoxEmailItem = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginTop: 20,
  '& img': {
    marginRight: 8,
  }
})