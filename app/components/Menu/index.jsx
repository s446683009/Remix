import React, { useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Box,List,ListItem,ListItemIcon,ListItemText,Collapse} from '@mui/material';
import styled from './Menu.module.css';


import menus from '../../utils/getMenu'
import { style } from '@mui/system';

const slectMenuSX={
    color:'primary.scr',
    backgroundColor:'primary.hover',
  

};

const mapList=(menu,options,leavel=1)=>{
    const {openKey,selectMenuId,onMenuClick,simapleMenu}=options;
    
   
    return menu.map(function(t){
        const bl=openKey.includes(t.menuId);
        const icon=leavel>1?'icon-dian1':'icon-yonghuming';
        const itemClass=leavel>1?styled.subMenuItem:styled.menuItem;
        const selectFlag=t.menuId==selectMenuId;
        const selectClass=selectFlag?styled.selectMenu:'';
        const ssx={...(selectFlag?slectMenuSX:{}),pl:leavel,mb:0.5}
        const expendClass=bl?styled.expendClass:styled.closeClass;
        return (
            <div key={t.menuId}>
                <ListItem  className={`${itemClass} ${selectClass}`}  sx={ssx} button onClick={onMenuClick.bind(null,t.menuId,t.hasChildren)}>

                    <ListItemIcon className={styled.menuIcon} sx={{mr:1}}>
                    <i className={`iconfont ${icon} ${styled.iconfont} `} />
                    </ListItemIcon>

                    <ListItemText  className={styled.menuItemText} primary={t.menuName} />
                    {t.hasChildren?
                        <i className={`iconfont icon-zhankai ${expendClass}`}  />
                    :null}
                </ListItem>
                {
                    t.hasChildren?
                        <Collapse  in={bl} timeout="auto" unmountOnExit >
                          {mapList(t.children,options,leavel+1)}
                        </Collapse>
                    : null
                }
            </div>
        )

    })

}

function CustomMenu({simapleMenu}) {
    const [selectMenuId, setselectMenuId] = useState('')
    const [expendMenu, setExpendMenu] = useState([])
 
    const handleOpen=useCallback((menuKey,e)=>{
            setExpendMenu((menu)=>{
            let index=menu.findIndex(t=>t===menuKey);

              if(index<0){
                return [...menu,menuKey];
              }
              
               menu.splice(index,1);
               //不能返回原对象，比较指针会认为没有改变
               return [...menu];
            });

         
        
    },[])
    const handClick=useCallback(
        (menuId,hasChildren,e) => {
            if(hasChildren){
                handleOpen(menuId,e);
            }
            setselectMenuId(menuId)
        },
        [handleOpen]
    )

    return (
        <Box    className={(simapleMenu?styled.simpleMenu:styled.menuWrap)}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {
                    mapList(menus,{
                        openKey:expendMenu,
                        selectMenuId:selectMenuId,
                        selectMenuClass:styled.selectMenu,
                        onMenuExpend:handleOpen,
                        onMenuClick:handClick,
                        simapleMenu
                    })
                }
            </List>
        </Box>
    )
}




CustomMenu.propTypes = {

}






export default React.memo(CustomMenu)

