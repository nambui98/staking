import { Stack, styled, Typography } from "@mui/material"
import React from "react"
import { TEXT_STYLE } from "../../../styles/common/textStyles"

interface IProps {
  icon: string,
  emptyText: string
}

export const BoxEmpty: React.FC<IProps> = ({icon, emptyText}) => {
  return (
    <Wrap>
      <BoxShoeEmpty>
        <img width={120} src={icon} />
        <Typography>{emptyText}</Typography>
      </BoxShoeEmpty>
    </Wrap>
  )
}

const Wrap = styled(Stack)({

})
const BoxShoeEmpty = styled(Stack)({
  alignItems: 'center',
  margin: '93px 0 77px',
  '@media (min-width: 768px)': {
    minHeight: 465,
    justifyContent: 'center',
  },
  '& p': {
    marginTop: 8,
    ...TEXT_STYLE(16, 500, '#A7ACB8')
  },
  '& img': {
    filter: 'invert(85%) sepia(61%) saturate(10%) hue-rotate(196deg) brightness(130%) contrast(115%)'
  }
})