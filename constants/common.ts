export const END_DATE_EVENT = '2022-07-06T14:00:00.000Z';
export const END_DATE_EVENT_EXTRA_HOURS = 0;

export const SECTION_TITLE_BG = 'assets/backgrounds/section-title.png';

export const ICON_MENU_DARK = 'assets/icons/menu-dark.svg';
export const ICON_MENU_WHITE = 'assets/icons/menu-white.svg';
export const MENU_ITEMS = [
	{ title: 'beFITTER hub', href: 'https://hub.befitter.io/claim' },
	// { title: 'LitePaper', href: '/litePaper' },
	{ title: 'Whitepaper', href: 'https://whitepaper.befitter.io/' },
];
export const MENU_ITEMS_HOME = [
	{ title: 'Staking', href: '/staking' },
	{ title: 'HUB', href: 'https://hub.befitter.io/' },
	{ title: 'WHITEPAPER', href: 'https://whitepaper.befitter.io/' },
	// { title: 'ABOUT', href: '#' },
	// { title: 'CONTACT', href: '#' },
];
export const MENU_ITEMS_MOBILE = [
	{ title: 'Staking', href: '/staking' },
	{ title: 'HUB', href: 'https://hub.befitter.io/' },
	{ title: 'BUSINESS PAPER', href: '/business' },
	{ title: 'WHITEPAPER', href: 'https://whitepaper.befitter.io/' },
	// { title: 'ABOUT', href: '#' },
	// { title: 'CONTACT', href: '#' },
];

export const SOCIAL = [
	{
		icon: 'assets/social/facebook/normal.svg',
		iconActive: 'assets/social/facebook/hover.svg',
		href: 'https://www.facebook.com/beFITTER.io',
	},
	{
		icon: 'assets/social/insta/normal.svg',
		iconActive: 'assets/social/insta/hover.svg',
		href: 'https://www.instagram.com/befitter.io',
	},
	{
		icon: 'assets/social/twit/normal.svg',
		iconActive: 'assets/social/twit/hover.svg',
		href: 'https://twitter.com/beFITTER_io',
	},
	{
		icon: 'assets/social/youtube/normal.svg',
		iconActive: 'assets/social/youtube/hover.svg',
		href: 'https://www.youtube.com/channel/UCWHlMEIroTPlHS6fukq5pyw',
	},
	{
		icon: 'assets/social/discord/normal.svg',
		iconActive: 'assets/social/discord/hover.svg',
		href: 'https://discord.gg/hSfajgQkzh',
	},
	{
		icon: 'assets/social/tele/normal.svg',
		iconActive: 'assets/social/tele/hover.svg',
		href: 'https://t.me/befitter_chat',
	},
	{
		icon: 'assets/social/medium/normal.svg',
		iconActive: 'assets/social/medium/hover.svg',
		href: 'https://medium.com/@beFITTER',
	},
];

export const FOUNDED = {
	TITLE: 'INCUBATED',
	SUBTITLE: 'BY',
	BG: 'assets/backgrounds/home-founded.png',
	ICETEA: 'assets/logo/icetea.png',
	GAMEFI: 'assets/logo/gamefi.png',
	LIST_ITEM: 'assets/icons/list.svg',
	ITEMS: [
		`Leading incubator in SEA`,
		`100+ successful listed projects`,
		`Launchpad Performance: 60x ATH ROI (approximated by CryptoRank)`,
		`Partnership with world industry leading organizations`,
	],
};

export const TEAM = {
	TITLE: 'TEAM',
	SUBTITLE: 'OUR',
	ITEMS: [
		{
			name: 'Ba Nguyen',
			role: 'CO-FOUNDER',
			desc: `Ba had experience working on notable blockchain projects including Red Kite and GameFi.org. Before beFITTER, she was Icetea Labs due diligence leader who has evaluated and advised over 30 projects.`,
			image: 'assets/team/banguyen.png',
		},
		{
			name: 'Trang Doan',
			role: 'Product owner',
			desc: `Trang is a driven product owner with 8 years of experience in large-scale software development. She is also a passionate mentor at Mentori, a leading career orientation platform.`,
			image: 'assets/team/trangdoan.png',
		},
		{
			name: 'Ha Nguyen',
			role: 'Head of development',
			desc: `Ha has 10+ years of experience creating high-tech applications in various industries such as finance, business management… and more than one year of experience in blockchain.`,
			image: 'assets/team/hanguyen.png',
		},
		{
			name: 'Thai Trieu',
			role: 'ART-direCtor',
			desc: `Thai has 9 years of experience in the game industry as a concept artist and illustrator. He is also a crypto and NFT enthusiast.`,
			image: 'assets/team/thaitrieu.png',
		},
	],
};

export const ROADMAP = {
	TITLE: 'MAP',
	SUBTITLE: 'ROAD',
	MAP: 'assets/dark/map.png',
	ROAD: 'assets/home-roadmap-road.png',
	ICON_LIST: 'assets/icons/list.svg',
	MILESTONES: [
		{
			title: 'Early 2022',
			items: [`Idea & Concept`, `Form a team (Art, BA,\nEngineer, BD)`],
			top: 514,
			ml: -883,
			active: true,
		},
		{
			title: 'May - 2022',
			items: [
				`Seed Fund Raising`,
				// `Launch Testnet`,
				// `Bug Bounty`,
				`NFTs Airdrop Campaign`,
			],
			top: 285,
			ml: -585,
			active: true,
		},
		{
			title: 'June - 2022',
			items: [
				// `Launch Mainnet V1`, 
				`Launch Testnet`,
				`Coop w/All-in-one\ndiscovery Gaming Hub`,
				`Launch Mainnet V1`,
			],
			top: 668,
			ml: -435,
			active: true,
		},
		{
			title: 'Q3 - 2022',
			items: [
				`IDO & Token Listing`,
				'Staking',
				'Launch Mainnet V1',
				'Release Renting system',
				`In-app system optimization`,
				`Co-branding Partnerships`,
			],
			top: 480,
			ml: 18,
			active: true,
		},
		{
			title: 'Q4 - 2022',
			items: [
				`Mainnet V2 (Challenge)`,
				`Wearable (Sleep)`,
				`In-app system optimization`,
				`Advertising`,
			],
			top: 156,
			ml: 104,
			active: false,

		},
		{
			title: 'Q1 - 2023',
			items: [
				`Wearables (Swim)`,
				`Health analysis`,
				`In-app system optimization`,
			],
			top: 597,
			ml: 580,
			active: false,

		},
		{
			title: 'Q2 - 2023',
			items: [
				`Training Plan`,
				`Web3 SocialFi elements`,
				`Marathons and Triathlon Events`,
				`In-app system optimization`,
			],
			top: 128,
			ml: 807,
			active: false,

		},
	],
};
