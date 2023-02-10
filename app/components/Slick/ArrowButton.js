import React from 'react'
import {Box, IconButton} from '@mui/material'
import PropTypes from 'prop-types'
import styled from './index.module.css'
function ArrowButton({direction='left',click}) {
 const extClass=direction=='right'?styled.slickRightArrow:''
  return (
    <IconButton className={`${styled.slickArrow} ${extClass}`} onClick={click}>
        <i className='iconfont icon-xiangzuo'></i>
    </IconButton>
  )
}

ArrowButton.propTypes = {
    direction:PropTypes.oneOf(['left','right'])
}

export default ArrowButton
