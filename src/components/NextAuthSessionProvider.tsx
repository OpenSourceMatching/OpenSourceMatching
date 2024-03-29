'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

type ProviderProps = {
  children: React.ReactNode
}

const NextAuthSessionProvider:React.FC<ProviderProps> = ( {children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default NextAuthSessionProvider