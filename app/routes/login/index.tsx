
import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import styled from '../../styles/Login.module.css'

import LoginForm from '../../components/LoginForm'
function Login() {



  return (
    <div id="__next">

   
    <Box className={styled.loginBac} >
      <Box className={styled.loginWrap}>
      
        <Box className={styled.loginArea}>
             <LoginForm />
        </Box>
     
      
        {/* <Box className={styled.loginLeft}></Box> */}
      </Box>
      
    </Box>
    </div>
  )
}

Login.propTypes = {
  backArr:PropTypes.array

}

export default Login



