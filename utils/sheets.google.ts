import { google } from 'googleapis';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const jwt = new google.auth.JWT(
	serverRuntimeConfig.CLIENT_EMAIL,
	serverRuntimeConfig.CLIENT_ID,
	serverRuntimeConfig.PRIVATE_KEY.replace(/\\n/g, '\n'),
	['https://www.googleapis.com/auth/spreadsheets']
);
const sheets = google.sheets({ version: 'v4', auth: jwt });

const SHEET = {
	EVENT: 'Event',
	SUPPORT: 'Support',
	MARKETPLACE: 'Data1',
	MARKETPLACE_CLAIM: 'Data2'
};

interface eventBody {
	walletAddress: string,
	name: string,
	email: string;
	country: string;
	twitter: string
	discord: string
	telegram: string;
	facebook: string;
	sheetName: string
}

export async function appendEvent(body: eventBody) {
	const data = {
		// createdAt: new Date().toLocaleString("en-GB"),
		createdAt: new Date().toLocaleString(),
		walletAddress: body.walletAddress,
		name: body.name,
		email: body.email,
		country: body.country,
		twitter: body.twitter,
		discord: body.discord,
		telegram: body.telegram,
		facebook: body.facebook,
	};
	return sheets.spreadsheets.values.append({
		spreadsheetId: serverRuntimeConfig.MARKETPLACE_INFORMATION_ID,
		range: body.sheetName,
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [[...Object.values(data)]],
		},
	});
}

interface supportBody {
	email: string;
	desc: string;
	attachments: string[];
}

export async function appendApplication(body: supportBody) {
	const data = {
		createdAt: new Date().toLocaleString(),
		...body,
		attachments:
			body.attachments.length === 1
				? body.attachments[0]
				: body.attachments.join('\n'),
	};
	return sheets.spreadsheets.values.append({
		spreadsheetId: serverRuntimeConfig.HOME_SPREADSHEET_ID,
		range: SHEET.SUPPORT,
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [[...Object.values(data)]],
		},
	});
}
