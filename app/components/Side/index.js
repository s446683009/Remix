import React from 'react'
import PropTypes from 'prop-types'
import {Box,List,IconButton,Avatar,Drawer,useMediaQuery,useTheme} from '@mui/material'
import {useState} from 'react'

import styled from './Side.module.css'
import Menu from '../Menu/index'



function Side({model="full",setModel,user}) {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('sm'));
   const isSimple=model=='simple';
   const [simple, setSimple] = useState(isSimple);

   const variant=matches?'temporary':'permanent';//
   const sideIconClass=isSimple?styled.sideExpend:styled.sideZoom;
   const mobileOpen=matches?!isSimple:true;

   const handSimpleHover=(flag)=>{
       if(isSimple){
         setSimple(flag);
       }
   };
   const switchModel=()=>{
        const model=isSimple?'full':'simple';
        setModel(model);
        setSimple(model=='simple');
   }
//    React.useEffect(() => {
//     if(matches){
//         setModel('simple');
//         setSimple(false);

//     }else{
//         setSimple(true);
//     }
//    }, [matches,setSimple,setModel])
   
   //temporary

    return (

      <Drawer
        variant={variant}
        className={isSimple?styled.simpleDrawer:styled.sideDrawer}
        PaperProps={{className:`${styled.sideWrap} ${!matches&&simple?styled.simapleSideWrap:''}`}}
        open={mobileOpen}
        onMouseEnter={()=>{handSimpleHover(false)}}
        onMouseLeave={()=>{handSimpleHover(true)}}
        sx={{
            color:'text.primay'
        }} 
      >
       
   
            <div className={styled.sideOperate}>
                <Box sx={{fontSize:'2rem',color:'primary.scr',p:1}}>
                     <i className='iconfont icon-comment'></i>
                </Box>
                {
                    simple?null:
                    <IconButton className={sideIconClass} sx={{ fontSize: '1rem' }} size="large" onClick={switchModel}>
                        <i className='iconfont icon-shousuojiantou'></i>
                    </IconButton>
                }
               
         
            </div> 
            <div className={styled.sideUserWrap}>
                <div className={styled.userContent}>
                    <Avatar src={user.avatar}>

                    </Avatar>
                    <Box className={styled.userInfo} sx={{ ml: 2, color:'text.primary'}}>
                        <p className={styled.sideUserName} >{user.account}</p>
                        <p className={styled.sideIntroduct}>{user.mobile??user.email}</p>
                    </Box>


                </div>
               
            </div>
            <div>
                <Menu simapleMenu={simple}></Menu>
            </div> 
         
        </Drawer>
    )
}

Side.propTypes = {
    model:PropTypes.oneOf(['simple', 'full']),
}

export default Side

