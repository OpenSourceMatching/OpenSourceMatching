'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

type ProviderProps = {
  children: React.ReactNode
}

const Provider:React.FC<ProviderProps> = ( {children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider