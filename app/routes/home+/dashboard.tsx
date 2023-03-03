
import React from 'react'
import PropTypes from 'prop-types'
import {Grid,Paper,Typography} from '@mui/material'
import BookDetail from '../../components/Book/Detail'
import ShowCard from '../../components/ShowCard'
import css from './dashboard.css'
var arr=[
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/1.svg')
  },
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/2.svg')
  }, {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/3.svg')
  },
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/4.svg')
  }
]

export const links=()=>{
  return [
    {
      rel: "stylesheet",
      href: css,
    }
  ];
}



function HomePage() {

  
  return (
    <>
    <Grid container  spacing={2} sx={{mt:1,flexWrap:"wrap"}} >
      {
        arr.map((t,i)=>{
        return <Grid sx={{flex:1}} key={i} item  lg={3} md={6} sm={1}  >
          <ShowCard mainText={t.mainText} subTitle={t.subTitle} pic={<img  alt={"图片"} width={90} height={90} src={t.svg} />}></ShowCard>
        </Grid>
      })

      }
    </Grid>
    <BookDetail></BookDetail>


    </>
  )
}



HomePage.propTypes = {}

export default HomePage