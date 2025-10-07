'use client'

import Link from 'next/link'
import { ArrowLeft, Settings, Share, List, HelpCircle } from 'lucide-react'

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showSettingsButton?: boolean
  showShareButton?: boolean
  showListButton?: boolean
  showQuestionButton?: boolean
  onBackClick?: () => void
}

export default function Header({
  title,
  showBackButton = false,
  showSettingsButton = false,
  showShareButton = false,
  showListButton = false,
  showQuestionButton = false,
  onBackClick,
}: HeaderProps) {
  return (
    <div className="flex items-center bg-white p-4 pb-2 justify-between">
      {showBackButton ? (
        <button
          onClick={onBackClick}
          className="text-[#111714] flex size-12 shrink-0 items-center"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="w-12" />
      )}
      
      <h2 className="text-[#111714] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        {title}
      </h2>
      
      <div className="flex w-12 items-center justify-end">
        {showSettingsButton && (
          <Link
            href="/profile"
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111714] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <Settings size={24} />
          </Link>
        )}
        
        {showShareButton && (
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111714] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <Share size={24} />
          </button>
        )}
        
        {showListButton && (
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111714] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <List size={24} />
          </button>
        )}
        
        {showQuestionButton && (
          <Link
            href="/faq"
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111714] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <HelpCircle size={24} />
          </Link>
        )}
      </div>
    </div>
  )
}
