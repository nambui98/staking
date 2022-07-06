import { Typography } from "@mui/material"
import { constants } from "crypto"

export const MARKETPLACE_ICON = {
  CLOSE: 'assets/icons/close-circle.svg',
  ARROWRIGHT: 'assets/icons/arrowRightWhite.svg',
  METAMASK: 'assets/icons/metamask.svg',
  TICK: 'assets/icons/tick-green.svg',
  CLOSE_ICON: 'assets/icons/close-red.svg',
  STAR: 'assets/icons/star2.svg',
  busdIcon: 'assets/icons/busd.svg',
  heeIcon: 'assets/icons/hee.svg',
  fiuIcon: 'assets/icons/fiu.svg',
  arrowRightIcon: 'assets/icons/arrow-right-small.svg',
  shoeIcon: 'assets/icons/standard.svg',
  shoeYellowIcon: 'assets/icons/rare-yellow.svg',
  shoeRedIcon: 'assets/icons/iconic-red.svg',
  userTickIcon: 'assets/icons/user-tick.svg',
  boxTickIcon: 'assets/icons/box-tick.svg',
  infomation : 'assets/icons/information.svg',
}

export const BACKGROUND = {
  SUCCESS: 'assets/backgrounds/union.png'
}

export const MARKETPLACE_IMAGE = {
  shoe: 'assets/shoe.png',
  borderv3: 'assets/borderv3.png',
  boxShoeToken: 'assets/shoeBoxToken.png',
}

export const STATISTICAL = {
  items: [
    {title: 'REGISTERED USERS', icon: 'assets/icons/user-tick.svg'},
    {title: 'ORDERED BOXES', icon: 'assets/icons/box-tick.svg'}
  ]
}

export const PROPERTIES = {
  items: [
    {title: 'Iconic Shoe', titleBg: 'ICONIC', chance: '10%', icon: 'assets/icons/iconic-red.svg'},
    {title: 'Rare Shoe', titleBg: 'RARE', chance: '50%', icon: 'assets/icons/rare-yellow.svg'},
    {title: 'Standard Shoe', titleBg: 'Common', chance: '40%', icon: 'assets/icons/standard.svg'}
  ]
}

export const TAB_PROPERTIES = [
  {label: 'Rule introduction', value: '1'},
  {label: 'Box information', value: '2'},
  {label: 'TIMELINE', value: '3'},
  {label: 'BONUS', value: '4'}
]

