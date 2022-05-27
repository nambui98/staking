import { google } from "googleapis";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const jwt = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, "\n"),
	["https://www.googleapis.com/auth/spreadsheets"]
);
const sheets = google.sheets({ version: "v4", auth: jwt });

const SHEET = {
	EVENT: "Event",
};

interface eventBody {
	email: string;
	wallet: string;
	telegram: string;
}

export async function appendEvent(body: eventBody) {
	const data = {
		// createdAt: new Date().toLocaleString("en-GB"),
		createdAt: new Date().toLocaleString(),
		...body,
	};
	return sheets.spreadsheets.values.append({
		spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
		range: SHEET.EVENT,
		valueInputOption: "USER_ENTERED",
		requestBody: {
			values: [[...Object.values(data)]],
		},
	});
}

// interface applyBody {
// 	jobName: string;
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	phone: string;
// 	location: string;
// 	attachments: string[];
// }

// export async function appendApplication(body: applyBody) {
// 	const data = {
// 		createdAt: new Date().toLocaleString("en-GB"),
// 		...body,
// 		attachments:
// 			body.attachments.length === 1
// 				? body.attachments[0]
// 				: body.attachments.join("\n"),
// 	};
// 	return sheets.spreadsheets.values.append({
// 		spreadsheetId: serverRuntimeConfig.SPREADSHEET_ID,
// 		range: SHEET.APPLICATION,
// 		valueInputOption: "USER_ENTERED",
// 		requestBody: {
// 			values: [[...Object.values(data)]],
// 		},
// 	});
// }
