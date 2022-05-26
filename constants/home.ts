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