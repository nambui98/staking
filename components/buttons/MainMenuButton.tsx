import { Button, ButtonProps, styled } from "@mui/material"
import { TEXT_STYLE } from "../../styles/common/textStyles"

interface IProps {
  title: string,
  iconLink: string,
  active: boolean,
  disabledBtn: boolean
}

export const MainMenuButton: React.FC<IProps> = ({title, iconLink, active, disabledBtn}) => {
  return (
    <ButtonWrap disabled={disabledBtn} active={active.toString()} variant="contained" startIcon={<img src={iconLink} />}>
      {title}
    </ButtonWrap>
  )
}

type buttonMarketPlace = ButtonProps & {
  active: any, 
  disabled: boolean
};
const ButtonWrap = styled(Button)((props: buttonMarketPlace) => ({
  padding: '8px 12px',
  background: props.active === 'true' ? '#FFE2D3' : '#ffffff',
  borderRadius: 18,
  color: props.active === 'true' ? '#FF8A50' : '#5A6178',
  ...TEXT_STYLE(14, 500),
  boxShadow: 'none !important',
  textTransform: 'capitalize',
  // opacity: props.disabled ? 0.3 : 1,
  '& img': {
    marginRight: 6,
    filter: props.active === 'true' ? 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)' : 'none'
  },
  '&:hover': {
    background: '#FFE2D3',
    color: '#FF8A50',
    '& img': {
      filter: 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)'
    }
  },
  '&.Mui-disabled': {
    color: '#5A6178',
    background: '#ffffff',
    opacity: 0.3
  }
}))