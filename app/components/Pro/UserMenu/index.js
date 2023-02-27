import React, { useCallback } from 'react'
import {List,ListItem,ListItemText, Typography,Divider,Avatar} from '@mui/material'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'


import styled from '../index.module.css'
import { useFetcher } from 'react-router-dom'

function UserMenu({user}) {
const parentRef=React.useRef(null);
const iconComponent=  <Avatar className={styled.userAvatar} src={user.avatar}/>;
const textSx={
  my:0
};
var fet=useFetcher();
const loginOut=useCallback(()=>{
  fet.submit({},{
    method:'post',
    action:'/apis/user/loginOut'
  })
},[fet])


  return (
    
    <ExpendMenu id="user"  text={iconComponent} closeRef={parentRef}>
      <div className={styled.useWrap}>
      <div className={styled.titleWrap}>
        <div>
         <Typography className={styled.title} component={"h5"}>{user.account}</Typography>
         <Typography className={styled.subTitle}>{user.mobile??user.email}</Typography>
        </div>
    
      </div>
     
      <List>
          <Divider light  sx={{my:1}} />
        <ListItem className={styled.userItem} button>
          <ListItemText sx={textSx} primary={"我的主页"}></ListItemText>
        </ListItem>
        <ListItem className={styled.userItem} button>
          <ListItemText sx={textSx} primary={"个人资料"}></ListItemText>
        </ListItem>
        <ListItem className={styled.userItem} button> 
          <ListItemText sx={textSx} primary={"设置"}></ListItemText>
        </ListItem>
        <Divider light  sx={{my:1}} />
        <ListItem className={styled.userItem} button onClick={loginOut}>
          <ListItemText sx={textSx} primary={"登出"}></ListItemText>
        </ListItem>
      </List>
      
     </div>
  </ExpendMenu>
  )
}

UserMenu.propTypes = {}

export default UserMenu
