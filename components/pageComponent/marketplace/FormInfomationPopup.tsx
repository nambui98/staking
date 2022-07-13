import { Backdrop, Box, Button, ButtonProps, CircularProgress, FormControl, InputBase, InputLabel, MenuItem, Select, Stack, styled, Typography } from "@mui/material"
import React, { useState } from "react"
import { Popup } from "../../popup"
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import { MARKETPLACE_IMAGE, SHEET_NAME } from "../../../constants/marketplace";
import { TEXT_STYLE } from "../../../styles/common/textStyles";
import { RECAPTCHA_SITE_KEY } from "../../../const";
import { checkVerifyEmail } from "../../../libs/apis/marketplace";
import CountryData from '../../../constants/countries/countries.json';
import { MarketplaceService } from "../../../services/user.service";
import { useWalletContext } from "../../../contexts/WalletContext";

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
  handleClickButton?: () => any
  titleButton?: string
  sx?: any
}


export const FormInfomationPopup: React.FC<IProps> = ({ status, handleToggleStatus, titleButton, handleClickButton, sx }) => {
  const {walletAccount} = useWalletContext();
  const [textName, setTextName] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textEmailCheck, setTextEmailCheck] = useState('');
  const [textEmailError, setTextEmailError] = useState(false);
  const [textCountry, setTextCountry] = useState('');
  const [textTwitter, setTextTwitter] = useState('');
  const [textDiscord, setTextDiscord] = useState('');
  const [textTelegram, setTextTelegram] = useState('');
  const [textFacebook, setTextFacebook] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const [statusForm, setStatusForm] = useState(false);
  const [errorName, setErrorName] = useState(false);

  const handleSubmit = async () => {
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(format.test(textName)){
      return setErrorName(true)
    }

    try {
      setShowBackdrop(true);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          walletAddress: walletAccount,
          name: textName,
          email: textEmail,
          country: textCountry,
          twitter: textTwitter,
          discord: textDiscord,
          telegram: textTelegram,
          facebook: textFacebook,
          captcha: captchaToken,
          sheetName: SHEET_NAME.data1
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShowBackdrop(false);
      if (response.ok) {
        setStatusForm(true)
        setErrorName(false)
        MarketplaceService.setStatusPopupGetBonus(true)
      } else {
        const error = await response.json();
        throw new Error(error.message)
      }
    } catch (error: any) {
      alert(error?.message || "Something went wrong");
    } finally {
      setTextName('')
      setTextEmail('');
      setTextCountry('');
      // Reset the reCAPTCHA when the request has failed or succeeded
      // so that it can be executed again if user submits another email.
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        // recaptchaRef.current.execute();
      } else {
        window.location.reload();
      }
    }
  };

  const onReCAPTCHAChange = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    setCaptchaToken(captchaCode);
  }

  const handleCheckStatusSend = () => {
    if(textName && textEmail && textCountry && captchaToken) {
      return true
    }
    return false
  }

  const handleVerifyEmail = async () => {
    setShowBackdrop(true);
    if(textEmailCheck){
      try {
        const res = await checkVerifyEmail(textEmailCheck)
        setShowBackdrop(false);
        if(res?.data?.data.exist){
          setTextEmail(textEmailCheck)
        } else {
          setTextEmailError(true)
          setTextEmail('')
        }
      } catch (error) {
        setShowBackdrop(false);
      }
    }
  }
  return (
    <Popup title="" status={status} handleToggle={() => {handleToggleStatus(false); setStatusForm(false)}} sx={customPadding} titleButton={titleButton} handleClickButton={handleClickButton}>
      <Wrap>
        <ImageTop><img src={MARKETPLACE_IMAGE.boxShoeToken} /></ImageTop>
        <Title>{statusForm ? 'Your information is sent successfully! Don`t forget to join the Mainnet to receive your BONUS!' : 'Fill your information to receive BONUS gifts from beFITTER for the Mainnet.'}</Title>
        {errorName && <TextError sx={{color: '#FF6F61', textAlign: 'center', marginLeft: '-14px'}}>Please try again</TextError>}
        {!statusForm && <BoxForm variant="standard">
        
          <FormItem>
            <Label>Name <span>*</span></Label>
            <CustomInput
              fullWidth
              inputProps={{maxLength: '60'}}
              required
              value={textName}
              onChange={(e) => setTextName(e.target.value)}
            />
            {errorName && <TextError sx={{color: '#FF6F61'}}>You should not contain any special characters</TextError>}
          </FormItem>
          <FormItem>
            <Label>beFITTER{`’`}s account <span>*</span></Label>
            <Box sx={{ position: 'relative' }}>
              <CustomInput
                fullWidth
                required
                value={textEmailCheck}
                onChange={(e) => setTextEmailCheck(e.target.value)}
                sx={{'& input': {paddingRight: '55px !important'}}}
              />
              <VerifyText onClick={() => textEmailCheck && handleVerifyEmail()} sx={{color: textEmailCheck ? '#55C8FC' : '#A7ACB8'}}>Verify</VerifyText>
            </Box>
            {(textEmailError || textEmail) && <TextError sx={{color: textEmail ? '#118511c7' : '#FF6F61'}}>{textEmail ? 'Valid' : 'Invalid'} beFITTER`s email!</TextError>}
          </FormItem>
          <FormItem>
            <Label>Country <span>*</span></Label>
            <BoxSelect
              value={textCountry}
              disableUnderline
              onChange={(e) => setTextCountry(e.target.value as string)}
            >
              {CountryData?.data?.map((item, index) => (
                <MenuItem key={index} value={item.name} sx={{...TEXT_STYLE(14, 500)}}>{item.name}</MenuItem>
              ))}
            </BoxSelect>
          </FormItem>
          <FormItem>
            <Label>Twitter username</Label>
            <CustomInput
              fullWidth
              required
              value={textTwitter}
              onChange={(e) => setTextTwitter(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Discord ID</Label>
            <CustomInput
              fullWidth
              required
              value={textDiscord}
              onChange={(e) => setTextDiscord(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Telegram username</Label>
            <CustomInput
              fullWidth
              required
              value={textTelegram}
              onChange={(e) => setTextTelegram(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Facebook link</Label>
            <CustomInput
              fullWidth
              required
              value={textFacebook}
              onChange={(e) => setTextFacebook(e.target.value)}
            />
          </FormItem>
          <Box>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
          </Box>
          <ButtonSend active={handleCheckStatusSend()} disabled={handleCheckStatusSend() ? false : true} onClick={handleSubmit}>Send</ButtonSend>
        </BoxForm>}
      </Wrap>
      <Backdrop
        sx={{ color: '#FF6D24', zIndex: 2000 }}
        className="backdrop-loading"
        open={showBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Popup>
  )
}

const Wrap = styled(Stack)({
  position: 'relative',
})
type tabItemProps = ButtonProps & {
  active: boolean
}
const ButtonSend = styled(Button)((props: tabItemProps) => ({
  textTransform: 'capitalize',
  padding: '16px',
  marginTop: '24px',
  borderRadius: 8,
  boxShadow: 'none !important',
  '&:hover, &': {
    background: props.active ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#E9EAEF',
    color: props.active ? '#ffffff' : '#A7ACB8',
  }
}))
const customPadding = {
  width: 352,
  padding: '0 10px 24px 24px !important',
}
const TextError = styled(Typography)({
  ...TEXT_STYLE(12, 500),
  marginTop: 8,
  textAlign: 'right'
})
const ImageTop = styled(Box)({
  position: 'absolute',
  top: -73,
  left: -24,
})
const VerifyText = styled(Typography)({
  ...TEXT_STYLE(12, 500),
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  textDecoration: 'underline',
})
const Title = styled(Typography)({
  ...TEXT_STYLE(16, 500, '#31373E'),
  margin: '70px 0 0',
  textAlign: 'center',
  lineHeight: '1.4',
  marginLeft: -14
})
const CustomInput = styled(InputBase)({
  '& .MuiInputBase-input': {
    ...TEXT_STYLE(14, 500, '#31373E'),
    padding: '10px 16px',
    borderRadius: 8,
    border: '1px solid #E9EAEF',
    background: '#F8F9FB',
  },
});
const Label = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  marginBottom: 8,
  '& span': {
    color: '#FF6F61'
  }
})
const FormItem = styled(Box)({
  marginBottom: 16
})
const BoxSelect = styled(Select)({
  width: '100%',
  ...TEXT_STYLE(14, 500, '#31373E'),
  borderRadius: 8,
  border: '1px solid #E9EAEF',
  background: '#F8F9FB',
  '&:before': {
    display: 'none',
  },
  '& .MuiSelect-select': {
    padding: '10px 16px',
    background: '#F8F9FB',
    borderRadius: 8,
    borderColor: '#F8F9FB'
  }
})
const BoxForm = styled(FormControl)({
  maxHeight: 500,
  overflow: 'auto',
  paddingRight: 10,
  marginTop: 20,
  '&::-webkit-scrollbar': {
    width: 4,
  },
  '&::-webkit-scrollbar-track': {
    background: '#E9EAEF',
    borderRadius: 10
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
    borderRadius: 10
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
  }
})