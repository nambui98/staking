import styled from "@emotion/styled"
import { Box, Container, Link, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import { TAB_BODY, TAB_BODY_PRE_MAINNET } from "../../../constants/openBeta";
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
          <Stack>
            {TAB_BODY_PRE_MAINNET.summary.list?.map((item, index) => (
              <SummaryTitleItem key={index}><Typography>{item.title}</Typography> <span>{item.data}</span></SummaryTitleItem>
            ))}
          </Stack>
          <BoxEmail>
            <Typography>{TAB_BODY_PRE_MAINNET.summary.contact.title}</Typography>
            <BoxEmailItem><img src={TAB_BODY_PRE_MAINNET.summary.contact.mailIcon} /> <Link href={`mailto:${TAB_BODY_PRE_MAINNET.summary.contact.email}`}>{TAB_BODY_PRE_MAINNET.summary.contact.email}</Link></BoxEmailItem>
          </BoxEmail>
        </TabBodyItem>
        <TabBodyItem value={value} index={1}>
          <KeyNote>
            <Stack>
              {TAB_BODY_PRE_MAINNET.reward.keyNote.data?.map((item, index) =>
                <KeyNoteItem key={index}>
                  <Typography>•</Typography>
                  {item}
                </KeyNoteItem>)}
            </Stack>
          </KeyNote>
          <Typography sx={{ ...TEXT_STYLE(24, 600, '#31373E'), '& span': { color: '#FF6D24' } }} >
            The total prize of the Pre-mainnet: <span>2000 BUSD</span>, chance to buy shoes on SHOP, have a chance to mind your shoes.
          </Typography>
          {/* <TitleImage><img src={TAB_BODY_PRE_MAINNET.reward.titleImage2} /></TitleImage>
          <BodyGetReward>{TAB_BODY_PRE_MAINNET.reward.bodyGetReward}</BodyGetReward> */}
        </TabBodyItem>
        <TabBodyItem value={value} index={2}>
          <Typography sx={{ ...TEXT_STYLE(18, 500, '#5A6178'), '& span': { color: '#FF6D24' }, marginBottom: '20px' }}>Users need to enter the <span>beFITTER app</span> and complete the following tasks for a chance to win a Lucky Random prize:</Typography>
          <KeyNote>
            <Stack>
              {TAB_BODY_PRE_MAINNET.reward.tab3?.map((item: any, index: number) =>
                <KeyNoteItem key={index} sx={{marginBottom: '6px !important'}}>
                  <Typography>•</Typography>
                  {item}
                </KeyNoteItem>)}
            </Stack>
          </KeyNote>
          <Typography sx={{ ...TEXT_STYLE(18, 500, '#5A6178'), '& span': { color: '#FF6D24' } }}>There is a trace of the completion of the quest in the Challenge.</Typography>
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
  marginBottom: 10
})
const KeyNoteTitle = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: '#31373E',
  marginBottom: 15
})
const KeyNoteItem = styled(Typography)({
  marginBottom: 14,
  fontSize: 18,
  fontWeight: '500',
  color: '#31373E',
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
  // fontSize: '24px',
  fontSize: '1.2em',

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