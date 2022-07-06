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
} from '@mui/material';
import { ICON_MENU_DARK, ICON_MENU_WHITE, MENU_ITEMS } from '../../constants/common';
import { IconImage } from '../styled';

const MenuButton: React.FC<any> = ({ dark=true, customImage }) => {
	const ICON = dark ? ICON_MENU_DARK : ICON_MENU_WHITE;
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
				onMouseOver={(e) => {
					if (!isSm) handleOpen(e);
				}}
				sx={{paddingRight: '0 !important'}}
			>
				<Icon sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 } }}>
					<IconImage sx={{width: customImage ? customImage : 'internal'}} src={ICON} />
				</Icon>
			</IconButton>
			<ClickAwayListener onClickAway={handleClose}>
				<Fade in={open}>
					<Box sx={{ position: 'fixed', top: 80, left: 0, width: '100%' }}>
						<Container
							disableGutters
							sx={{
								py: 0,
								display: 'flex',
								justifyContent: 'flex-end',
								maxWidth: '1120px !important',
								padding: '0 16px !important'
							}}
						>
							<Box
								onMouseLeave={(e) => {
									if (!isSm) handleClose(e);
								}}
								sx={{
									position: 'relative',
									width: 220,
									height: 188,
									marginRight: '16px',
                  marginTop: '-20px'
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										background: '#FFF',
										width: '100%',
										height: '100%',
										backdropFilter: 'blur(24px)',
										borderRadius: '12px',
									}}
								>
									<Stack
										spacing={0}
										alignItems="center"
										justifyContent="center"
										sx={{ height: '100%' }}
									>
										{MENU_ITEMS.map(({ title, href }) => (
											<Link href={href} key={title}>
												<Button
													disabled={!href}
													variant="text"
													href={href}
													target={'_blank'}
													sx={{
														fontFamily: 'Electrofied',
														fontStyle: 'italic',
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
															'0%,100%': { transform: `translateX(0)` },
															'30%': { transform: 'translateX(-20px)' },
															'60%': { transform: 'translateX(20px)' },
															'90%': { transform: 'translateX(-20px)' },
														},
													}}
												>
													<span className="text-in-button">{title}</span>
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

export default MenuButton;
