import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { styled } from "@mui/system";

interface IProps {
  label: string
  type?: 'blue' | 'green'
  sx?: any
  active: boolean
}

export const CheckboxMarketplace: React.FC<IProps> = ({label, type, sx, active}) => {
  const greenStyle = {
    backgroundColor: '#4FD190',
    '&:before': {
      backgroundImage: 'url(assets/icons/tickGreen.svg)',
      filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(82deg) brightness(222%) contrast(136%)'
    }
  }
  return (
    <FormGroup sx={sx}>
      <CheckboxMarket 
        control={<Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon sx={type === 'green' ? greenStyle : {}} />} sx={filterCheckbox} checked={active}  />} 
        label={''} 
      />
    </FormGroup>
  )
}

const CheckboxMarket = styled(FormControlLabel)({
  padding: '3px 0',
  color: '#5A6178'
})

const BpIcon = styled('span')(({ theme }: any) => ({
  borderRadius: "7px",
  width: '20px',
  height: '20px',
  background: '#fff',
  boxShadow: 'inset 0 0 0 2px #5A6178, inset 0 -2px 0 #5A6178',
  '.Mui-focusVisible &': {
    outlineOffset: 2,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: '#ff8a506e',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#55C8FC66',
  boxShadow: 'none',
  backgroundImage: '#ff8a506e',
  '&:before': {
    display: 'block',
    width: 10,
    height: 12,
    backgroundImage: 'url(assets/icons/tickBlue.svg)',
    content: '""',
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    marginTop: '3px',
    backgroundPosition: 'center',
  },
});
const filterCheckbox = {
  color: '#5A6178',
  '&.Mui-checked': {
    color: '#4FD190',
  },
  '& .MuiSvgIcon-root': { fontSize: 22, borderRadius: 20 },
}