'use client'

import {Button} from "~/app/components/ui/button";
import {signIn, signOut} from "next-auth/react";

const SignInButton = () => {
  return (
    <Button variant="ghost" onClick={() => signIn()}>Login</Button>
  )
}

const SignOutButton = () => {
  return (
    <Button variant="ghost" onClick={() => signOut()}>Sign Out</Button>
  )
}

export {SignInButton, SignOutButton}