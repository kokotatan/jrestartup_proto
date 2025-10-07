'use client'

import { ReactNode } from 'react'
import BottomNavigation from './BottomNavigation'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white justify-between group/design-root overflow-x-hidden">
      <div className="flex-1">
        {children}
      </div>
      <div>
        <BottomNavigation />
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  )
}
