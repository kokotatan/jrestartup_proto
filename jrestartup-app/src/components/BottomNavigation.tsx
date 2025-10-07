'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Bookmark, Map, QrCode } from 'lucide-react'

const navigationItems = [
  {
    name: 'ホーム',
    href: '/',
    icon: Home,
  },
  {
    name: 'コレクション',
    href: '/collection',
    icon: Bookmark,
  },
  {
    name: '地図',
    href: '/map',
    icon: Map,
  },
  {
    name: 'スキャン',
    href: '/scan',
    icon: QrCode,
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="flex gap-2 border-t border-[#f0f4f2] bg-white px-4 pb-3 pt-2">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-1 flex-col items-center justify-end gap-1 ${
              isActive ? 'text-[#111714]' : 'text-[#648772]'
            }`}
          >
            <div className={`flex h-8 items-center justify-center ${
              isActive ? 'text-[#111714]' : 'text-[#648772]'
            }`}>
              <Icon 
                size={24} 
                fill={isActive ? 'currentColor' : 'none'}
                stroke={isActive ? 'none' : 'currentColor'}
              />
            </div>
            <p className={`text-xs font-medium leading-normal tracking-[0.015em] ${
              isActive ? 'text-[#111714]' : 'text-[#648772]'
            }`}>
              {item.name}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
