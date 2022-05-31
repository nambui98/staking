import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { appendApplication } from "../../utils/sheets.google";
import { uploadFileToDrive } from "../../utils/drive.google";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		try {
			const form = formidable();
			const body = await new Promise<any>((resolve) => {
				form.parse(req, (err: any, fields: any, files: any) => {
					if (err) {
						console.error(err);
						resolve({ fields: {}, files: {} });
					} else {
						resolve({ fields, files });
					}
				});
			});
			const {
				email,
				desc,
			} = body.fields;
			// const { attachments } = body.files;
			const files = body.files;
			if (
				!files ||
				!email ||
				!desc
			)
				return res.status(400).json({ message: "Bad request" });
			const attachments = await uploadFileToDrive(files);
			if (!attachments)
				return res.status(500).json({ message: "Upload attachments failed" });
			await appendApplication({
				email,
				desc,
				attachments: [...attachments].filter((el) => el !== ""),
			});
			res.json({ message: "Success" });
		} catch (err) {
			res.status(500).json({ message: err });
		}
	}
}
