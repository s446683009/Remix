import React from 'react'
import {Box,Card,CardContent, Typography,Grid, Button, useMediaQuery} from '@mui/material'

import PropTypes from 'prop-types'
import styled from './index.module.css'
import WelcomeCard from './Welcome/WelcomeCard'
import SilckCard from '../Slick'
function Main({sx,t,model,children,className}) {

    return (
       <main className={className}>
           <div className={styled.HomeWrap}>
            <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12}>
                   <WelcomeCard></WelcomeCard>
                </Grid>
                <Grid item lg={4} md={4} sm={12} sx={{overflow:'hidden'}}>
                    <SilckCard></SilckCard>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} sm={12}>
                  
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    
                </Grid>
            </Grid>

            </div>  
          
       </main>
      
    )
}

Main.propTypes = {

}

export default Main

