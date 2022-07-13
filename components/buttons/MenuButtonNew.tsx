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
import { TEXT_STYLE } from '../../styles/common/textStyles';

const MenuButton: React.FC<any> = ({ dark = true, customImage }) => {
	const ICON = dark ? ICON_MENU_DARK : ICON_MENU_WHITE;
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isMobile = useMediaQuery('(max-width: 767px)');
	const isMobile1140 = useMediaQuery('(max-width: 1140px)')

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
				sx={{ paddingRight: '0 !important', opacity: open && isMobile1140 ? 0 : '1' }}
			>
				<Icon sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
					<IconImage sx={{ width: customImage ? customImage : 'internal' }} src={'assets/icons/menu_dark.png'} />
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
								maxWidth: 'calc(100% - 32px) !important',
								padding: isMobile1140 ? 0 : '0 16px !important',
								'@media (min-width: 1500px)': {
									maxWidth: 'calc(100% - 240px) !important',
								}
							}}
						>
							<Box
								onMouseLeave={(e) => {
									if (!isSm) handleClose(e);
								}}
								sx={{
									position: 'relative',
									width: isMobile1140 ? '100vw' : 220,
									height: isMobile1140 ? '100vh' : 188,
									marginRight: isMobile1140 ? 0 : '-16px',
									marginTop: isMobile1140 ? 0 : '-20px'
								}}
							>
								<Inner
									sx={{
										position: isMobile1140 ? 'fixed' : 'absolute',
										borderRadius: isMobile1140 ? 0 : '12px',
										background: isMobile1140 ? 'unset' : '#ffffff',
										width: '100%',
										height: '100%',
										top: isMobile1140 ? 0 : 10,
										left: isMobile1140 ? 0 : 'unset'
									}}
								>
									{isMobile1140 && <CloseIcon onClick={handleClose}><img src={'assets/icons/close.svg'} /></CloseIcon>}
									<Stack
										spacing={0}
										alignItems="center"
										justifyContent="center"
										sx={{ height: isMobile1140 ? '100vh' : '100%' }}
									>
										{(isMobile1140 ? MENU_ITEMS_MOBILE : MENU_ITEMS_HOME).map(({ title, href }) => (
											href !== '#' ? <Link href={href} key={title} target="_blank">
												<ButtonLink
													disabled={!href}
													variant="text"
													href={href}
												>
													<Box sx={hover}>
														<div>{title}</div>
														<div>{title}</div>
													</Box>
												</ButtonLink>
											</Link> : <ButtonLink onClick={handleCommingSoon}
												variant="text"
											>
												<div>{title}</div>
												<div>{title}</div>
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

const hover = {
	padding: '0px 16px',
	borderRadius: '12px',
	marginRight: 16,
	...TEXT_STYLE(20, 600, '#FFF'),
	fontFamily: 'BeVietnamPro',
	textTransform: 'uppercase',
	color: '#31373E',
	cursor: 'pointer',
	overflow: 'hidden',
	transition: 'all .4s',
	'& div': {
		transition: 'all .3s',
		'&:last-child': {
			opacity: 0,
			position: 'absolute',
		}
	},
	'&:last-of-type': {
		marginRight: 0
	},
	'&:hover div': {
		transform: "translateY(-100%)",
		color: '#FF6D24',
		'&:last-child': {
			opacity: 1,
		},
		'&:first-child': {
			opacity: 0,
		}
	},
}
const ButtonLink = styled(Button)({
})
const Inner = styled(Box)({
	'@media (max-width: 1140px)': {
		'&:before': {
			content: `''`,
			width: '100vw',
			height: '100vh',
			top: 0,
			left: 0,
			background: '#ffffff',
			opacity: '0.8',
			position: 'fixed',
		}
	}
})
const CloseIcon = styled(Box)({
	position: 'absolute',
	top: 35,
	right: 24,
	'& img': {
		width: 32,
		height: 32
	}
})
