import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	IconButton,
	Icon,
	Button,
	Stack,
	Menu,
	MenuItem,
	Fade,
	ClickAwayListener,
	Theme,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { toast } from 'react-toastify';
import { IconImage } from '../styled';
import {
	LOGO,
	MENU,
	HOME_LOGO,
	HOME_BG_LOGO,
	HOME_MENU,
	ITEMS,
} from '../../constants/header';

const Logo: React.FC<any> = () => {
	return (
		<Link href={'/'}>
			<Box
				component={'a'}
				sx={{
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
				}}
			>
				<img src={LOGO} alt="Logo" width={'auto'} height={40} />
			</Box>
		</Link>
	);
};

const LogoWithBackground: React.FC<any> = ({ isSm, isXs }) => {
	return (
		<Link href={'/'}>
			<Box
				component={'a'}
				sx={{
					display: 'flex',
					// alignItems: 'center',
					cursor: 'pointer',
					width: isXs ? 357 / 2.5 : isSm ? 357 / 2 : 357,
					height: isXs ? 165 / 2.5 : isSm ? 165 / 2 : 165,
					backgroundImage: `url(${HOME_BG_LOGO})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					pt: { xs: 1, md: 3 },
					pl: { xs: 3, md: 6 },
				}}
			>
				<img
					src={HOME_LOGO}
					alt="Logo"
					width={'auto'}
					height={isXs ? 24 : isSm ? 32 : 64}
				/>
			</Box>
		</Link>
	);
};

const MenuButton: React.FC<any> = ({ isSm, icon=MENU }) => {
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

	return (
		<>
			<IconButton
				ref={anchorRef}
				onClick={handleToggle}
				onMouseOver={(e) => { if (!isSm) handleOpen(e); }}
			>
				<Icon sx={{ width: {xs: 32, sm: 48}, height: {xs: 32, sm: 48} }}>
					<IconImage src={icon} />
				</Icon>
			</IconButton>
			<ClickAwayListener onClickAway={handleClose}>
				<Fade in={open}>
					<Box
						sx={{ position: 'fixed', top: 80, left: 0, width: '100%' }}
					>
						<Container
							disableGutters
							sx={{
								py: 0,
								display: 'flex',
								justifyContent: 'flex-end',
								maxWidth: { xl: 'unset' },
								px: { xl: 10 },
							}}
						>
							<Box
								onMouseLeave={(e) => { if (!isSm) handleClose(e); }}
								sx={{
									position: 'relative',
									width: 192,
									height: 176,
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										width: 192,
										height: 176,
										borderRadius: '16px',
										border: '2px solid #FFFFFF',
										top: 8,
										left: 8,
									}}
								></Box>
								<Box
									sx={{
										position: 'absolute',
										width: 192,
										height: 176,
										background: '#FFF',
										opacity: 0.8,
										backdropFilter: 'blur(24px)',
										borderRadius: '16px',
									}}
								>
									<Stack
										spacing={0}
										alignItems="center"
										justifyContent="center"
										sx={{ height: '100%' }}
									>
										{ITEMS.map(({ title, href }) => (
											<Link href={href} key={title}>
												<Button
													disabled={!href}
													variant="text"
													href={href}
													target={'_blank'}
													sx={{
														fontFamily: 'Electrofied',
														fontStyle: 'italic',
														fontWeight: 900,
														fontSize: 18,
														color: '#31373E',
													}}
												>
													{title}
												</Button>
											</Link>
										))}
									</Stack>
								</Box>
							</Box>
						</Container>
					</Box>
				</Fade>
			</ClickAwayListener>
		</>
	);
};

const WhiteMenuButton: React.FC<any> = ({ isXs }) => {
	return isXs ? (
		<IconButton>
			<Icon sx={{ width: 48, height: 48 }}>
				<IconImage src={HOME_MENU} />
			</Icon>
		</IconButton>
	) : (
		<Button
			href={ITEMS[0].href}
			target="_blank"
			sx={{
				height: 53,
				fontFamily: 'Electrofied',
				fontSize: 20,
				color: '#fff',
				px: 3,
				py: 2,
				background: 'rgba(255, 255, 255, 0.2)',
				border: '2px solid #FFFFFF',
				boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.5)',
				'&:hover': {
					background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
					color: '#fff',
					border: 'none',
					px: '26px',
					py: '18px',
				},
			}}
		>
			{ITEMS[0].title}
		</Button>
	);
};

const HomeHeader: React.FC<any> = ({ sxProps, children }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const stickTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});

	return (
		<Box component={'header'}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: stickTrigger ? '#fff' : 'transparent',
					transition: 'all ease 0.2s ',
				}}
			>
				<Toolbar
					sx={{
						height: stickTrigger ? 80 : 'unset',
						borderBottom: stickTrigger ? '1px solid #E9EAEF' : 'unset',
					}}
				>
					<Container
						disableGutters
						sx={{
							py: 0,
							pt: stickTrigger ? 'unset' : 3,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: stickTrigger ? 'center' : 'flex-start',
							maxWidth: { xl: 'unset' },
							px: { xl: 7 },
						}}
					>
						{stickTrigger ? (
							<>
								<Logo />
								<MenuButton isSm={isSm} />
							</>
						) : (
							<>
								<LogoWithBackground isSm={isSm} isXs={isXs} />
								{/* <WhiteMenuButton isXs={isXs} /> */}
								<MenuButton isSm={isSm} icon={HOME_MENU} />
							</>
						)}
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HomeHeader;
