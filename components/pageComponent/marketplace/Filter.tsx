import styled from "@emotion/styled";
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { CheckboxMarketplace } from "../../checkbox/CheckboxMarketplace";
import { FILTER } from "../../../constants/marketplace";
import { useMediaQuery } from "react-responsive";

export const Filter = () => {
  const [categoryActiveItem, setCategoryActiveItem] = useState<string>();
  const [rarityValue, setRarityValue] = useState<any>();
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const handleFilterCategory = (category: string) => {
    setCategoryActiveItem(category)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRarityValue(event.target.value as string);
  };

  const listRarityMobile = (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rarityValue}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}><CheckboxMarketplace label={FILTER.RARITY.CLASSIC} /></MenuItem>
        <MenuItem value={20}><CheckboxMarketplace label={FILTER.RARITY.RARE} /></MenuItem>
        <MenuItem value={30}><CheckboxMarketplace label={FILTER.RARITY.ICONIC} /></MenuItem>
      </Select>
    </FormControl>
  )
  return (
    <FilterBox>
      <CategoryBox>
        <Button variant="outlined" sx={[categoryItem, categoryActiveItem === 'all' ? categoryActive : {}]} onClick={() => handleFilterCategory('all')} >
          <Typography sx={[categoryTitle, { marginLeft: 0 }]}>All Item</Typography>
        </Button>
        <Button variant="outlined" startIcon={isMobile ? false : <img src={FILTER.CATEGORY.daily.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.daily.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.daily.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.daily.title}</Typography>
        </Button>
        <Button variant="outlined" startIcon={isMobile ? false : <img src={FILTER.CATEGORY.fitness.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.fitness.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.fitness.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.fitness.title}</Typography>
        </Button>
        <Button variant="outlined" startIcon={isMobile ? false : <img src={FILTER.CATEGORY.racer.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.racer.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.racer.title)}>
          <Typography sx={[categoryTitle]}>{FILTER.CATEGORY.racer.title}</Typography>
        </Button>
      </CategoryBox>
      <RarityBox>
        {isMobile ? listRarityMobile : (
          <Box>
            <Typography sx={rarityTitle}>Rarity</Typography>
            <FormGroup>
              <CheckboxMarketplace label={FILTER.RARITY.CLASSIC} />
              <CheckboxMarketplace label={FILTER.RARITY.RARE} />
              <CheckboxMarketplace label={FILTER.RARITY.ICONIC} />
            </FormGroup>
          </Box>
        )}
      </RarityBox>
    </FilterBox>
  )
}

const FilterBox = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',
  '@media (min-width: 768px)': {
    flexDirection: 'column',
    width: '256px',
    marginBottom: 0,
    justifyContent: 'unset'
  }
})

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
  },
  '@media (max-width: 767px)': {
    marginRight: '8px'
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

const CategoryBox = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  '@media (min-width: 768px)': {
    flexDirection: 'column',
    marginBottom: '16px',
    width: '100%'
  }
})
const RarityBox = styled(Stack)({
  padding: '16px',
  borderRadius: '16px',
  border: '1px solid #E9EAEF',
  '@media (min-width: 768px)': {
    width: '100%'
  }
})
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