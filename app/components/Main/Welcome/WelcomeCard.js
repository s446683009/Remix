import React from 'react'
import PropTypes from 'prop-types'

import {Box,Card,CardContent, Typography, Button} from '@mui/material'
import styled from '../index.module.css'
function WelcomeCard(props) {
  return (
    <Card className={styled.WCCard} sx={{ backgroundColor: 'primary.background', color: 'text.main' }}>
      <CardContent>
        <Typography className={styled.WCtitle} component="h2">Welcome to SCR</Typography>
        <Typography className={styled.WCtitle}>Hi,SoloTravelling!</Typography>
        <Typography sx={{ my: 2 }}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn‘t anything</Typography>
        <Button variant='contained'>GO To Buy</Button>
      </CardContent>
      <Box>
        <img src={'/backend/images/home/success.svg'} width={300} height={300} alt='language' />
      </Box>
    </Card>
  )
}

WelcomeCard.propTypes = {}

export default WelcomeCard
