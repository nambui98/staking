import { Container } from "@mui/material";
import HomeLayoutNew from "../components/layouts/HomeLayoutNew";
import { Banner } from "../containers/business/Banner";
import { BusinessModel } from "../containers/business/BusinessModel";
import { Intro } from "../containers/business/Intro";
import { Section4 } from "../containers/business/Section4";
import { Section5 } from "../containers/business/Section5";
import { Token } from "../containers/business/Token";

const Business = () => {
	return (
		<HomeLayoutNew sxProps={{ background: '#111021' }} headerLandingPage={true} customWhite={true} >
			<Banner />
			<Container sx={{ maxWidth: { xl: 1680 + 48 } }}>
				<Intro />
				<Token />
				<BusinessModel />
				<Section4 />
				<Section5 />
			</Container>
		</HomeLayoutNew>
	)
}

export default Business;
