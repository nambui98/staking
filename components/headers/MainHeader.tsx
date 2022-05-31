import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	Stack,
	Icon,
	Fade,
	Button,
	ClickAwayListener,
	Theme,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { IconImage } from '../styled';

import { LOGO, MENU, ITEMS } from '../../constants/header';

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

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	function handleOpenMenu() {}

	return (
		<Box component={'header'} mb={10}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: '#fff',
				}}
			>
				<Toolbar sx={{ height: 80, borderBottom: '1px solid #E9EAEF' }}>
					<Container
						disableGutters
						sx={{
							py: 0,
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: { xl: 1920 - 240 },
						}}
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
								<img src={LOGO} alt="Logo" width={'auto'} height={40} />
							</Box>
						</Link>
						{/* <IconButton onClick={handleOpenMenu}>
							<Icon sx={{ width: 48, height: 48 }}><IconImage src={MENU} /></Icon>
						</IconButton> */}
						<MenuButton isSm={isSm} />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;
