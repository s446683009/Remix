"use client";
import React, { useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import styled from './LoginForm.module.css'
import {Box,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,
  IconButton,Grid,Checkbox,FormControlLabel,Link,Button, Typography} from '@mui/material'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function LoginForm({size='normal',loginFun}:{size?:String,loginFun?:Function}) { 
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [remember,setRemember]=useState(false);
  const [errorMessage,setErrorMessage]=useState('');
  const [showPsw,setshowPsw]=useState(false);

  const login=useCallback(()=>{
    setErrorMessage('')

    if(!!!userName){
      setErrorMessage('请输入用户名')
      return
    }
    if(!!!password){
      setErrorMessage('请输入密码')
      return
    }
    loginFun&&loginFun({
      userName,
      password,
      remember,
      setErrorMessage
    })


},[userName,password, remember]);

  return (
    <div className={styled.loginForm}>
      <div className={styled.loginForm_title}>
        用户登录
      </div>
      <div className={styled.loginForm_content}>
            <Box>
            <TextField
              error={!!errorMessage}
              margin="normal"
              required
              fullWidth
              id="account"
           
              value={userName}
              label="账号"
              name="account"
              onChange={(e)=>{setUserName(e.target.value)}}
              autoFocus
            />

            </Box>
            <Box>
            <FormControl sx={{ width: '100%',mt:3,mb:1}} variant="outlined"  required={true}>
              <InputLabel  htmlFor="outlined-adornment-password" >密码</InputLabel>
              <OutlinedInput
               error={!!errorMessage}
                id="outlined-adornment-password"
                type={showPsw?'text' : 'password'}
                label="Required"
                name='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                //onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>{setshowPsw(!showPsw)}}
                      //onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPsw?<i className='iconfont icon-normal'>&#xe7ed;</i> : <i className='iconfont icon-normal'>&#xe7aa;</i>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            </Box>

            <Box>
                {errorMessage && <div className={styled.errorMessage}>{errorMessage}</div>}
            </Box>
            <Grid container>
              <Grid item xs>
                <FormControlLabel 
                control={<Checkbox {...label } defaultChecked size="small" onChange={(e)=>{setRemember(e.target.checked)}} value={remember} />} label="记住我" />
              </Grid>
              
              
              <Grid item xs className={styled.passwdlink}>
                  <Link href="#">
                    忘记密码?
                  </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,fontSize:'1.1rem',color:'primary.text'}}
              size="large"
              onClick={login}
            >
              登录
            </Button>

            <Box className={styled.loginMoreTip}>
              <Typography className={styled.loginMoreText}>其他登录方式</Typography>
            </Box>
            <Grid container spacing={1}  justifyContent="center" alignItems="center"
>
              <Grid item xs={3} className={styled.loginItem}>
                <IconButton sx={{color:'#008000ab'}}><i className='iconfont icon-weixin'></i></IconButton>  
              </Grid>
              <Grid item  xs={3} className={styled.loginItem}>
                <IconButton sx={{color:'#409effdb'}}><i className='iconfont icon-QQ'></i></IconButton>  
              </Grid>
              <Grid item  xs={3} className={styled.loginItem}>
                <IconButton sx={{color:'#e56812c4'}}><i className='iconfont icon-weibo1'></i></IconButton>  
              </Grid>
            </Grid>

      </div>

    </div>
  )
}

LoginForm.propTypes = {
    loginFun: PropTypes.func

}

export default LoginForm
