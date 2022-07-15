import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide, Stack, styled, Typography } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import AppStoreButton from "../../components/buttons/AppStoreButton";
import AppStoreButtonNew from "../../components/buttons/AppStoreButtonNew";
import { TEXT_STYLE } from "../../styles/common/textStyles";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface IProps {
  statusPopup: boolean;
  handleToggleStatusPopup: (status: boolean) => void;
}

export const APP = {
	POSTER: 'assets/home-app.png',
	SUBTITLE: 'Make healthy lifestyle',
	TITLE: 'irresistible',
	TITLE_BG: 'assets/backgrounds/home-app.png',
	DESC: 'beFITTER is a web3 fitnessfi and socialfi app that aims to build a healthier ecosystem helping users balance their life, improve mental & physical health, gain achievements and still get monetary incentives.',
	BUTTON: [
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'App Store',
			icon: 'assets/logo/apple.png',
			href: 'https://testflight.apple.com/join/7ZprWPng',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'Google Play',
			icon: 'assets/logo/gplay.png',
			href: 'https://play.google.com/store/apps/details?id=io.befitter.app',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download for',
			title: 'Wearable',
			icon: 'assets/logo/watch.svg',
			href: '',
		},
	],
};

export const PopupApp: React.FC<IProps> = ({statusPopup, handleToggleStatusPopup}) => {
  return (
    <Wrap>
      <BoxPopup
        open={statusPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleToggleStatusPopup(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <IconClose onClick={() => handleToggleStatusPopup(false)}><img src={'assets/icons/close-fill.svg'} /></IconClose>
          <Title>GET <span>beFITTER</span> APP</Title>
          <BoxButton container spacing={2}>
            {APP.BUTTON.map((el, idx) => (
              <ButtonItem key={idx} item xs={6} lg={4}>
                <AppStoreButtonNew
                  background={idx === 2}
                  disabled={!el.href}
                  subtitle={el.href ? el.subtitle : el.subtitle0}
                  title={el.title}
                  icon={el.icon}
                  href={el.href}
                />
              </ButtonItem>
            ))}
          </BoxButton>
        </DialogContent>
      </BoxPopup>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const BoxButton = styled(Grid)({
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    alignItems: 'center'
  }
})
const ButtonItem = styled(Grid)({
  '@media (max-width: 767px)': {
    paddingLeft: '0 !important',
    paddingTop: '0 !important',
    width: 193,
    marginBottom: 16,
    maxWidth: 'initial',
  }
})
const BoxPopup = styled(Dialog)({
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
  borderRadius: 12,
  '& .MuiPaper-root': {
    minWidth: 'calc(100% - 32px)',
    borderRadius: 12,
    '@media (min-width: 992px)': {
      minWidth: 698,
    }
  },
  '& .MuiDialogContent-root': {
    padding: 40
  }
})
const Title = styled(Typography)({
  ...TEXT_STYLE(24, 700, '#31373E'),
  textAlign: 'center',
  marginBottom: 24,
  '& span': {
    color: '#FF6D24'
  },
  '@media (max-width: 767px)': {
    marginBottom: 40
  }
})
const IconClose = styled(Box)({
  position: 'absolute',
  right: 10,
  top: 10,
  cursor: 'pointer',
})