import fetch from 'node-fetch';
import getConfig from "next/config";
import MerkleClaim from "../../abi/merkle-claim.json";
const { serverRuntimeConfig } = getConfig();

export default async function handler(req: any, res: any) {
	if (req.method === 'POST') {
		const { walletAddress, captchaToken } = req.body;
		if (!walletAddress || !captchaToken) {
			return res.status(422).json({
				message: 'Unproccesable request, please provide the required fields',
			});
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
			if (captchaValidation.success) {
				const findData = (MerkleClaim as any).merkleData.claimData[walletAddress];
				if(findData){
					return res.json({
						amount: findData.amount,
						proof: findData.proof,
						status: 1,
						message: 'success'
					});
				} else {
					return res.json({
						amount: null,
						proof: null,
						status: 0,
						message: 'fail'
					})
				}
			}

			return res.status(422).json({
				message: 'Unproccesable request, Invalid captcha code',
			});
		} catch (error) {
			console.log(error);
			return res.status(422).json({ message: 'Something went wrong' });
		}
	}
	// Return 404 if someone pings the API with a method other than
	// POST
	return res.status(404).send('Not found');
}
