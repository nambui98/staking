import { Button, ButtonProps, styled } from "@mui/material"
import { TEXT_STYLE } from "../../styles/common/textStyles"

interface IProps {
  title: string,
  iconLink: string,
  active: boolean
}

export const MainMenuButton: React.FC<IProps> = ({title, iconLink, active}) => {
  return (
    <ButtonWrap active={active} variant="contained" startIcon={<img src={iconLink} />}>
      {title}
    </ButtonWrap>
  )
}

type buttonMarketPlace = ButtonProps & {
  active: boolean
};
const ButtonWrap = styled(Button)((props: buttonMarketPlace) => ({
  padding: '8px 12px',
  background: props.active ? '#FFE2D3' : '#ffffff',
  borderRadius: 18,
  color: props.active ? '#FF8A50' : '#5A6178',
  ...TEXT_STYLE(14, 500),
  boxShadow: 'none !important',
  textTransform: 'capitalize',
  '& img': {
    marginRight: 6,
    filter: props.active ? 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)' : 'none'
  },
  '&:hover': {
    background: '#FFE2D3',
    color: '#FF8A50',
    '& img': {
      filter: 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)'
    }
  },
}))