export const BOX_DETAIL = {
  box_gold: {
    video: 'videos/box-gold.webm',
    videoIphone: 'videos/box-gold.mov', 
    image_small: 'assets/box-gold-small.png',
    image_large: 'assets/box-gold-big.png',
    type: 'gold',
    title: 'Gold Mystery Shoe Box',
    maxBox: '5',
    oldPrice: '249',
    price: 199,
    quantity: '1000',
    properties: [
      {title: 'Iconic Shoe', titleBg: 'ICONIC', chance: '10%', icon: 'assets/icons/iconic-red.svg'},
      {title: 'Rare Shoe', titleBg: 'RARE', chance: '50%', icon: 'assets/icons/rare-yellow.svg'},
      {title: 'Standard Shoe', titleBg: 'Common', chance: '40%', icon: 'assets/icons/standard-gray.svg'}
    ],
    information: {
      introduction: [
        <Typography>Special Offer: With each Mystery Shoe Box purchased in this market, you will:</Typography>,
        <Typography>- Get $12 guaranteed allocation per Box for the beFITTER IDO later.</Typography>,
        <Typography>- 1 FitterPass per Wallet</Typography>,
        <Typography>- Have a chance to win Diamond Box in our Diamond LuckyDraw Event</Typography>,
        <Typography>1. Everyone can purchase in this Marketplace</Typography>,
        <Typography>2. One Mystery Box contains one NFT Shoe.</Typography>,
        <Typography>3. Purchase limitation: </Typography>,
        <Typography>5 boxes per wallet with Gold Box</Typography>,
        <Typography>2 boxes per wallet with Diamond Box</Typography>
      ],
      info: [
        <Typography>The Mystery Shoe Boxes contain beFITTER's gold andGenesis NFTs for its in-app activities, including walking, running and cycling.</Typography>,
      ],
      timeline: [
        <Typography><span>1.</span> Buy Box on beFITTER Marketplace</Typography>,
        <Typography><span>2.</span> Login beFITTER and connect your wallet to beFITTER app</Typography>,
        <Typography><span>3.</span> Tranfer Box from your Wallet to your Spending wallet </Typography>,
        <Typography><span>4.</span> Open box to get genesis Shoe NFT</Typography>
      ],
      bonus: [
        <Typography>With each <b>Gold Mystery Shoe Box</b> purchased in this market, you will:</Typography>,
        <Typography><span>1.</span> Get a $12 ticket guaranteed allocation per Gold Box for the beFITTER IDO later.</Typography>,
        <Typography><span>2.</span> 1 FitterPass per Wallet.</Typography>,
        <Typography><span>3.</span> If you are participate in activities on beFITTER app (walk/run/cycling) at least 300m in Pre-Mainnet  in Pre-Mainnet you will have a chance to win a Diamond Box</Typography>
      ]
    }
  },
  box_diamond: {
    video: 'videos/box-diamond.webm', 
    videoIphone: 'videos/box-diamond.mov',
    image_small: 'assets/box-diamond-small.png',
    image_large: 'assets/box-diamond-big.png',
    type: 'diamond',
    title: 'Diamond Mystery Shoe Box',
    maxBox: '2',
    oldPrice: '499',
    price: 429,
    quantity: '30',
    properties: [
      {title: 'Iconic Shoe', titleBg: 'ICONIC', chance: '10%', icon: 'assets/icons/iconic-red.svg'},
      {title: 'Rare Shoe', titleBg: 'RARE', chance: '90%', icon: 'assets/icons/rare-yellow.svg'},
      {title: 'Standard Shoe', titleBg: 'Common', chance: '0%', icon: 'assets/icons/standard-gray.svg'}
    ],
    information: {
      introduction: [
        <Typography>Special Offer: With each Mystery Shoe Box purchased in this market, you will:</Typography>,
        <Typography>- Get $12 guaranteed allocation per Box for the beFITTER IDO later.</Typography>,
        <Typography>- 1 FitterPass per Wallet</Typography>,
        <Typography>- Have a chance to win Diamond Box in our Diamond LuckyDraw Event</Typography>,
        <Typography>1. Everyone can purchase in this Marketplace</Typography>,
        <Typography>2. One Mystery Box contains one NFT Shoe.</Typography>,
        <Typography>3. Purchase limitation: </Typography>,
        <Typography>5 boxes per wallet with Gold Box</Typography>,
        <Typography>2 boxes per wallet with Diamond Box</Typography>
      ],
      info: [
        <Typography>The Mystery Shoe Boxes contain beFITTER's Genesis NFTs for its in-app activities, including walking, running and cycling.</Typography>,
      ],
      timeline: [
        <Typography><span>1.</span> Buy Box on beFITTER Marketplace</Typography>,
        <Typography><span>2.</span> Login beFITTER and connect your wallet to beFITTER app</Typography>,
        <Typography><span>3.</span> Tranfer Box from your Wallet to your Spending wallet </Typography>,
        <Typography><span>4.</span> Open box to get genesis Shoe NFT</Typography>
      ],
      bonus: [
        <Typography>With each <b>Diamond Mystery Shoe Box</b> purchased in this market, you will:</Typography>,
        <Typography><span>1.</span> Get a $30 ticket guaranteed allocation per Diamond Box for the beFITTER IDO later.</Typography>,
        <Typography><span>2.</span> 1 FitterPass per Wallet.</Typography>,
        <Typography><span>3.</span> If you participate in activities on beFITTER app (walk/run/cycling) at least 300m in Pre-Mainnet  in Pre-Mainnet you will have a chance to win a Diamond Box</Typography>
      ]
    }
  },
}

export const SHEET_NAME = {
  data1: 'Data1',
  data2: 'Data2'
}