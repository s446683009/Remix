
import React,{useState} from 'react'
import {Box, useMediaQuery, useTheme,CircularProgress,Stack } from '@mui/material'
import Side from '../../components/Side'
import Header from '../../components/Header';
import { Outlet,Await } from '@remix-run/react';
import {auth} from '../../utils/auth.server'
import { defer, LoaderArgs } from '@remix-run/node'
import {getProfile} from '../../apis/user.server'
import { useLoaderData } from '@remix-run/react'


export const loader=async({ request }: LoaderArgs)=>{
    let token = await auth.isAuthenticated(request, {
      failureRedirect: "/login",
    });
    var result= await getProfile({token});
    return {
      user:result
    };
  
  }
  

function HomeLayout({}) {


    const [model, setModel] = useState(("full"))
    const data=useLoaderData();
   
    return ( 
    <React.Fragment>
        <Header model={model}  setModel={setModel} user={data.user}></Header>
        <Box className='wrap'>
    
          <Side model={model} setModel={setModel} user={data.user}></Side>

          <Box className="main">
            
               <Outlet></Outlet>
            
              
          </Box> 
        </Box>

    </React.Fragment>
       
    )
}

export function ErrorBoundary({ error }:{error:any}) {
    const [model, setModel] = useState("full")
    return (
        <React.Fragment>
        <Header model={model}  setModel={setModel} user={{}}></Header>
        <Box className='wrap'>
    
          <Side model={model} setModel={setModel} user={{}}></Side>
        
          <Box className="main">
              <div>{error.message}</div>
          </Box> 
        </Box>

    </React.Fragment>
    );
  }

HomeLayout.propTypes = {}

export default HomeLayout
