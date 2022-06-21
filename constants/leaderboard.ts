export const TITLE = 'assets/titleLeaderboard.png';

export const TAB = {
  items: [
    { title: 'Walking', icon: 'assets/icons/bx_walk.svg'},
    { title: 'Running', icon: 'assets/icons/bx_run.svg'},
    { title: 'Cycling', icon: 'assets/icons/akar-icons_bicycle.svg'},
    { title: 'Lucky', icon: 'assets/icons/star.svg'}
  ],
  number1: 'assets/icons/st1.svg',
  number2: 'assets/icons/st2.svg',
  number3: 'assets/icons/st3.svg'
}

export const avatar = (hair: number) => {
  return `assets/avatar_${hair}.jpg`
}
