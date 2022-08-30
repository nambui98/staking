import moment from 'moment';

export const STAKING_ICON = {
	search: 'assets/icons/search-normal.svg',
	fiu: 'assets/icons/fiu.svg',
	hee: 'assets/icons/hee.svg',
	arrowLeftGray: 'assets/icons/arrow-left-gray.svg',
};

export const STAKING_IMAGE = {
	box: 'assets/3box.png',
	ftpass: 'assets/ftpass.png',
	smartPhone: 'assets/smartphone.png',
	boxGray: 'assets/3box-gray.png',
	roadmapBurnHee: 'assets/roadmapBurnHee.png',
};

export const ROAD_MAP = {
	//status: 1: coming soon, 2: active, 3: closed
	items: [
		{
			image: STAKING_IMAGE.ftpass,
			title: 'Fitter Pass Drops  - Flexible Season II',
			status: 2,
			textStatus: 'LIVE',
		},
		{
			image: STAKING_IMAGE.ftpass,
			title: 'Fitter Pass Drops - Flexible',
			status: 3,
			textStatus: 'Closed',
		},
		{
			image: STAKING_IMAGE.ftpass,
			title: 'Fitter Pass Drops - Locked',
			status: 3,
			textStatus: 'Closed',
		},
		{
			image: STAKING_IMAGE.smartPhone,
			title: 'Shared Pool - Yield Farming',
			status: 1,
			opacity: 0.2,
			textStatus: 'Upcoming',
		},
		{
			image: STAKING_IMAGE.box,
			title: 'Fixed rate - Yield Farming',
			status: 1,
			textStatus: 'Upcoming',
		},
		{
			image: STAKING_IMAGE.box,
			title: 'LP Farming',
			status: 1,
			textStatus: 'Upcoming',
		},
		{
			image: STAKING_IMAGE.box,
			title: 'Profit Sharing',
			status: 1,
			textStatus: 'Upcoming',
		},
	],
};
export const ROAD_MAP_AUCTION = {
	items: [
		{
			image: STAKING_IMAGE.box,
			title: 'Box Auction',
			status: moment('2022-08-19T09:00:00.000Z') >= moment(Date.now()) ? 2 : 3,
			textStatus:
				moment('2022-08-19T09:00:00.000Z') >= moment(Date.now())
					? 'LIVE'
					: 'Closed',
		},
		{
			image: STAKING_IMAGE.roadmapBurnHee,
			title: 'HEE Exchange - Win Fitter Pass',
			status: moment('2022-08-19T10:00:00.000Z') >= moment(Date.now()) ? 2 : 3,
			textStatus:
				moment('2022-08-19T10:00:00.000Z') >= moment(Date.now())
					? 'LIVE'
					: 'Closed',
		},
	],
};
