import { appendEvent } from "../../utils/sheets.google";

export default function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { email, wallet, telegram } = req.body;
		if (email && wallet && telegram)
		appendEvent({ email, wallet, telegram })
				.then(() => res.json({ message: "Success" }))
				.catch((err) => res.status(500).json({ message: err }));
		else res.status(400).json({ message: "Bad request" });
	}
}
