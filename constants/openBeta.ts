export const IMAGE_COUNTDOWN = {
  image: 'assets/bannerOpenBeta.png',
  imageMobile: 'assets/bannerOpenBetaMobile.png',
  countDown: {
    title: 'Begins in',
    time: '2022-06-30T23:59:00',
    leadboard: {
      title: 'Leadboard',
      link: '/',
      active: false
    },
    Questions: [
      {title: 'How to create your own Testnet Wallet', link: '/', imageIcon: 'assets/icons/message-question.svg'},
      {title: 'How to join challenge', link: '/', imageIcon: 'assets/icons/message-question.svg'},
      {title: 'How to download beFitter app', link: '/', imageIcon: 'assets/icons/message-question.svg'}
    ]
  }
}

export const TAB_BODY = {
  tab1: {
    list: [
      {title: 'Location', data: 'Global'},
      {title: 'Duration', data: 'Jun 20, 2022 - Jun 30, 2022'},
      {title: 'Reward Announcement', data: 'July 07, 2022'},
      {title: 'Activities included', data: 'Walking, Running, Cycling'},
      {title: 'Total rewards', data: '3 NFTs with total value up to 3,000 USD'},
      {title: 'Max slots', data: 'Unlimited'},
      {title: 'Format', data: 'Do activities, travel distances, earn tickets to draw prizes'}
    ],
    contact: {
      title: 'If you have any related concerns, contact beFITTER for answers',
    }
  },
  tab2: {
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
    },
    keyNote: [
      'Any accumulated 10 tickets of any users will be qualified to join the Grand Prizes draw automatically.',
      'The total distance users have traveled will be automatically synced to the app after each 15 mins.',
      'If users join more than 01 categories, only one with the highest result will be taken into account.',
      'Winners of the challenge will need to download the beFITTER Application (Mainnet version when available) and successfully register, then the rewards will be sent into their spending wallet and users must create an account on the Mainnet application after the reward time.'
    ]
  },
  tab3: {
    imageTitle: '',
    imageTitleEvent: '',
    list: [
      'Users will receive a FREE GENESIS NFT SHOE to participate in the challenge via the wallet ID they have provided. Rewards for the winners are also credited to the given wallet address.',
      'If any signs of cheating are detected, beFITTER will reserve the right to disqualify accountable participants. The final decision will rest on the organizer as well.',
      'By registering to participate in the challenge, you agree to beFITTER’s terms and conditions.',
      'beFITTER has no responsibilities for users’ accidents, injuries, and other health and economic problems (if any) during the challenge.'
    ]
  }
}