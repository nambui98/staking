import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	Grid,
	Stack,
	Icon,
	Button,
	Typography,
	Slide,
	InputBase,
	Chip,
	CircularProgress,
	Backdrop,
	styled,
	useMediaQuery,
	IconButton,
} from '@mui/material';

import { LOGO, BG1, BG2, ICON, EMAIL, BUTTON } from '../../constants/footer';
import { IconImage } from '../styled';

const LIMIT_UPLOAD_SIZE = 25; // MB

function isSupportedFile(file: any) {
	return (
		file.size &&
		file.type &&
		file.type.includes('image/')
		// (file.type.includes('pdf') ||
		// 	file.type.includes('doc') ||
		// 	file.type.includes('video/') ||
		// 	file.type.includes('image/'))
	);
}

const SupportInput = styled(InputBase)({
	borderRadius: '16px',
	border: '1px solid #E9EAEF',
	background: '#FFF',
	'& .MuiInputBase-input': {
		fontSize: 16,
		fontWeight: 500,
		color: '#31373E',
		padding: '20px 24px',
	},
});

const DocumentsDownloadButton: React.FC<any> = () => (
	<Button
		variant="text"
		// href={BUTTON.DOCS.href}
		startIcon={
			<Icon>
				<IconImage src={ICON.DOWNLOAD} />
			</Icon>
		}
		sx={{
			'&:hover': {
				textDecoration: 'underline',
				background: 'transparent',
			},
		}}
	>
		{BUTTON.DOCS.title}
	</Button>
);

const DocumentsUploadButton: React.FC<any> = ({ onFileChange }) => (
	<Button
		variant="text"
		component="label"
		startIcon={
			<Icon>
				<IconImage src={ICON.UPLOAD} />
			</Icon>
		}
		sx={{
			color: '#55C8FC',
			fontSize: 14,
			fontWeight: 500,
			textTransform: 'none',
			pl: 0.25,
			'&:hover': {
				textDecoration: 'underline',
				background: 'transparent',
			},
		}}
	>
		{BUTTON.ATTACH.title}
		<input
			type="file"
			hidden
			multiple
			accept="image/*"
			onChange={onFileChange}
		/>
	</Button>
);

const MediaButton: React.FC<any> = () => (
	<Button
		variant="text"
		href={BUTTON.MEDIA.href}
		target="_blank"
		startIcon={
			<Icon>
				<IconImage src={ICON.DOWNLOAD} />
			</Icon>
		}
		sx={{
			'&:hover': {
				textDecoration: 'underline',
				background: 'transparent',
			},
		}}
	>
		{BUTTON.MEDIA.title}
	</Button>
);

const SupportButton: React.FC<any> = ({ onClick }) => (
	<Button
		variant="outlined"
		onClick={onClick}
		sx={{
			width: { xs: '100%', sm: 'unset' },
			borderRadius: '16px',
			'&:hover': {
				background: '#fff',
				color: '#000',
			},
		}}
	>
		{BUTTON.SUPPORT.title}
	</Button>
);

const SendButton: React.FC<any> = ({ onClick }) => (
	<Button
		variant="outlined"
		fullWidth
		onClick={onClick}
		sx={{
			border: '1px solid #FF6D24',
			borderRadius: '16px',
			background: '#FFF',
			color: '#FF6D24',
			fontSize: 16,
			fontWeight: 500,
			py: 2,
			px: 2,
			'&:hover': {
				background: '#FF6D24',
				color: '#FFF',
			},
		}}
	>
		{BUTTON.SEND.title}
	</Button>
);

