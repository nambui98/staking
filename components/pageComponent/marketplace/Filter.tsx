import styled from "@emotion/styled";
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { CheckboxMarketplace } from "../../checkbox/CheckboxMarketplace";
import { FILTER, PRODUCT_DETAIL_ICON } from "../../../constants/marketplace";
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
    <FormControl sx={selectRarityBox}>
      <Select
        value={rarityValue}
        onChange={handleChange}
        sx={selectRarity}
      >
        <MenuItem sx={checkBoxMobile} value={10}><CheckboxMarketplace label={FILTER.RARITY.CLASSIC} /></MenuItem>
        <MenuItem sx={checkBoxMobile} value={20}><CheckboxMarketplace label={FILTER.RARITY.RARE} /></MenuItem>
        <MenuItem sx={checkBoxMobile} value={30}><CheckboxMarketplace label={FILTER.RARITY.ICONIC} /></MenuItem>
      </Select>
    </FormControl>
  )
  return (
    <FilterBox>
      <CategoryBox>
        <Button variant="outlined" sx={[categoryItem, categoryActiveItem === 'all' ? categoryActive : {}]} onClick={() => handleFilterCategory('all')} >
          <CategoryTitle sx={{ marginLeft: 0 }}>All Item</CategoryTitle>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.daily.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.daily.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.daily.title)}>
          <CategoryTitle >{FILTER.CATEGORY.daily.title}</CategoryTitle>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.fitness.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.fitness.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.fitness.title)}>
          <CategoryTitle >{FILTER.CATEGORY.fitness.title}</CategoryTitle>
        </Button>
        <Button variant="outlined" startIcon={<img src={FILTER.CATEGORY.racer.image} />} sx={[categoryItem, categoryActiveItem === FILTER.CATEGORY.racer.title ? categoryActive : {}]} onClick={() => handleFilterCategory(FILTER.CATEGORY.racer.title)}>
          <CategoryTitle >{FILTER.CATEGORY.racer.title}</CategoryTitle>
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
  height: '56px',
  "&:hover": {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%);',
    '& p': {
      color: '#ffffff'
    }
  },
  '@media (max-width: 767px)': {
    marginRight: '8px',
    padding: '6px 8px',
    height: '34px',
    borderRadius: '8px',
    justifyContent: 'center',
    borderColor: '#E9EAEF',
    '& img, .MuiButton-startIcon': {
      display: 'none'
    },
    marginBottom: '0',
  }
}

const CategoryTitle = styled(Typography)({
  fontSize: '14px',
  fontFamily: 'BeVietnamPro',
  color: '#5A6178',
  fontWeight: '600',
  textTransform: 'initial',
  '@media (min-width: 768px)': {
    marginLeft: '4px',
    fontSize: '16px',
    fontFamily: 'Electrofied',
    color: '#31373E',
    fontStyle: 'italic',
    fontWeight: '700'
  }
})

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
  '@media (min-width: 768px)': {
    width: '100%',
    padding: '16px',
    borderRadius: '16px',
    border: '1px solid #E9EAEF',
  },
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
const selectRarity = {
  '& .MuiSelect-select': {
    width: '34px',
    height: '38px !important',
    padding: '0 !important'
  },
}
const selectRarityBox = {
  width: '34px',
  height: '34px !important',
  borderRadius: '8px',
  border: '1px solid #E9EAEF',
  padding: '0 !important',
  backgroundImage: `url(${PRODUCT_DETAIL_ICON.STAR})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '& .MuiOutlinedInput-root': {
    opacity: 0
  },
}
const checkBoxMobile = {
  '& .MuiCheckbox-root': {
    paddingTop: 0,
    paddingBottom: 0
  }
}