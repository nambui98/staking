export const EVENT = {
	IMAGE: 'assets/home/event_name.png',
	DESC: 'Join our challenge, test your limit and earn a special reward',
	COUNTDOWN: 'Begins in',
	BUTTON: {
		title: 'REGISTER NOW',
		icon: 'assets/home/arrow-right.svg',
		href: '/event',
		mobileIcon: 'assets/home/arrow-up.svg',
	}
};

export const SOCIAL = [
	{
		icon: 'assets/home/social.svg',
		href: '#',
	},
	{
		icon: 'assets/home/social-1.svg',
		href: '#',
	},
	{
		icon: 'assets/home/social-2.svg',
		href: '#',
	},
	{
		icon: 'assets/home/social-3.svg',
		href: '#',
	},
];

type VideoSlide = {
	src?: string,
	mobileSrc?: string,
	// poster?: string,
	unplayable?: boolean,
	ref?: any,
}

export const videoSlides = (refs: any) => {
  const data:VideoSlide[] = [
		{
      src: "/videos/walking.mp4",
    },
    {
      src: "/videos/item4.mp4",
      mobileSrc: "/videos/runMobile.mp4",
    },
    {
      src: "/videos/cycle.mp4",
      mobileSrc: "/videos/cycleMobile.mp4",
    },
    {
      src: "/videos/item2.mp4",
    },
    {
      src: "/images/item5.jpg",
      mobileSrc: "/images/sleepMobile.png",
			unplayable: true,
    }
  ];

	return data.map((el: VideoSlide, idx: number) => ({
		...el,
		ref: refs[idx]
	}));
}
