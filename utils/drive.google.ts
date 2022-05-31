import { google } from "googleapis";
import getConfig from "next/config";
import fs from "fs";
const { serverRuntimeConfig } = getConfig();

const jwt = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, "\n"),
	[
		"https://www.googleapis.com/auth/drive",
		"https://www.googleapis.com/auth/drive.file",
	]
);
const drive = google.drive({ version: "v3", auth: jwt });

export async function uploadFileToDrive(files: any) {
	let uploaded = [""];
	try {
		const results = await Promise.all(
			Object.values(files).map(async (file: any) =>
				drive.files.create({
					media: {
						mimeType: file.mimetype,
						body: fs.createReadStream(file.filepath),
					},
					requestBody: {
						name: file.originalFilename,
						parents: [serverRuntimeConfig.DRIVE_ID],
					},
					supportsAllDrives: true,
				})
			)
		);
		results.forEach((res: any) => {
			if (res.data && res.data.id)
				uploaded.push(
					`https://drive.google.com/file/d/${res.data.id}/view?usp=sharing`
				);
		});
	} catch (err) {
		console.log(err);
	}
	return uploaded;
}
