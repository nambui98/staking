export const BANNER = {
	IMAGE: 'assets/openBetaTestnet.png',
	IMAGECUP: 'assets/alpha-challenge-cup.png',
	DESC: 'Join our challenge, test your limit and earn a special reward',
	COUNTDOWN: 'Begins in',
	BUTTON_LEADERBOARD: {
		title: 'assets/buttonLeaderboard.png',
		href: '/leaderboard'
	},
	BUTTON: {
		title: 'REGISTER NOW',
		icon: 'assets/icons/arrow-color.svg',
		href: '/preMainnet',
		mobileIcon: 'assets/icons/arrow-up.svg',
	},
	SOCIAL: {
		BG: 'assets/backgrounds/home-banner-social.png',
		ITEMS: [
			{
				icon: 'assets/icons/fb-white.svg',
				iconActive: 'assets/icons/fb-color.svg',
				href: 'https://www.facebook.com/beFITTER.io',
			},
			{
				icon: 'assets/icons/ig-white.svg',
				iconActive: 'assets/icons/ig-color.svg',
				href: 'https://www.instagram.com/befitter.io',
			},
			{
				icon: 'assets/icons/tw-white.svg',
				iconActive: 'assets/icons/tw-color.svg',
				href: 'https://twitter.com/beFITTER_io',
			},
			{
				icon: 'assets/icons/tl-white.svg',
				iconActive: 'assets/icons/tl-color.svg',
				href: 'https://t.me/befitter_chat',
			},
		]
	},
};

export const APP = {
	POSTER: 'assets/home-app.png',
	SUBTITLE: 'Make healthy lifestyle',
	TITLE: 'irresistible',
	TITLE_BG: 'assets/backgrounds/home-app.png',
	DESC: 'beFITTER is a web3 fitnessfi and socialfi app that aims to build a healthier ecosystem helping users balance their life, improve mental & physical health, gain achievements and still get monetary incentives.',
	BUTTON: [
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'App Store',
			icon: 'assets/logo/apple.png',
			href: '',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'Google Play',
			icon: 'assets/logo/gplay.png',
			href: '',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download for',
			title: 'Wearable',
			icon: 'assets/logo/watch.svg',
			href: '',
		},
	],
};

export const CHALLENGE = {
	TITLE: 'DUAL TOP',
	SUBTITLE: 'challenge',
	DESC: `Participate in 3 types of activities which are walking, running and cycling, then each category takes the top 300 people according to the set criteria to give prizes!`,
	REGISTER: {
		DESC: 'SIGN UP FOR THE FIRST PRE-SALE',
		BUTTON: {
			title: 'REGISTER NOW',
			icon: 'assets/icons/arrow-right.svg',
			href: '/event',
		},
	},
	BG: 'assets/backgrounds/home-challenge.png',
	BG_TITLE: 'assets/home-challenge-title.png',
	BG_SUBTITLE: 'assets/home-challenge-subtitle.png',
	BG_ITEM1: 'assets/backgrounds/alpha-challenge-1.png',
	BG_ITEM2: 'assets/alpha-challenge-logo.png',
	BG_ITEM3: 'assets/alpha-challenge-items.png',
	BG_ITEM5: 'assets/backgrounds/alpha-challenge-2.png',
};

export const NUMBER = {
	TITLE: 'NUMBERS',
	SUBTITLE: 'IMPRESSIVE',
	POSTER: 'assets/home-number-item.png',
	BG_ITEM: 'assets/backgrounds/home-number.png',
	ITEMS: [
		{
			count: '19,000,000,000',
			title: 'Total distance',
			icon: 'assets/icons/routing.svg',
		},
		{
			count: '400,000,000',
			title: 'Total runners',
			icon: 'assets/icons/tag-user.svg',
		},
		{
			count: '1,200,000,000',
			title: 'Shoes minted',
			icon: 'assets/icons/hierarchy-2.svg',
		},
		{
			count: '2,300,000,000',
			title: 'Journey drawing created',
			icon: 'assets/icons/magic-pen.svg',
		},
	],
};

export const WORKS = {
	TITLE: 'WORKS',
	SUBTITLE: 'HOW IT',
	SLIDES: [
		{
			subtitle: 'achieve your goal',
			title: 'SHARE YOUR RESULT',
			subtitleSize: 40,
			titleSize: 44,
			image: 'assets/home-works-slide-1.png',
			right: '4%',
			bottom: '18%',
		},
		{
			subtitle: 'JOIN A HEALTHY COMMUNITY',
			title: 'GET MOTIVATED',
			subtitleSize: 33,
			titleSize: 48,
			image: 'assets/home-works-slide-2.png',
			right: '1%',
			bottom: '19%',
		},
		{
			subtitle: 'CHALLENGE YOUR LIMITS',
			title: 'GET REWARD',
			subtitleSize: 38,
			titleSize: 56,
			image: 'assets/home-works-slide-3.png',
			right: '1%',
			bottom: '18%',
		},
		{
			subtitle: '5000',
			title: 'MINTABLE SHOES',
			subtitleSize: 64,
			titleSize: 48,
			image: 'assets/home-works-slide-4.png',
			icon: 'assets/icons/plus.svg',
			right: '11%',
			bottom: '14%',
		},
		{
			subtitle: 'MINTING NFT ITEMS',
			title: 'LEVEL UP, EARN TOKEN',
			subtitleSize: 40,
			titleSize: 40,
			image: 'assets/home-works-slide-5.png',
			right: '5%',
			bottom: '18%',
		},
	],
};

type VideoSlide = {
	src?: string;
	mobileSrc?: string;
	bigDecktopSrc?: string;
	// poster?: string,
	unplayable?: boolean;
	ref?: any;
};

export const videoSlides = (refs: any) => {
	const data: VideoSlide[] = [
		// {
		// 	src: 'assets/backgrounds/bg_darkmode.png',
		// 	unplayable: true,
		// },
		{
			src: '/videos/IDO.mp4',
			mobileSrc: '/videos/IDO.mp4',
			bigDecktopSrc: '/videos/IDO2.mp4',
		},
		// {
		// 	src: '/videos/cycle.mp4',
		// 	mobileSrc: '/videos/cycleMobile.mp4',
		// },
		// {
		// 	src: '/videos/item2.mp4',
		// },
		// {
		// 	src: '/images/item5.jpg',
		// 	mobileSrc: '/images/sleepMobile.png',
		// 	unplayable: true,
		// },
	];

	return data.map((el: VideoSlide, idx: number) => ({
		...el,
		ref: refs[idx],
	}));
};
