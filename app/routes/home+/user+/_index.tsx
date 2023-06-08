import React, { Suspense } from 'react'
import { Breadcrumbs, Link, Typography, Paper, TableContainer, Table, TableRow, TableCell, TableHead, CircularProgress,TableBody, CardHeader, Avatar, listClasses, TablePagination } from '@mui/material'
import { Await, useLoaderData, useMatches } from 'react-router';
import { getUsers } from '../../../apis/user.server'
import { auth } from '../../../utils/auth.server'
import { defer, LoaderArgs } from '@remix-run/server-runtime';
var hsx = {
  color: 'rgb(99, 115, 129)',
  fontWeight: 'bold'
};

export const loader = async ({ request }: LoaderArgs) => {
  let token = await auth.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  var userList =await getUsers({
    token,
    page: 1,
    rows: 15,
    userName: '',
    companyId: 4
  });
  return userList;
}


export default function UserList() {
  //const data = useMatches();
  //const mathch = data.find(t => t.pathname == "/home");
  
  const deferData = useLoaderData();
  console.log(deferData)

  return (
    <>
      <Typography variant='h5'>用户列表</Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
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
      <Paper sx={{ boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>
        <TableContainer >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ background: 'rgb(244, 246, 248)' }}>
                <TableCell sx={hsx}>用户名</TableCell>

                <TableCell sx={hsx} >手机号</TableCell>
                <TableCell sx={hsx} >邮箱</TableCell>
                <TableCell sx={hsx} >注册时间</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {/* <Suspense fallback={<TableRow><TableCell align='center' colSpan={4}><CircularProgress></CircularProgress></TableCell> </TableRow>}>
                <Await resolve={deferData.userList}> */}
                  {
                      deferData.list.length>0?
                      deferData.list.map(t=>(
                        <TableRow key={t.userId}>
                        <TableCell ><CardHeader sx={{padding:0}} avatar={<Avatar src={t.avatar}></Avatar>} title={t.account}/></TableCell>
                        <TableCell>{t.mobile}</TableCell>
                        <TableCell>{t.email}</TableCell>
                        <TableCell>{t.createDate}</TableCell>
                        </TableRow>
                      ))
                      :<TableCell align='center' colSpan={4}>暂无数据</TableCell>

                    }
                {/* </Await>
              </Suspense>
             */}
             
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 25]}
          component="div"
          count={deferData.total}
          rowsPerPage={deferData.rows}
          page={deferData.page-1}
          //onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* <div>
        <Suspense fallback={<div><CircularProgress></CircularProgress></div>}>
                <Await resolve={deferData.userList} errorElement={<div>我错了</div>}>
                  {(data) =>(
                      data.list.length>0?
                      data.list.map(t=>(
                      
                        <div key={t.userId}><CardHeader sx={{padding:0}} avatar={<Avatar src={t.avatar}></Avatar>} title={t.account}/></div>
                
                      ))
                      :<div >no data</div>

                  )}
                </Await>
              </Suspense>
        </div> */}
      </Paper>
    </>
  )
}
