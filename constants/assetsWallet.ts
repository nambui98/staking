export const ICON = {
  bnbSmall: 'assets/icons/bnbCoinYellow.svg',
  bnbBig: 'assets/icons/bnb-yellow.svg',
  shoe: 'assets/icons/shoe-standard.svg',
  box: 'assets/icons/box-classic.svg',
  pet: 'assets/icons/pet.svg',
  fiu: 'assets/icons/fiu-token.svg',
  hee: 'assets/icons/hee-token.svg',
  buyCrypto: 'assets/icons/buy-crypto.svg',
  starGray: 'assets/icons/droprate.svg',
  starYellow: 'assets/icons/droprate-yellow.svg',
  shoeRed: 'assets/icons/iconic-red.svg',
  shoeYellow: 'assets/icons/rare-yellow.svg',
  shoeGray: 'assets/icons/standard-gray.svg',
  gift: 'assets/icons/gift.svg',
  fitterPass: 'assets/icons/fitterpass.svg'
}

export const IMAGE = {
  boxShoeToken: 'assets/shoeBoxToken.png'
}

export const BOX_INFO = {
  box_silver: {
    title: 'Silver Mystery Box',
    image: 'assets/box-silver-small.png',
    detail: {
      standard: '88%',
      rare: '11%',
      iconic: '1%'
    }
  },
  box_gold: {
    title: 'Gold Mystery Box',
    image: 'assets/box-silver.png',
    detail: {
      standard: '50%',
      rare: '40%',
      iconic: '10%'
    }
  },
  box_diamond: {
    title: 'Diamond Mystery Box',
    image: 'assets/box-silver.png',
    detail: {
      standard: '0%',
      rare: '90%',
      iconic: '10%'
    }
  }
}

export const TAB_NAME = {
  token: 'Token',
  shoe: 'Shoes',
  box: 'Mystery Boxes',
  pet: 'Pets',
  fitterPass: 'Fitter Pass'
}

export const TAB_ITEM = [
  {title: TAB_NAME.token, icon: ICON.buyCrypto, active: true},
  {title: TAB_NAME.shoe, icon: ICON.shoe, active: false},
  {title: TAB_NAME.box, icon: ICON.box, active: true},
  {title: TAB_NAME.pet, icon: ICON.pet, active: false},
  {title: TAB_NAME.fitterPass, icon: ICON.fitterPass, active: true},
]

export const BOX_DETAILS = {
  silver: {
    type: 'silver',
    title: 'Silver Mystery Box',
    image: 'assets/box-silver-small.png',
    detail: {
      standard: '88%',
      rare: '11%',
      iconic: '1%'
    }
  },
  gold: {
    type: 'gold',
    title: 'Gold Mystery Box',
    image: 'assets/box-gold-small.png',
    detail: {
      standard: '40%',
      rare: '50%',
      iconic: '10%'
    }
  },
  diamond: {
    type: 'diamond',
    title: 'Diamond Mystery Box',
    image: 'assets/box-diamond-small.png',
    detail: {
      standard: '0%',
      rare: '90%',
      iconic: '10%'
    }
  }
}

export const FITTER_PASS = {
  title: 'Fitter Pass',
  id: '0',
  image: 'assets/fitterPass.png'
}
