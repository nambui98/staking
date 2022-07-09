import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	IconButton,
	Stack,
	Icon,
	Fade,
	Button,
	ClickAwayListener,
	Theme,
	useMediaQuery,
	styled,
} from '@mui/material';
import { ICON_MENU_DARK, ICON_MENU_WHITE, MENU_ITEMS_HOME, MENU_ITEMS_MOBILE } from '../../constants/common';
import { IconImage } from '../styled';
import { toast } from 'react-toastify';

const MenuButton: React.FC<any> = ({ dark = true, customImage }) => {
	const ICON = dark ? ICON_MENU_DARK : ICON_MENU_WHITE;
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isMobile = useMediaQuery('(max-width: 767px)');

	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const [open, setOpen] = React.useState<boolean>(false);
	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);

	const handleOpen = (event: Event | React.SyntheticEvent) => {
		setOpen(true);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	React.useEffect(() => {
		prevOpen.current = open;
	}, [open]);

	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}
		prevOpen.current = open;
	}, [open, prevOpen]);

	const handleCommingSoon = () => {
		toast('COMING SOON!', {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	return (
		<>
			<IconButton
				ref={anchorRef}
				onClick={handleToggle}
				onMouseOver={(e) => {
					if (!isSm) handleOpen(e);
				}}
				sx={{ paddingRight: '0 !important', opacity: open && isMobile ? 0 : '1' }}
			>
				<Icon sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
					<IconImage sx={{ width: customImage ? customImage : 'internal' }} src={ICON} />
				</Icon>
			</IconButton>
			<ClickAwayListener onClickAway={handleClose}>
				<Fade in={open}>
					<Box sx={{ position: 'fixed', top: 90, left: 0, width: '100%' }}>
						<Container
							disableGutters
							sx={{
								py: 0,
								display: 'flex',
								justifyContent: 'flex-end',
								maxWidth: '1120px !important',
								padding: isMobile ? 0 : '0 16px !important'
							}}
						>
							<Box
								onMouseLeave={(e) => {
									if (!isSm) handleClose(e);
								}}
								sx={{
									position: 'relative',
									width: isMobile ? '100vw' : 220,
									height: isMobile ? '100vh' : 188,
									marginRight: isMobile ? 0 : '-16px',
									marginTop: isMobile ? 0 : '-20px'
								}}
							>
								<Inner
									sx={{
										position: isMobile ? 'fixed' : 'absolute',
										borderRadius: isMobile ? 0 : '12px',
										background: isMobile ? 'internal' : '#ffffff',
										width: '100%',
										height: '100%',
										top: isMobile ? 0 : 'unset',
									}}
								>
									{isMobile && <CloseIcon onClick={handleClose}><img src={'assets/icons/close.svg'} /></CloseIcon>}
									<Stack
										spacing={0}
										alignItems="center"
										justifyContent="center"
										sx={{ height: '100%' }}
									>
										{(isMobile ? MENU_ITEMS_MOBILE : MENU_ITEMS_HOME).map(({ title, href }) => (
											href !== '#' ? <Link href={href} key={title} target="_blank">
												<ButtonLink
													disabled={!href}
													variant="text"
													href={href}													
												>
													<span className="text-in-button">{title}</span>
												</ButtonLink>
											</Link> : <ButtonLink onClick={handleCommingSoon}
												variant="text"
											>
												<span className="text-in-button">{title}</span>
											</ButtonLink>
										))}
									</Stack>
								</Inner>
							</Box>
						</Container>
					</Box>
				</Fade>
			</ClickAwayListener>
		</>
	);
};

export default MenuButton;

const ButtonLink = styled(Button)({
	fontWeight: 600,
	fontSize: 20,
	paddingRight: '16px',
	color: '#31373E',
	'&:hover': {
		color: '#FF6D24',
		'.text-in-button': {
			animation: 'shake .15s linear',
		},
	},
	marginLeft: 'auto',
	'@keyframes shake': {
		'0%,100%': { transform: `translateY(0)` },
		'30%': { transform: 'translateY(-10px)' },
		'60%': { transform: 'translateY(10px)' },
		'90%': { transform: 'translateY(-10px)' },
	},
	'@media (max-width: 767px)': {
		marginRight: 'auto',
		paddingRight: 11
	}
})
const Inner = styled(Box)({
	'@media (max-width: 767px)': {
		'&:before': {
			content: `''`,
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			background: '#ffffff',
			opacity: '0.8',
			position: 'absolute',
		}
	}
})
const CloseIcon = styled(Box)({
	position: 'absolute',
	top: 16,
	right: 16,
	'& img': {
		width: 32,
		height: 32
	}
})
