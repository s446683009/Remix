"use client";
import React,{useState} from 'react'
import {Box} from '@mui/material'

import Side from '../components/Side'

import Header from '../components/Header';
import { Outlet } from '@remix-run/react';

function HomeLayout({}) {

    const [model, setModel] = useState("full")
    
    return ( 
    <React.Fragment>
        <Header model={model}  setModel={setModel}></Header>
        <Box className='wrap'>
    
          <Side model={model} setModel={setModel}></Side>
        
          <Box className="main">
              <Outlet></Outlet>
          </Box> 
        </Box>

    </React.Fragment>
       
    )
}

HomeLayout.propTypes = {}

export default HomeLayout
