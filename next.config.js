/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		// Will only be available on the server side
		RECAPTCHA_SITE_KEY: "6Lc275cgAAAAAAHHwNMoAh448YXBi-jz3AeS-4A9",
		RECAPTCHA_SECRET_KEY: "6Lc275cgAAAAAH1J82HwTVgPVlm_RllqKN9Ycefp",
		OLD_EVENT_SPREADSHEET_ID: "1QokRb-eR4IZOxPoQQcZZlElvqNTBkC1-LMRWjEmQDf0",
		EVENT_SPREADSHEET_ID: "1gn6dTzpq0eViCusTRwqHHvirF-fcCHNq7yVULDS3Nt4",
		HOME_SPREADSHEET_ID: "1P0PTiAHns91zNm_UOHknpaS9oi4ucfluMYmEvupbfT8",
		MARKETPLACE_INFORMATION_ID: '1kfzziyxZiCmhbCBJlEKppdvTQ9T5xbgVbbgHl3aP2fs',
		DRIVE_ID: "1Wh-niW3MeVOl0Sd7c1KKR0aqC67an0FQ",
		CLIENT_ID: "113562450568978192792",
		CLIENT_EMAIL: "sheets-editor@versehub-homepage.iam.gserviceaccount.com",
		PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQClLJN8yUmTvPOz\nezBnbKfxAPqxcyudcCQWVDau6e9onHtZ+n+8YzGBrO7dlqQpWXO0nJ4W+lqN1/bl\nMKpoNPiMBycBWnebE8bqyoM/jz8eVmfi8sPbIZrW2zyB51cDA0rz3S4XqlVe9mit\n0KskI1CUfh2//P/981GPJQqx7qd561+KGr+YTE+Q9WX8NmDzkREGf3w1j7McfNlH\n8t9bL4M+czeG0GtORcN3+x7QqqHJID7K8LNIx7qCD2mbYKV3DZjGc7GcmpXMI7Vj\na3yaCMs22sw5t76jGTfzF/hM5IJXaqaCMMDujIvszf4Liv8ihA/eTTxDvn5/U427\nYMlBOllhAgMBAAECgf9dLYhbcjHPkLLpzSoWg3U6FRNXMgv+BK+sPlWa1t1NEPmF\nCOCGUG7dIxvyZR4L4Cp6+N817IVTqevd3wDtSEnuCcWMkzxl1Kz3nBvuVHYxkbeJ\nOj9tSXJ6l7LKlXbAfFsMDE9e36LJWg2Iqu6LXwtWDs85lGp/wtjU/Psg5UC/xYj2\naGzTh/rXS85t7Mhseo6zEQAQvcnk3XJyIRZNt3OgrUzL7f0SPQtdagoUka6QDDNx\nxKOeLHOB5fkvmjbv76UvLHe2hxIModcYsfbIHNeyiO/JwPRoBPsCP2bneIWyqYYp\n+0/0n3Ag+H5kcVoNrsbB2t8vgwbT6oHbQUnrIfUCgYEA6Ggg7RVTP7mgzq92ALnm\nS7MYAgx53qauoqeunfFTp7q+hMbgfAJ+3dFeJrkmz9eYKg/QtP9TtZMtFUDb3qYb\nFwjmjkTY8k9LvK+6+fzJjunQm2LxqgCtLgsjR7VojW4tmY3GnYpujo/XLl7wG8rJ\n+okX5FXjcBaOdniP4G3oJMUCgYEAtfEudlyknSQZY6QWaonb2PPB0trO4yPX8wKD\na+2tnJDroYNoaZtwbFYtweNTMsMu+zB4VHZlkWPZpeTMcyLQFt9npKbLn85SVRCw\n2KDzrX8J8/8PNxCq33XOcM1658Km3kmjpMII6Bapx384OJWPi8N4ea9tqYE+z0f2\n6Wd6A+0CgYB4ZKjZ6HgtxN229FIu4h6ZDHfdZ9UiMDq7bB4bF878TtMvOU9FLo3G\nHxWk/blLZiYfc/3sJXCZ2Vo7blP4LRhPgH7fKG8yZz2Wy3oS0o8fh6RXOpRyOtN7\nzK1EEofM7EyXBUjkh7fqBj20ed3sp8qmDKrh0FR31leKq73sx0LA+QKBgHIyqrYS\nGiSj1ufKw2Mlmn9HKH4fZsH86nuWNUUWDuV5tNxQrcWzkdH+GYRcGgl/p0p0tuJU\n2hVytdbBkG4oCLKCkPww0RhCGT1ZV5bxF2HrniSvEC7A4G+X8vaskptLew+E6xjr\nzUlXiEM2n+QsQ8g27bR7HvrIq9LQ2bLQhy5VAoGATU07K9XrkhOtF3j/+A1UsmZ2\nWzd5VwXSzmImv0mWeofxcgxcasI2wzROiARO+fqcJBDRw9e1alzKqVNS1BYazErD\nrFT91wepx0cAgNairmssea2s/gsSfXOjiRnTYlcf+DpQ3rqphHg715Ip/4+5zAd2\nZK2D9owYApXPpScx6IY=\n-----END PRIVATE KEY-----\n",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});

		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'hub.befitter.io',
					},
				],
				destination: 'https://hub.befitter.io/claim',
				permanent: true,
			},
		]
	},
	async rewrites() {
		return [
			{
				source: '/:path*{/}?',
				has: [
					{
						type: 'host',
						value: '(?<siteHost>.*)',
					},
				],
				destination: '/site/:siteHost/:path*',
			},

		];
		// return [
		// 	{
		// 		source: '/litepaper',
		// 		destination: '/litePaper',
		// 	},
		// ]
	},
}
