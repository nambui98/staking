import fetch from 'node-fetch';
import getConfig from "next/config";
import AlphaBetaData from "../../abi/merkle-alpha-beta-boxes.json";
import OtherData from "../../abi/merkle-other-event.json";
import GameFiData from "../../abi/merkle-claim-gamefi.json";
import EnjinstarterData from "../../abi/merkle-claim-enjin.json";
import AlphaBetaData2 from "../../abi/merkle-alpha-beta-boxes-2.json"; 
import PublicSaleData from "../../abi/merkle-claim-fiu.json"
import Airdrop from "../../abi/merkle-claim-fiu-airdrop.json"
import INOWeb from "../../abi/merkle-buybox-giveaway.json"
import BoxEventReward from "../../abi/merkle-buybox-giveaway.json"
import BoxPassEventRefund from "../../abi/merkle-buybox-giveaway.json"

const { serverRuntimeConfig } = getConfig();

export default async function handler(req: any, res: any) {
	const responseFail = {
		amount: null,
		proof: null,
		status: 0,
		message: 'fail'
	}
	if (req.method === 'POST') {
		const { walletAddress, captchaToken, round, requireCaptcha } = req.body;
		if (!walletAddress || !round) {
			return res.json(responseFail);
		}
		try {
			const response = await fetch(
				`https://www.google.com/recaptcha/api/siteverify?secret=${serverRuntimeConfig.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
					},
					method: 'POST',
				}
			);
			const captchaValidation = await response.json();

			const checkRound = () => {
				switch (round) {
					case '1': return AlphaBetaData
					case '2': return OtherData
					case '3': return GameFiData
					case '4': return EnjinstarterData
					case '5': return PublicSaleData
					case '6': return AlphaBetaData2
					case '7': return Airdrop
					case '8': return INOWeb
					case '9': return BoxEventReward
					case '10': return BoxPassEventRefund
					default:
						break;
				}
			}
			const findData = await (checkRound() as any)?.merkleData.claimData[walletAddress.toLowerCase()];
			if (requireCaptcha) {
				if (captchaValidation.success) {
					if (findData) {
						return res.json({
							amount: findData.amount,
							proof: findData.proof,
							status: 1,
							message: 'success'
						});
					} return res.json(responseFail)
				} return res.json({ ...responseFail, captchaValidation: false })
			} else {
				if (findData) {
					return res.json({
						amount: findData.amount,
						proof: findData.proof,
						status: 1,
						message: 'success'
					});
				}
				return res.json(responseFail)
			}
} catch (error) {
	return res.json(responseFail);
}
	}
// Return 404 if someone pings the API with a method other than
// POST
return res.status(404).send('Not found');
}
