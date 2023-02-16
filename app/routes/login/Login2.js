import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const theme = createTheme();

export default function SignIn() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      account: data.get('account'),
      password: data.get('password'),
    });

    // fetch('http://localhost:8080/login',{
    //         method:'post',
    //         body:`username=${data.get('email')}&pwd=${data.get('password')}`
    //     }).then((data)=>{
    //         console.log(data)
    //         if(data.code == 100){
    //           this.props.history.push("/backend/Home")
    //         }
    //     })

    if(data.get('account') === 'zhangsan' && data.get('password') === '123456'){
      console.log(setValues)
      window.location.href = "/backend/Home"
    }else{
      alert('账号或密码错误')
    }
  };

  return (

    <Box component="span">
      <Box className={styled.imageBox}>
        <h3 className={styled.h3font}>Hi, Welcome Back</h3>
        {/* <img  src={require("../../public/images/login/bac1.jpg")} alt='language'/> */}
      </Box>
      <Box
          className={styled.loginBox}
        >
          <Box sx={{width:'480px'}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="account"
              label="账号"
              name="account"
            //   autoComplete="account"
              autoFocus
            />
            <FormControl sx={{ width: '100%' }} variant="outlined" label="Required">
              <InputLabel htmlFor="outlined-adornment-password" >密码</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                label="Required"
                name='password'
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <i className='iconfont'>&#xe7ed;</i> : <i className='iconfont'>&#xe7aa;</i>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Grid container>
              <Grid item xs>
                <FormControlLabel control={<Checkbox {...label } defaultChecked size="small" sx={{color: '#00AB55','&.Mui-checked':{color: '#00AB55'}}}/>} label="记住我" />
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
              sx={{ mt: 3, mb: 2, backgroundColor:'#00AB55','&:hover':{backgroundColor:'#007b55'}}}
              color="success"
            >
              登录
            </Button>
          </Box>
          

          </Box>
        </Box>
    </Box>
    
  );
}