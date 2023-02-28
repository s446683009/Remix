import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import {login} from '../apis/user.server'
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret"], // This should be an env variable
    secure: false,
    
  },
});

export const auth = new Authenticator<string>(sessionStorage,{
  sessionErrorKey:"loginError",
  sessionKey:"Token",
  throwOnError:true
});

auth.use(
  new FormStrategy(async ({ form }) => {
    const account = form.get("account");
    const password = form.get("password");

    // replace the code below with your own authentication logic
    if (!password) throw new AuthorizationError("Password is required");
 
    if (!account) throw new AuthorizationError("account is required");

    var result=await login({
      account:account as string,
      password:password as string
    });
    if(result.code==0){
           return result.data;
    }else{
        
          throw new AuthorizationError(result.message);
    }
    



  }),
  "user-pass"
);


export async function getToken(request:Request){
  
 var token=await auth.isAuthenticated(request);
  return token;
}