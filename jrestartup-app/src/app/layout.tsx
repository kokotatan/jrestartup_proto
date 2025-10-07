import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Noto_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'LinkCraft - 旅を、もう一度つなぐ',
  description: '旅の記憶を、あなたの手の中に。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${plusJakartaSans.variable} ${notoSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}