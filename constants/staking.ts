export const STAKING_ICON = {
	search: 'assets/icons/search-normal.svg',
	fiu: 'assets/icons/fiu.svg',
	arrowLeftGray: 'assets/icons/arrow-left-gray.svg',
}

export const STAKING_IMAGE = {
	box: 'assets/3box.png',
	ftpass: 'assets/ftpass.png',
	smartPhone: 'assets/smartphone.png',
	boxGray: 'assets/3box-gray.png',
}

export const ROAD_MAP = {
	items: [
		{
			image: STAKING_IMAGE.ftpass,
			title: 'FITTER Pass Drops',
			status: true,
			isUpcomming: false,
			textStatus: 'LIVE'
		},
		{
			image: STAKING_IMAGE.smartPhone,
			title: 'Shared Pool - Yield Farming',
			status: true,
			opacity: 0.2,
			isUpcomming: true,
			textStatus: 'coming soon'
		},
		{
			image: STAKING_IMAGE.box,
			title: 'Fixed rate - Yield Farming',
			status: '',
			isUpcomming: true,
			textStatus: 'Upcoming'
		},
		{
			image: STAKING_IMAGE.box,
			title: 'LP Farming',
			status: '',
			isUpcomming: true,
			textStatus: 'Upcoming'

		},
		{
			image: STAKING_IMAGE.box,
			title: 'Profit Sharing',
			status: '',
			isUpcomming: true,
			textStatus: 'Upcoming'

		}
	]
}