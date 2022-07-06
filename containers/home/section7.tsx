import React from 'react';
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	InputBase,
	Button,
	IconButton,
	Icon,
	Theme,
	useMediaQuery,
} from '@mui/material';
import { TEAM } from '../../constants/common';

const Section7: React.FC<any> = ({ sxProps }) => {
	const data = [
		{
			name: 'thi truong',

		}
	]
	return (
		<Container sx={{ ...sxProps }}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}
			<Box display={'flex'} mb={10} alignItems="center" justifyContent="center">

				<Typography
					fontSize={{ xs: 20, sm: 56 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					textAlign="center"
				>
					ADVISORS
				</Typography>

			</Box>
			<Box display={'flex'} justifyContent="space-evenly">

				<Box width="320px">
					<img width={"100%"} src="assets/partners/icetealabs_director.png" />
					<Typography
						fontSize={{ xs: 16, sm: 24 }}
						textTransform="uppercase"
						fontWeight={700}
						color="#31373E"
						textAlign="left"
						mt={3}
					>
						THI TRUONG
					</Typography>
					<p style={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: '16px',
					}}>
						Thi is the founder of <span style={{ color: '#55C8FC' }} >
							Icetea Labs
						</span> , the company behind Red Kite Launchpad and GameFi.org gaming hub. He is also the incubator, advisor or investor of a couple of blockchain projects such as Faraland, NFTrade, The Unfettered…
					</p>
					<br />
					<span style={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: '16px'
					}}>
						Before founding Icetea Labs, Thi worked for Kyber Network and FPT Software
					</span>

				</Box>
				<Box width="320px">
					<img width={"100%"} src="assets/partners/dao_director.png" />
					<Typography
						fontSize={{ xs: 16, sm: 24 }}
						textTransform="uppercase"
						fontWeight={700}
						color="#31373E"
						textAlign="left"
						mt={3}
					>
						THI TRUONG
					</Typography>
					<p style={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: '16px',
					}}>
						Thi is the founder of <span style={{ color: '#55C8FC' }} >
							Icetea Labs
						</span> , the company behind Red Kite Launchpad and GameFi.org gaming hub. He is also the incubator, advisor or investor of a couple of blockchain projects such as Faraland, NFTrade, The Unfettered…
					</p>
					<br />
					<span style={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: '16px'
					}}>
						Before founding Icetea Labs, Thi worked for Kyber Network and FPT Software
					</span>

				</Box>
			</Box>
		</Container >
	);
};

export default Section7;
