import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "~/app/components/Layout/Header";
import React from "react";
import {getServerSession} from "next-auth";
import {options} from "~/app/options";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({children}: {children: React.ReactNode }) {
  const session = await getServerSession(options)
  const user = session?.user

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header isSignedIn={!!session} userIcon={user?.image} />
        {children}
      </body>
    </html>
  )
}
