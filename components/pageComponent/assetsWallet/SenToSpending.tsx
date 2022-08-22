import {
	Box,
	Button,
	InputBase,
	Stack,
	styled,
	Typography,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TAB_NAME } from '../../../constants/assetsWallet';
import { useCommonContext } from '../../../contexts/CommonContext';
import { useWalletContext } from '../../../contexts/WalletContext';
import { checkVerifyEmail } from '../../../libs/apis/marketplace';
import {
	getAllowance,
	handleApprove,
	handleDeposit,
	handleDepositBnb,
} from '../../../libs/assets';
import {
	bftBox,
	bftFiuToken,
	bftHeetoken,
	bftShoeItem,
	beFITTERlockedPool,
} from '../../../libs/contracts';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { MarketplaceButton } from '../../buttons/MarketplaceButton';

interface IProps {
	currentTab: string;
	tokenChoose: string;
	boxChoose: string;
	getListBox: () => any;
	setBoxChoose: any;
	shoesChoose: string;
	getListShoes: () => any;
	setShoeChoose: (data: string) => any;
	totalFitterPass: number;
}

export const SendToSpending: React.FC<IProps> = ({
	currentTab,
	tokenChoose,
	boxChoose,
	getListBox,
	setBoxChoose,
	shoesChoose,
	getListShoes,
	setShoeChoose,
	totalFitterPass,
}) => {
	const { popupNoti, spinner } = useCommonContext();
	const {
		walletAccount,
		ethersSigner,
		ethersProvider,
		updateBnbBalance,
		fiuBalance,
		heeBalance,
		bnbBalance,
	} = useWalletContext();
	const [textEmail, setTextEmail] = useState<string>('');
	const [amount, setAmount] = useState<string>('');
	const [statusButtonSent, setStatusButtonSent] = useState<boolean>(false);
	const [approvedFiu, setApprovedFiu] = useState<boolean>(false);
	const [approvedHee, setApprovedHee] = useState<boolean>(false);
	const [amountApprovedFiu, setAmountApprovedFiu] = useState<number>(0);
	const [amountApprovedHee, setAmountApprovedHee] = useState<number>(0);

	const checkEmail = async () => {
		const res = await checkVerifyEmail(textEmail);
		if (res?.data?.data.exist) {
			return true;
		}
		return false;
	};

	const handleCheckEmailAmount = async () => {
		if (await checkEmail()) {
			if (currentTab === TAB_NAME.token) {
				if (tokenChoose === 'hee') {
					if (approvedHee) {
						const heeApproved = await getAllowance(
							walletAccount,
							ethersSigner,
							bftHeetoken
						);
						if (heeApproved >= amountApprovedHee) return true;
					} else {
						if (parseFloat(heeBalance) >= parseFloat(amount)) return true;
					}
				}
				if (tokenChoose === 'fiu') {
					if (approvedFiu) {
						const fiuApproved = await getAllowance(
							walletAccount,
							ethersSigner,
							bftFiuToken
						);
						if (fiuApproved >= amountApprovedFiu) return true;
					} else {
						if (parseFloat(fiuBalance) >= parseFloat(amount)) return true;
					}
				}
				if (
					tokenChoose === 'bnb' &&
					parseFloat(bnbBalance) >= parseFloat(amount)
				) {
					return true;
				}
			} else if (currentTab === TAB_NAME.fitterPass) {
				if (totalFitterPass >= parseFloat(amount)) {
					return true;
				}
			} else {
				return true;
			}
		}
		return false;
	};

	const handleCheckMail = async (handleSentToSpending: () => any) => {
		if (await handleCheckEmailAmount()) {
			handleSentToSpending();
		} else {
			spinner.handleChangeStatus(false);
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: (await checkEmail())
					? 'You balance is insufficient'
					: 'You should sing up on our app first to continue',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		}
	};

	const deposit = async (
		abiDetail: any,
		type: 'token' | 'box' | 'bnb' | 'shoes',
		tokenId?: string
	) => {
		spinner.handleChangeStatus(true);

		const checkSendWithToken = () => {
			if (approvedFiu && tokenChoose === 'fiu') {
				return amountApprovedFiu.toString();
			}
			if (approvedHee && tokenChoose === 'hee') {
				return amountApprovedHee.toString();
			}

			return amount;
		};

		try {
			const resDeposit =
				type === 'bnb'
					? await handleDepositBnb(ethersSigner, textEmail, amount)
					: await handleDeposit(
							ethersSigner,
							abiDetail.address,
							checkSendWithToken(),
							textEmail,
							type,
							tokenId
					  );

			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(
					resDeposit.hash
				);

				if (statusApprove?.status) {
					spinner.handleChangeStatus(false);
					updateBnbBalance();
					type === 'box' && getListBox();
					type === 'shoes' && getListShoes();
					if (currentTab === TAB_NAME.token) {
						if (tokenChoose === 'fiu') {
							const fiuApproved = await getAllowance(
								walletAccount,
								ethersSigner,
								bftFiuToken
							);

							if (fiuApproved > 0) {
								setAmountApprovedFiu(fiuApproved);
								setApprovedFiu(true);
								setStatusButtonSent(true);
							} else {
								setApprovedFiu(false);
								setAmountApprovedFiu(0);
								setStatusButtonSent(false);
							}
						}
						if (tokenChoose === 'hee') {
							const heeApproved = await getAllowance(
								walletAccount,
								ethersSigner,
								bftHeetoken
							);

							if (heeApproved > 0) {
								setAmountApprovedHee(heeApproved);
								setApprovedHee(true);
								setStatusButtonSent(true);
							} else if (heeApproved === 0) {
								setApprovedHee(false);
								setAmountApprovedHee(0);
								setStatusButtonSent(false);
							}
						}
						if (tokenChoose === 'bnb') {
							setStatusButtonSent(true);
						}
					} else {
						setStatusButtonSent(false);
					}
					setTextEmail('');
					setBoxChoose('');
					setShoeChoose('');
					setAmount('');
					popupNoti.handleToggleStatus({
						status: true,
						popupType: 'success',
						title: 'Send succeeded!',
						titleButton: 'OK',
						message:
							currentTab === TAB_NAME.token
								? null
								: `Please check the item in your inventory on beFITTER app ${
										currentTab === TAB_NAME.box ? 'for unboxing.' : ''
								  }`,
					});
					clearInterval(checkStatus);
				}
			}, 1000);
		} catch (error: any) {
			spinner.handleChangeStatus(false);
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: error.reason || 'Something went wrong. Please try again!',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		}
	};

	const handleApproveBox = async () => {
		console.log(123123123);
		spinner.handleChangeStatus(true);
		try {
			const resApprove = await handleApprove(
				boxChoose,
				ethersSigner,
				bftBox,
				'box'
			);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(
					resApprove.hash
				);
				if (statusApprove?.status) {
					spinner.handleChangeStatus(false);
					updateBnbBalance();
					clearInterval(checkStatus);
					setStatusButtonSent(true);
				}
			}, 1000);
		} catch (error: any) {
			spinner.handleChangeStatus(false);
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: error.reason || 'Something went wrong. Please try again!',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		}
	};

	const handleApproveToken = async () => {
		spinner.handleChangeStatus(true);
		const abiDetail = tokenChoose === 'fiu' ? bftFiuToken : bftHeetoken;
		try {
			const resApprove = await handleApprove(amount, ethersSigner, abiDetail);
			if (resApprove?.status) {
				spinner.handleChangeStatus(false);
				updateBnbBalance();
				setStatusButtonSent(true);
			}
		} catch (error: any) {
			spinner.handleChangeStatus(false);
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: error.reason || 'Something went wrong. Please try again!',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		}
	};

	const handleApproveShoes = async () => {
		spinner.handleChangeStatus(true);
		try {
			const resApprove = await handleApprove(
				shoesChoose,
				ethersSigner,
				bftShoeItem,
				'shoes'
			);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(
					resApprove.hash
				);
				if (statusApprove?.status) {
					spinner.handleChangeStatus(false);
					updateBnbBalance();
					clearInterval(checkStatus);
					setStatusButtonSent(true);
				}
			}, 1000);
		} catch (error: any) {
			spinner.handleChangeStatus(false);
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: error.reason || 'Something went wrong. Please try again!',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		}
	};

	const handleApproveFitterPass = async () => {
		spinner.handleChangeStatus(true);
		try {
			const resApprove = await handleApprove(
				amount,
				ethersSigner,
				beFITTERlockedPool,
				'fitterPass'
			);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(
					resApprove.hash
				);
				if (statusApprove?.status) {
					updateBnbBalance();
					clearInterval(checkStatus);
					setStatusButtonSent(true);
				}
			}, 1000);
		} catch (error: any) {
			popupNoti.handleToggleStatus({
				status: true,
				popupType: 'error',
				title: 'Error!',
				message: error.reason || 'Something went wrong. Please try again!',
				titleCustomColor: { '& p': { color: '#FF6F61' } },
				titleButton: 'Try again',
			});
		} finally {
			spinner.handleChangeStatus(false);
		}
	};

	const handleSentSpending = () => {
		const abiDetail = tokenChoose === 'fiu' ? bftFiuToken : bftHeetoken;
		if (currentTab === TAB_NAME.token) {
			tokenChoose === 'bnb'
				? deposit(abiDetail, 'bnb')
				: deposit(abiDetail, 'token');
		} else {
			currentTab === TAB_NAME.box
				? deposit(bftBox, 'box', boxChoose)
				: deposit(bftShoeItem, 'shoes', shoesChoose);
		}
	};

	const handleClickButton = async () => {
		popupNoti.handleToggleStatus({
			status: true,
			title: 'Sending item',

			message: (
				<Box>
					<TitleConfirm>
						Sending this item to <span>{textEmail}</span> on beFITTER?
					</TitleConfirm>
					<PopuBody>
						<Box>
							<Typography>Item</Typography>
							<Box>
								{currentTab === TAB_NAME.token
									? handleCheckAmount()
									: `#${currentTab === TAB_NAME.box ? boxChoose : shoesChoose}`}
								<img
									src={`assets/icons/${
										currentTab === TAB_NAME.token
											? tokenChoose === 'fiu'
												? 'fiu'
												: 'hee'
											: currentTab === TAB_NAME.box
											? 'box-classic'
											: 'shoe-standard'
									}.svg`}
								/>
							</Box>
						</Box>
						<MarketplaceButton
							title={'Confirm'}
							handleOnClick={handleSentSpending}
							customStyle={{ width: '100%', margin: '24px 0' }}
						/>
						<Cancel onClick={() => popupNoti.handleHidePopup()}>Cancel</Cancel>
					</PopuBody>
				</Box>
			),
		});
	};
	const checkStatusSendButton = () => {
		if (currentTab === TAB_NAME.token && tokenChoose && textEmail) {
			if (amount) return true;

			if (approvedFiu && amountApprovedFiu > 0) return true;
			if (approvedHee && amountApprovedHee > 0) return true;
		} else if (currentTab === TAB_NAME.box && boxChoose && textEmail) {
			return true;
		} else if (currentTab === TAB_NAME.shoe && shoesChoose && textEmail) {
			return true;
		} else if (currentTab === TAB_NAME.fitterPass && amount && textEmail) {
			return true;
		}
		return false;
	};

	const handleClickButtonSent = () => {
		if (statusButtonSent) {
			handleCheckMail(handleClickButton);
		} else {
			if (currentTab === TAB_NAME.token) {
				tokenChoose === 'bnb'
					? handleCheckMail(() => deposit(null, 'bnb'))
					: handleCheckMail(handleApproveToken);
			} else if (currentTab === TAB_NAME.fitterPass) {
				handleCheckMail(handleApproveFitterPass);
			} else {
				currentTab === TAB_NAME.box
					? handleCheckMail(handleApproveBox)
					: handleCheckMail(handleApproveShoes);
			}
		}
	};

	useEffect(() => {
		setAmount('');
		setTextEmail('');
	}, [currentTab]);

	useEffect(() => {
		async function getAllowanceToken() {
			if (tokenChoose === 'fiu') {
				const fiuApproved = await getAllowance(
					walletAccount,
					ethersSigner,
					bftFiuToken
				);
				if (fiuApproved > 0) {
					setApprovedFiu(true);
					setAmountApprovedFiu(fiuApproved);
					setStatusButtonSent(true);
				} else {
					setStatusButtonSent(false);
					setAmountApprovedFiu(0);
					setApprovedFiu(false);
				}
			} else if (tokenChoose === 'hee') {
				const heeApproved = await getAllowance(
					walletAccount,
					ethersSigner,
					bftHeetoken
				);
				if (heeApproved > 0) {
					setApprovedHee(true);
					setAmountApprovedHee(heeApproved);
					setStatusButtonSent(true);
				} else {
					setStatusButtonSent(false);
					setApprovedHee(false);
					setAmountApprovedHee(0);
				}
			} else if (!tokenChoose) {
				setStatusButtonSent(false);
			}
		}

		if (currentTab === TAB_NAME.token) {
			if (tokenChoose === 'bnb') {
				setStatusButtonSent(true);
			} else {
				getAllowanceToken();
			}
		} else {
			setStatusButtonSent(false);
		}
	}, [tokenChoose, currentTab, walletAccount, ethersSigner]);

	const handleCheckAmount = useCallback(() => {
		if (currentTab === TAB_NAME.token && tokenChoose === 'fiu') {
			if (approvedFiu) {
				return amountApprovedFiu;
			} else {
				return amount;
			}
		}

		if (currentTab === TAB_NAME.token && tokenChoose === 'hee') {
			if (approvedHee) {
				return amountApprovedHee;
			} else {
				return amount;
			}
		}

		return amount;
	}, [
		currentTab,
		tokenChoose,
		amount,
		approvedFiu,
		amountApprovedFiu,
		approvedHee,
		amountApprovedHee,
	]);

	const handleChangeMount = (mount: any): void => {
		if (currentTab === TAB_NAME.token && tokenChoose === 'fiu') {
			if (approvedFiu) {
				setAmountApprovedFiu(mount);
			} else {
				setAmount(mount);
			}
		}

		if (currentTab === TAB_NAME.token && tokenChoose === 'hee') {
			if (approvedHee) {
				setAmountApprovedHee(mount);
			} else {
				setAmount(mount);
			}
		}
		if (currentTab === TAB_NAME.token && tokenChoose === 'bnb') {
			setAmount(mount);
		}

		if (currentTab !== TAB_NAME.token) {
			setAmount(mount);
		}
	};

	return (
		<SendSpending>
			<BoxInput>
				<InputBottom>
					<Label>beFITTER email</Label>
					<CustomInput
						fullWidth
						required
						value={textEmail}
						placeholder={'Email'}
						onChange={(e: any) => setTextEmail(e.target.value)}
					/>
				</InputBottom>
				{(currentTab === TAB_NAME.token ||
					currentTab === TAB_NAME.fitterPass) && (
					<InputBottom>
						<Label>Amount to send</Label>
						<CustomInput
							fullWidth
							required
							type="number"
							value={handleCheckAmount()}
							placeholder={'Amount'}
							onChange={(e: any) => handleChangeMount(e.target.value)}
						/>
					</InputBottom>
				)}
				<ButtonSendSpending
					sx={{
						background: checkStatusSendButton()
							? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
							: '#E9EAEF',
					}}
					onClick={handleClickButtonSent}
					disabled={!checkStatusSendButton()}
				>
					{statusButtonSent ? 'Send to Spending' : 'Approve'}
				</ButtonSendSpending>
			</BoxInput>
			<Typography
				mt={2}
				sx={{
					...TEXT_STYLE(16, 700, '#ff8446'),
				}}
			>
				Don&apos;t forget to select your asset !
			</Typography>
		</SendSpending>
	);
};

