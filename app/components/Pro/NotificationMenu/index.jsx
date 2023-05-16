import React from 'react'
import { List, ListItem, Avatar, Badge, ListItemText, Typography, IconButton, Box, ListSubheader, ListItemAvatar } from '@mui/material'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'
import BetweenText from './BetweenText'

import styled from '../index.module.css'

function NotificationMenu({ t }) {

  const iconComponent = (
    <Badge badgeContent={2} color="secondary">
      <i className='iconfont icon-tongzhi1'></i>
    </Badge>
  );
  const secondClass={className:`textClip ${styled.secondText}`};
  return (

    <ExpendMenu id="notification" text={iconComponent}>
      <div className={styled.notificationWrap}>
        <Box className={styled.titleWrap}>
          <div>
            <Typography className={styled.title} sx={{ py: 0.5 }}>通知</Typography>
            <Typography className={styled.subTitle}>未读2条消息</Typography>
          </div>
          {/* <div>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <i className='iconfont icon-tongzhi1'></i>
              </Badge>

            </IconButton>
          </div> */}
        </Box>

        <List
          sx={{width:'100%'}}
          subheader={
            <ListSubheader sx={{lineHeight:'1.8'}} component="div" id="nested-list-subheader">
              新消息（{2}）
            </ListSubheader>
          }
        >
          <ListItem className="cursorPoint" button>
            <ListItemAvatar>
              <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText
            secondaryTypographyProps={secondClass} 
            primary={<BetweenText primary="朱丽叶" subText={"09:30"} />} secondary="啥时候结婚？" />
          </ListItem>
          <ListItem className="cursorPoint" button>
            <ListItemAvatar>
              <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText secondaryTypographyProps={secondClass}
              primary={<BetweenText primary="刘大神" subText={"09:30"} />}
              secondary="俺家姑娘说看上你了，有空约一下见面。俺给你包红包，俺家姑娘说看上你了，有空约一下见面。俺给你包红包" />
          </ListItem>
          
        </List>
        <List
          sx={{width:'100%'}}
          subheader={
            <ListSubheader sx={{lineHeight:'1.8'}} component="div" id="nested-list-subheader">
             最近消息
            </ListSubheader>
          }
        >
          <ListItem className="cursorPoint" button>
            <ListItemAvatar>
              <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            secondaryTypographyProps={secondClass}
            primary={<BetweenText primary="朱丽叶" subText={"09:30"} />} secondary="啥时候结婚？" />
          </ListItem>
          <ListItem className="cursorPoint" button>
            <ListItemAvatar>
              <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText secondaryTypographyProps={secondClass}
            primary={<BetweenText primary="刘大神" subText={"09:30"} />}
            secondary="俺家姑娘说看上你了，有空约一下见面。俺给你包红包，俺家姑娘说看上你了，有空约一下见面。俺给你包红包" />
          </ListItem>
          
        </List>
      </div>
    </ExpendMenu>
  )
}

NotificationMenu.propTypes = {}

export default NotificationMenu
