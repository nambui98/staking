import { Box, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const ClockUtc = () => {
  const [hoursUtc, setHoursUtc] = useState<number>(0);
  const [minuteUtc, setMinuteUtc] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timeUtc, setTimeUtc] = useState<string>('')
  const [dayUtc, setDayUtc] = useState<string>('')
  const clock = () => {
    setInterval(() => {
      const date = new Date();
      setHoursUtc(date.getUTCHours())
      setMinuteUtc(date.getUTCMinutes())
      setSeconds(date.getSeconds())
      setTimeUtc(`${date.getUTCHours() + ':' + date.getUTCMinutes()}`)
      setDayUtc(`${date.getUTCDate() + '/' + month + '/' + date.getUTCFullYear()}`)
    }, 1000)
  }
  const date = new Date();

  useEffect(() => {
    clock()
  }, [month])

  useEffect(() => {
    const date = new Date();
    setMonth(date.getUTCMonth() + 1)
  }, [])
  return (
    <Wrap>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '4px',
        '& img': {
          marginRight: '10px'
        },
        '@media (max-width: 767px)': {
          marginBottom: '0',
          marginRight: '12px'
        }
      }}><img src={'assets/icons/clock.svg'} /> {hoursUtc < 10 && '0'}{hoursUtc}:{minuteUtc < 10 && '0'}{minuteUtc}:{seconds} UTC</Box>
      <Box sx={{
        textAlign: 'right'
      }}>{dayUtc}</Box>
    </Wrap>
  )
}

const Wrap = styled(Box)({
  padding: 8,
  background: '#FF6D24',
  ...TEXT_STYLE(14, 600, '#ffffff'),
  position: 'fixed',
  right: 0,
  top: '70px',
  zIndex: 4,
  minWidth: 130,
  '@media (max-width: 1099px)': {
    top: '130px',
  },
  '@media (max-width: 767px)': {
    minWidth: 'unset',
    position: 'static',
    width: '100%',
    order: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    marginTop: '10px'
  },
  '@media (max-width: 570px)': {
    position: 'static',
    minWidth: 'calc(100% + 32px)',
    marginLeft: '-16px',
    order: 3,    
  }
})