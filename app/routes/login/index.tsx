
import React, { useEffect, Suspense, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import styled from '../../styles/Login.module.css'
import LoginForm from '../../components/LoginForm'
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import {auth as authenticator } from "~/utils/auth.server";
import { Form, useLoaderData, useNavigation, useParams, useSearchParams } from '@remix-run/react'
import {auth,sessionStorage} from '../../utils/auth.server'
import {json} from '@remix-run/node'
export async function action({ request}: ActionArgs) {
 
  var formData=await request.formData();
  

  return await authenticator.authenticate("user-pass", request, {
    successRedirect:formData.get("redirectTo")?.toString()??'/home',
    failureRedirect: "/login",
    context:{formData}
  });
};

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
type LoaderError = { message: string } | null;

export const loader = async ({ request }: LoaderArgs) => {
  
  await auth.isAuthenticated(request, { successRedirect: "/home/dashboard" });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const error = session.get(auth.sessionErrorKey) as LoaderError;
  

  return json({error});
};


function Login() {

var [par]=useSearchParams();
var redirectUrl=par.get("redirectTo")??undefined;
 var data=useLoaderData();

  return (

    <div id="__next" >
      <Box className={styled.loginBac} >
        <Box className={styled.loginWrap}>
         
          <Box className={styled.loginArea}   >
            <Form  method='post'>
              <LoginForm  errorMessage={data.error?.message}/>
              <input type="hidden" value={redirectUrl}/>
            </Form>
          </Box>

          {/* <Box className={styled.loginLeft}></Box> */}
        </Box>
      </Box>

    </div>
  )
}

Login.propTypes = {
  backArr: PropTypes.array

}

export default Login



