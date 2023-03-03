import React from 'react'
import {Breadcrumbs,Link,Typography,Paper} from '@mui/material'
export default function UserList() {
  return (
    <>
      <Typography variant='h5'>用户列表</Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{my:2}}>
        <Link underline="hover" color="inherit" href="/">
          主页
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="./user"
        >
          用户
        </Link>
        <Typography color="text.primary">用户列表</Typography>
      </Breadcrumbs>
      <Paper>

      </Paper>
    </>
  )
}