const SendSpending = styled(Box)({
	marginTop: 16,
	padding: 16,
	background: '#F8F9FB',
	borderRadius: 16,
});
const BoxInput = styled(Box)({
	'@media (min-width: 992px)': {
		display: 'flex',
		alignItems: 'flex-end',
	},
});
const InputBottom = styled(Box)({
	marginBottom: 16,
	'@media (min-width: 992px)': {
		marginRight: 20,
		marginBottom: 0,
	},
});
const Label = styled(Typography)({
	...TEXT_STYLE(14, 500, '#5A6178'),
	marginBottom: 8,
});
const CustomInput = styled(InputBase)({
	'@media (min-width: 1280px)': {
		width: 275,
	},
	'& .MuiInputBase-input': {
		...TEXT_STYLE(14, 500, '#31373E'),
		padding: '10px 16px',
		borderRadius: 8,
		background: '#E9EAEF',
	},
});
const ButtonSendSpending = styled(Button)({
	padding: 8,
	borderRadius: 12,
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	color: '#ffffff',
	...TEXT_STYLE(16, 600),
	marginLeft: 'auto',
	textTransform: 'unset',
	width: '100%',
	'@media (min-width: 992px)': {
		width: 188,
	},
});
const TitleConfirm = styled(Typography)({
	...TEXT_STYLE(14, 500, '#5A6178'),
	'& span': {
		color: '#FF6D24',
	},
	marginBottom: 16,
});
const PopuBody = styled(Box)({
	'& > div': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& div': {
			display: 'flex',
			alignItems: 'center',
			...TEXT_STYLE(16, 700, '#31373E'),
			'& img': {
				marginLeft: 8,
			},
		},
	},
});
const Cancel = styled(Typography)({
	...TEXT_STYLE(16, 600, '#31373E'),
	cursor: 'pointer',
});
