import { Box, Typography } from "@mui/material"

export const BANNER = {
  image: 'assets/banner_business.png'
}

export const BUSINESS_IMAGE = {
  tokenDouble: 'assets/token_double.png',
  shoeDouble: 'assets/shoe_double.png',
  logoOrange: 'assets/logo_orange.png',
  fireText: 'assets/fire_text.png',
  listShow: 'assets/list_show.png',
}

export const INTRO = {
  content: <Typography><span>beFITTER</span> provides the first health ecosystem with tight gameplay mechanics and SocialFi enhancement at its core. The whole ecosystem is powered by a token economy that enables in-app activities and pays for transactions fees.</Typography>,
}

export const BUSINESS_TOKEN = {
  hee: <Typography><span>$HEE</span> (Health token) rewards healthy activities.</Typography>,
  fiu: <Typography><span>$FIU </span>(Social token) rewards activities involving social interaction such as challenges and SocialFi; in the future, it will become a governance token when DAO is established.</Typography>,
  body: [
    <Typography>The two tokens are also used in In-app activities. </Typography>,
    <Typography sx={{
      paddingLeft: '10px',
      marginBottom: '10px !important',
    }}>• Users need <span style={{color: '#1DB268'}}>$HEE</span> to repair NFTs, mint NFTs and level up NFTs at most levels.</Typography>,
    <Typography sx={{
      paddingLeft: '10px'
    }}>• Users need <span style={{color: '#FF6D24'}}>$FIU</span> to mint NFTs, level up NFTs at some levels and join challenges.</Typography>,
    <Typography>The utilities of $FIU and $HEE will evolve alongside app features.</Typography>,
  ]
}

export const BUSINESS_MODEL = {
  title: 'Business Model',
  intro: 'The beFITTER features six revenue streams, which can be found as follows:',
  body1: [
    <Typography sx={{
      marginBottom: '80px',
      '@media (max-width: 767px)': {
        marginBottom: '24px',
      }
    }}><span>NFT Items Sale</span>: The reserved Genesis Shoe NFT and other limited collections would be sold in special events for users who stake $FIU or hold the first Genesis Shoe NFT. </Typography>,
    <Typography><span>NFT Level-up, Repair and Mint</span>: A 5% tax on in-app activities, including NFT leveling up, repairing and minting NFT to create a new one. </Typography>
  ],
  body2: <Typography><span>Challenge</span>: Users spend $FIU to join 1vs1 challenges or buy tickets to participate in a tournament,  where they have a chance to receive a higher reward than in solo activities. The organizer, which is beFITTER in the early stage, would take 5% of the winning pool.</Typography>,
  body3: [
    <Typography><span>Transaction Fee</span>: A 2% fee on all NFT trades on the in-app NFT marketplace, 0.5% fee but not less than a fixed number when withdrawing a token from spending to wallet. Fee is paid by the token which is withdrawn (HEE,FIU,BNB). When withdrawing NFT, the fee is a fixed number of HEE. These fixed numbers ensure our system has enough gas fee to process the transaction.</Typography>,
    <Typography sx={{
      margin: '80px 0',
      '@media (max-width: 767px)': {
        margin: '24px 0',
      }
    }}><span>Rental Commission Fee</span>: There are 2 forms in the rental system: fixed rent and profit sharing. We will charge a 5% fee from the shoe rental profit of the lessor.</Typography>,
    <Typography><span>Advertising & Brand Collaboration Fee</span>: displaying ads within the app and collaborating with brands to launch new shoe collections. This fee is up to negotiation with partners.</Typography>
  ],
  introFire: 'A  portion of the revenue in tokens are permanently destroyed via token burning. This immediately reduces the total supply of tokens.',
  fiuFire: [
    '$FIU TOKEN',
    '25% Minting fee in $FIU',
    '25% Leveling up fee in $FIU',
    '25% Challenge rewards pool',
    '1% of NFT Renting Rewards'
  ],
  heeFire: [
    '$HEE Token',
    '25% Minting fee in $HEE',
    '25% Leveling up fee in $HEE',
    '25% Repairing fee'
  ]
}

export const PROFIT_SHARING = {
  intro: '50% of beFITTER revenue, excluding the tokens in burning mechanism, would be circulated directly back to the ecosystem funds or used to buy back tokens. The tokens is used for profit sharing, dividing into different usages:',
  items: [
    <Typography><span>NFT Airdrop and Rewards pool</span> - replenish FitnessFi and SocialFi prize pool and NFT airdrop, enabling the incentive program to continue.</Typography>,
    <Typography><span>Staking Fund</span> – $FIU holders that stake tokens in beFITTER hub or provide liquidity to DEX liquidity pools earn a staking yield. Check out the beFITTER staking Pool Roadmap here.</Typography>,
    <Typography><span>Locking Liquidity</span> - contribution to the DEX liquidity pool, which is locked in 01 year,  to increase the tradable liquidity and promote a healthy secondary market.</Typography>,
    <Typography><span>Token Burning Events</span> – Burning events occur on a regular basis, initially set at once per quarter but subject to community vote.</Typography>
  ]
}