const SupportForm: React.FC<any> = ({ handleClose }) => {
	const [showBackdrop, setShowBackdrop] = React.useState<boolean>(false);
	const [textEmail, setTextEmail] = React.useState<string>('');
	const [textDesc, setTextDesc] = React.useState<string>('');
	const [textError, setTextError] = React.useState<string>('');
	const [attachFiles, setAttachFiles] = React.useState<any>([]);

	const handleFileChange = (event: any) => {
		const files = event.target.files;
		let totalSize = attachFiles
			.map((el: any) => el.size)
			.reduce((pre: any, cur: any) => pre + cur, 0);
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (!isSupportedFile(file)) {
				setTextError('Unsupported media type');
				setTimeout(() => setTextError(''), 2000);
				return;
			}
			totalSize += file.size;
			if (totalSize > LIMIT_UPLOAD_SIZE * 1024 * 1024) {
				setTextError('Payload too large');
				setTimeout(() => setTextError(''), 2000);
				return;
			}
		}
		setAttachFiles([...attachFiles, ...files]);
	};

	const handleRemoveFile = (fileIndex: number) => {
		setAttachFiles(
			attachFiles.filter((el: any, idx: number) => idx !== fileIndex)
		);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!textDesc || !textEmail) {
			setTextError('All fields are required');
			setTimeout(() => setTextError(''), 2000);
			return;
		}
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(textEmail)) {
			setTextError('Invalid email format');
			setTimeout(() => setTextError(''), 2000);
			return;
		}
		setShowBackdrop(true);
		const formData = new FormData();
		formData.append('email', textEmail);
		formData.append('desc', textDesc);
		for (let i = 0; i < attachFiles.length; i++) {
			formData.append(`attachment[${i}]`, attachFiles[i]);
		}
		const response = await fetch('/api/support', {
			method: 'POST',
			body: formData,
		});
		setShowBackdrop(false);
		// setShowSnack(true);
		setTextEmail('');
		setTextDesc('');
		setAttachFiles([]);
		handleClose();
	};

	return (
		<Box
			component="form"
			sx={{
				position: 'relative',
				width: '100%',
				background: '#FFFFFF',
				borderRadius: '16px',
				border: '1px solid #FF6D24',
				px: 3,
				py: 3,
			}}
		>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<IconButton
				onClick={handleClose}
				sx={{
					width: 24,
					height: 24,
					position: 'absolute',
					top: 24,
					right: 24,
				}}
			>
				<Icon>
					<IconImage src={ICON.CLOSE} />
				</Icon>
			</IconButton>
			<Typography
				fontSize={24}
				fontWeight={500}
				color="#31373E"
				align="center"
				mb={3}
			>
				Support request
			</Typography>
			<SupportInput
				fullWidth
				placeholder="Your email address"
				value={textEmail}
				onChange={(e: any) => setTextEmail(e.target.value)}
				sx={{ mb: 1 }}
			/>
			<SupportInput
				fullWidth
				placeholder="Just ask us anything"
				multiline
				rows={4}
				value={textDesc}
				onChange={(e: any) => setTextDesc(e.target.value)}
				sx={{ mb: 1 }}
			/>
			<DocumentsUploadButton onFileChange={handleFileChange}/>
			{textError && <Typography
				fontSize={16}
				fontWeight={500}
				color="#FF6F61"
				mt={0.5}
				mb={2}
			>
				{textError}
			</Typography>}
			<Grid container mb={2} spacing={1}>
				{attachFiles.map((el: any, idx: number) => (
					<Grid item key={idx} xs={'auto'}>
						<Chip
							variant="outlined"
							label={el.name.slice(0, 3) + '...' + el.name.slice(-7)}
							onDelete={() => handleRemoveFile(idx)}
						/>
					</Grid>
				))}
			</Grid>
			<SendButton onClick={handleSubmit} />
		</Box>
	);
};

const MainFooter: React.FC<any> = ({ sxProps, children }) => {
	const isTablet = useMediaQuery('(max-width:960px)');
	const [showForm, setShowForm] = React.useState<boolean>(false);

	const handleShowForm = () => {
		setShowForm(true);
	};

	const handleHideForm = () => {
		setShowForm(false);
	};

	return (
		<Box
			component={'footer'}
			sx={{
				background: '#272B3F',
				position: 'relative',
				height: { xs: 'unset', md: 215 },
			}}
		>
			<Slide direction="up" in={showForm} mountOnEnter unmountOnExit>
				<Box
					sx={{
						position: 'absolute',
						right: 8,
						bottom: '104%',
						width: 343,
					}}
				>
					<SupportForm handleClose={handleHideForm} />
				</Box>
			</Slide>
			<Box
				sx={{
					position: 'absolute',
					top: 20,
					left: { xs: '-40%', sm: '8.6%' },
				}}
			>
				<img src={BG1} width={'auto'}></img>
			</Box>
			{!isTablet && (
				<Box
					sx={{
						position: 'absolute',
						bottom: 9.25,
						right: '14.385%',
					}}
				>
					<img src={BG2} width={'auto'}></img>
				</Box>
			)}
			<Container
				sx={{
					position: 'relative',
				}}
			>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'space-between' }}
					mt={5}
				>
					<Link href={'/'}>
						<Box
							component={'a'}
							sx={{
								display: 'flex',
								alignItems: 'center',
								cursor: 'pointer',
							}}
						>
							<img src={LOGO} alt="Logo" width={'auto'} height={48} />
						</Box>
					</Link>
					{!isTablet && (
						<Stack direction="row" spacing={4}>
							<DocumentsDownloadButton />
							<MediaButton />
							<SupportButton onClick={handleShowForm} />
						</Stack>
					)}
				</Stack>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'start' }}
					ml={{ xs: 0, md: 3 }}
					mt={4}
					mb={{ xs: 4, md: 0 }}
					spacing={1}
				>
					<Icon>
						<IconImage src={ICON.SMS} />
					</Icon>
					<Typography
						fontSize={16}
						color="#fff"
						sx={{
							'&:hover': {
								textDecoration: 'underline',
							},
						}}
					>
						{EMAIL}
					</Typography>
				</Stack>
				{isTablet ? (
					<>
						<Stack direction="row" spacing={4} justifyContent="center">
							<DocumentsDownloadButton />
							<MediaButton />
						</Stack>
						<Stack spacing={2} alignItems="center" mt={4}>
							<SupportButton onClick={handleShowForm} />
							<Box
								sx={{ width: '100%', height: 1.5, background: '#4E5472' }}
							></Box>
							<Typography fontSize={14} color="#898E9E" pb={3}>
								Copyright @2022 beFITTER
							</Typography>
						</Stack>
					</>
				) : (
					<Stack spacing={2} mt={2}>
						<Box
							sx={{ width: '100%', height: 1.5, background: '#4E5472' }}
						></Box>
						<Typography fontSize={14} color="#898E9E">
							Copyright @2022 beFITTER
						</Typography>
					</Stack>
				)}
			</Container>
		</Box>
	);
};

export default MainFooter;
