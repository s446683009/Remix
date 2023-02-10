import React from 'react'
import PropTypes from 'prop-types'
import Popover from '@mui/material/Popover';
import {Button,IconButton} from '@mui/material';
import styled from './index.module.css'
import ClickAwayListener from '@mui/base/ClickAwayListener';

function ClickExpendMenu({children,sx={},className,text,type='text',id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {

    setAnchorEl(event.target);
  };
  //用来拿到关闭pover 的方法
  const handleClose = () => {

    setAnchorEl(null);
  };
  //closeRef.current=handleClose;
  //ref.current=handleClose;

  const open = Boolean(anchorEl);
  const lid = open ? id : undefined;
  const hoverSx=open?{bgcolor:'primary.hover',color:'primary.scr'}:{};
  const ApplyNode=type=='icon'?Button:IconButton;
  return (
    <ClickAwayListener onClickAway={handleClose}>
    <div>
      
      <ApplyNode sx={{...hoverSx,...sx}} className={className} aria-describedby={lid}  onClick={handleClick}>
        {text}
      </ApplyNode>
       
      
      
        <Popover
        id={lid}
        open={open}
        anchorEl={anchorEl}
        PaperProps={{sx:{
          boxShadow:'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px'
        },
        className:styled.popoverWrap
      }}
       
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 40,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        
      
          {children}
        
         

      </Popover>
      
    
    </div>
    </ClickAwayListener>
  );
}

ClickExpendMenu.propTypes = {
    children:PropTypes.oneOfType([PropTypes.element.isRequired,PropTypes.string]),
    sx:PropTypes.object,
    className:PropTypes.string,
    text:PropTypes.element,
    closeRef:PropTypes.object,
    id:PropTypes.string
}

export default ClickExpendMenu

