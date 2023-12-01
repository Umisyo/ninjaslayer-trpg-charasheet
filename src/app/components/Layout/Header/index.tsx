import {SignInButton, SignOutButton} from "~/app/components/AuthButton";
import Link from "next/link";
import React from "react";

export interface HeaderProps {
  isSignedIn: boolean,
  userIcon?: string | null | undefined
}

export default function Header({isSignedIn, userIcon}: HeaderProps) {

  return (
    <header className="flex justify-between w-full">
      <h1>
        <Link href="/">ニンジャスレイヤーTRPG キャラシート保管庫</Link>
      </h1>
      {isSignedIn ? (
        <div className="flex items-center">
          <SignOutButton/>
          {userIcon &&
              <img src={userIcon} alt="user icon" className="w-8 h-8 rounded-full"/>
          }
        </div>
      ) : (
        <SignInButton/>
      )}
    </header>
  )
}