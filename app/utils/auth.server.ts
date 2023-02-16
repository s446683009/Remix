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
    secure: process.env.NODE_ENV === "production",
  },
});

export const auth = new Authenticator<string>(sessionStorage);

auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("user");
    const password = form.get("password");
    console.log(email)
    // replace the code below with your own authentication logic
    if (!password) throw new AuthorizationError("Password is required");
 
    if (!email) throw new AuthorizationError("Email is required");

    var user=await login({
      userName:email as string,
      password:password as string
    });

    return email as string;
  })
);
