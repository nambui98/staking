import fetch from 'node-fetch';
import getConfig from "next/config";
import AlphaData from "../../abi/merkle-claim-gamefi.json";
import BetaData from "../../abi/merkle-claim-gamefi.json";
import GameFiData from "../../abi/merkle-claim-gamefi.json";
import EnjinstarterData from "../../abi/merkle-claim-enjin.json";
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
			const findData = await (round === '1' ? AlphaData : round === '2' ? BetaData : round === '3' ? GameFiData : EnjinstarterData as any).merkleData.claimData[walletAddress.toLowerCase()];
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
