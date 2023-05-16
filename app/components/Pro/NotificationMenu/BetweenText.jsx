import React from 'react'
import { Typography, Box} from '@mui/material'
import PropTypes from 'prop-types'
import styled from '../index.module.css'
import { style } from '@mui/system'

function BetweenText({sx,primary,subText}) {
  return (
    <Box className={styled.between}>
        <Typography className={styled.primaryTxt}>{primary}</Typography>
        <Typography className={styled.subTxt}>{subText}</Typography>
    </Box>
  )
}

BetweenText.propTypes = {}

export default BetweenText
