'use client'

import {Button} from "~/app/components/ui/button";
import {signIn} from "next-auth/react";

export default function Home() {
  return (
    <>
      <div>
        <Button onClick={() => signIn()}>Login</Button>
      </div>
    </>
  )
}