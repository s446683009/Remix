import React from 'react'
import PropTypes from 'prop-types'
import {Paper,Typography} from '@mui/material'
import styled from './index.module.css'
function ShowCard({mainText,subTitle,pic}) {
    return (
        <Paper className={styled.pwrap} variant='elevation'>
            <div>
                <Typography variant="h3" sx={{ fontSize: '2rem', lineHeight: 2 }}>
                    {mainText}
                </Typography>
                <Typography variant="h3" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                   {subTitle}
                </Typography>
            </div>
            <div>
                {pic}
            </div>


        </Paper>
  )
}

ShowCard.propTypes = {}

export default ShowCard
