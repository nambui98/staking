export const LOGO = 'assets/logo/logo-text-black.svg';

export const HOME_LOGO = 'assets/logo/logo-text-white.png';

export const HOME_BG_LOGO = 'assets/backgrounds/header-1.png';

export const HEADER_ICON_BNB = 'assets/icons/bnbCoinYellow.svg';
export const HEADER_ICON = {
	user: 'assets/icons/profile-circle.svg',
	logout: 'assets/icons/logout.svg'
}

export const PAGE = {
	HOME: { title: 'Home', link: 'https://befitter.io/' },
	// PRE_SALES: {title: 'Pre-Sale Shop', link: '/shop'},
	DOCUMENT: { title: 'Documentation', link: '/' },
	LITEPAPER: { title: 'litePaper', link: '/litePaper' },
	ASSETS: { title: 'Assets', link: '/assets' }
}

export const MAIN_PAGE = [
	{ title: 'Dashboard', link: '/', icon: 'assets/icons/Dashboard.svg', active: true },
	{ title: 'Assets', link: '/assets', icon: 'assets/icons/box.svg', active: true },
	{ title: 'Claim', link: '/claim', icon: 'assets/icons/3d-cube-scan.svg', active: true },
	{
		title: 'Pools', link: '/staking', icon: 'assets/icons/staking.svg', active: true, subMenu: [
			{
				title: 'Earn', link: '/staking', icon: 'assets/icons/staking.svg', active: true,
			},
			{
				title: 'Burn', link: '/burn', icon: 'assets/icons/broken.svg', active: true,
			}
		]
	},
]
export const SECURICHAIN_LOGO = 'assets/securichain.png';
