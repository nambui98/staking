export const IMAGE_COUNTDOWN = {
  image: 'assets/bannerOpenBeta.png',
  imageMobile: 'assets/bannerOpenBetaMobile.png',
  countDown: {
    title: 'Begins in',
    time: '2022-06-30T23:59:00',
    leadboard: {
      title: 'Leadboard',
      link: '/',
      active: false,
      image: 'assets/icons/ranking.svg',
      imageGray: 'assets/icons/rankingGray.svg',
    },
    Questions: [
      {title: 'How to join challenge', link: '/', imageIcon: 'assets/icons/message-question.svg'},
    ]
  }
}

export const TAB_BODY = {
  summary: {
    titleImage: 'assets/title1.png',
    list: [
      {title: 'Location', data: 'Global'},
      {title: 'Duration', data: 'Jun 20, 2022 - Jun 30, 2022'},
      {title: 'Reward Announcement', data: 'July 07, 2022'},
      {title: 'Activities included', data: 'Walking, Running, Cycling'},
      {title: 'Total rewards', data: '10,000 $FIU and 370 shoe NFT boxes, each NFT could be worth up to 1,000 USD'},
      {title: 'Max slots', data: 'Unlimited'},
      {title: 'Format', data: 'Do activities, travel distances, earn tickets to draw prizes'}
    ],
    contact: {
      title: 'If you have any related concerns, contact beFITTER for answers',
      email: 'team@befitter.io',
      mailIcon: 'assets/icons/smsIcon.svg',
      backgroundImage: 'assets/border3.png'
    }
  },
  reward: {
    titleImage: 'assets/title3.png',
    titleImage2: 'assets/title4.png',
    listIcon: 'assets/icons/list.svg',
    list: [
      {
        title: '200 NFT Prizes',
        subtitle: '(need 1 ticket to draw)',
        data: [
          '1 genesis shoe NFT',
          'For 200 random participants who accumulate tickets during the event'
        ]
      },
      {
        title: '100 Silver Prizes',
        subtitle: '(need 1 ticket to draw)',
        data: [
          '30 $FIU + 1 genesis shoe NFT',
          'For 100 random participants who accumulate tickets during the event'
        ]
      },
      {
        title: '50 Gold Prizes',
        subtitle: '(need 1 ticket to draw)',
        data: [
          '60 $FIU + 1 genesis shoe NFT',
          'For 40 random participants who accumulate tickets during the event'
        ]
      },
      {
        title: '20 Grand Prizes',
        subtitle: '(need 1 ticket to draw)',
        data: [
          '200 $FIU + 1 genesis shoe NFT',
          'For 10 random participants who accumulate packs of 10 tickets during the event'
        ]
      }
    ],
    total: {
      title: 'Total prize value',
      background: 'assets/border1.png'
    },
    keyNote: {
      title: '*Keynote:',
      data: [
        'Any accumulated 10 tickets of any users will be qualified to join the Grand Prizes draw automatically.',
        'The total distance users have traveled will be automatically synced to the app after each 15 mins.',
        'If users join more than 01 categories, only one with the highest result will be taken into account.',
        'Winners of the challenge will need to download the beFITTER Application (Mainnet version when available) and successfully register, then the rewards will be sent into their spending wallet and users must create an account on the Mainnet application after the reward time.'
      ]
    },
    bodyGetReward: 'Rewards will be delivered directly to participants’ Spending wallet after the Mainnet launch.'
  },
  rules: {
    titleImage: 'assets/title5.png',
    titleImage2: 'assets/title6.png',
    warningIcon: 'assets/icons/warning-2.svg',
    listIcon: 'assets/icons/list2.svg',
    list: [
      'If any signs of cheating are detected, beFITTER will reserve the right to disqualify accountable participants. The final decision will rest on the organizer as well.',
      'By registering to participate in the challenge, you agree to beFITTER’s terms and conditions.',
      'beFITTER has no responsibilities for users’ accidents, injuries, and other health and economic problems (if any) during the challenge.',
    ]
  }
}
export const BOX_DOWNLOAD = {
  image: 'assets/litePaper-app.png',
  backgroundImage: 'assets/bgOpenBeta.png',
  titleImage: 'assets/title2.png',
  appleIcon: 'assets/icons/applelogo.svg',
  googleIcon: 'assets/icons/gplaylogo.svg',
  linkIos: 'https://befitter.io/ios-register',
  linkAndroid: 'http://cdn.befitter.io/app.apk'
}