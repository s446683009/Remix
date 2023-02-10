import * as React from 'react';
import {Button,Typography,Popover,Box} from '@mui/material';
import styled from './index.module.css'
import PropTypes from 'prop-types'
 function BasicMenu({id,name,children,className,type}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
 
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div  className={styled.expendArea}>
    <Typography
      aria-owns={open ?id : undefined}
      aria-haspopup="true"
      onMouseEnter={handleOpen}
    
      className={className}
    >
     {type=="Icon"?<i className={`iconfont ${styled.headerIcon} ${name}`} ></i>:name}
     <i className='iconfont icon-webicon215'></i>
    </Typography>
    <Box backgroundColor="background.default" className={styled.expendAbs}>
      {children}
     </Box> 
    {/* <Popover
      id={id}
      container={anchorEl?.parentElement}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      anchorReference={'anchorEl'}
      transformOrigin={{
        vertical: 'top',
  
      }}
      elevation={4}
      
      sx={{
        pointerEvents: 'none',
      }}
      hideBackdrop
      keepMounted
    >
     
     
     {children}
    </Popover> */}
  </div>
  );
}

BasicMenu.propTypes={
    id:PropTypes.number,
    name:PropTypes.string,
    // menulist:PropTypes.array,
    // menuItemClick:PropTypes.func,
    // menuItemClassName:PropTypes.string,
    className:PropTypes.string,
    type:PropTypes.string
}

export default BasicMenu;
