import styled from "@emotion/styled";
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { FILTER } from "../../../constants/marketplace";

const Filter = () => {
  const [categoryActiveItem, setCategoryActiveItem] = useState<string>();

  const handleFilterCategory = (category: string) => {
    setCategoryActiveItem(category)
  }
  return (
    <Stack sx={filterBox}>
      <Stack sx={categoryBox}>
        <Button variant="outlined" sx={[categoryItem, categoryActiveItem === 'all' ? categoryActive : {}]} onClick={() => handleFilterCategory('all')} >
          <Typography sx={[categoryTitle, { marginLeft: 0 }]}>All Item</Typography>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.daily.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.daily.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.daily.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.daily.title}</Typography>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.fitness.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.fitness.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.fitness.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.fitness.title}</Typography>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.racer.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.racer.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.racer.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.racer.title}</Typography>
        </Button>
      </Stack>
      <Stack sx={rarityBox}>
        <Typography sx={rarityTitle}>Rarity</Typography>
        <FormGroup>
          <FormControlLabel sx={rarityItem} control={<Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} sx={filterCheckbox} defaultChecked />} label={FILTER.RARITY.CLASSIC} />
          <FormControlLabel sx={rarityItem} control={<Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} sx={filterCheckbox} defaultChecked />} label={FILTER.RARITY.RARE} />
          <FormControlLabel sx={rarityItem} control={<Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} sx={filterCheckbox} defaultChecked />} label={FILTER.RARITY.ICONIC} />
        </FormGroup>
      </Stack>
    </Stack>
  )
}

export default Filter;

const BpIcon = styled('span')(({ theme }: any) => ({
  borderRadius: "7px",
  width: '20px',
  height: '20px',
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
  backgroundColor: '#ff8a506e',
  boxShadow: 'none',
  backgroundImage: '#ff8a506e',
  '&:before': {
    display: 'block',
    width: 14,
    height: 14,
    backgroundImage: 'url(/assets/icons/tick.svg)',
    content: '""',
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    marginTop: '3px',
    backgroundPosition: 'center',
  },
});

const filterBox = {
  width: '256px',
}

const filterCheckbox = {
  color: '#5A6178',
  '&.Mui-checked': {
    color: '#FF8A50',
  },
  '& .MuiSvgIcon-root': { fontSize: 22, borderRadius: 20 },
}

const categoryItem = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '8px',
  padding: '6px 15px',
  border: '1px solid #FFE2D3',
  borderRadius: '16px',
  cursor: 'pointer',
  minHeight: '56px',
  "&:hover": {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%);',
    '& p': {
      color: '#ffffff'
    }
  }
}

const categoryTitle = {
  color: '#31373E',
  textTransform: 'uppercase',
  fontSize: '16px',
  fontStyle: 'italic',
  fontFamily: 'Electrofied',
  marginLeft: '4px',
  fontWeight: 'bold'
}

const categoryActive = {
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%);',
  '& p': {
    color: '#ffffff'
  }
}

const categoryBox = {
  marginBottom: '16px'
}

const rarityBox = {
  padding: '16px',
  borderRadius: '16px',
  border: '1px solid #E9EAEF'
}
const rarityTitle = {
  color: '#31373E',
  fontSize: '16px',
  fontWeight: 500,
  marginBottom: '8px'
}
const rarityItem = {
  padding: '3px 0',
  color: '#5A6178'
}