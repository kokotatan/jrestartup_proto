'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'

export default function LoginPage() {
  const router = useRouter()
  
  const handleBackClick = () => {
    router.back()
  }

  const handleLogin = () => {
    // 開発用：ログイン成功としてホーム画面にリダイレクト
    router.push('/')
  }

  return (
    <MainLayout>
      <Header 
        title="ログイン" 
        showBackButton 
        onBackClick={handleBackClick}
      />
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="メールアドレス"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111814] focus:outline-0 focus:ring-0 border-none bg-[#f0f5f2] focus:border-none h-14 placeholder:text-[#5f8c71] p-4 text-base font-normal leading-normal"
          />
        </label>
      </div>
      
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="パスワード"
            type="password"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111814] focus:outline-0 focus:ring-0 border-none bg-[#f0f5f2] focus:border-none h-14 placeholder:text-[#5f8c71] p-4 text-base font-normal leading-normal"
          />
        </label>
      </div>
      
      <div className="flex px-4 py-3">
        <button
          onClick={handleLogin}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#04af48] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">ログイン</span>
        </button>
      </div>
      
      <p className="text-[#5f8c71] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
        パスワードを忘れた場合
      </p>
      
      <h3 className="text-[#111814] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        または
      </h3>
      
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
          <button
            onClick={handleLogin}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f5f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">Googleでログイン</span>
          </button>
          <button
            onClick={handleLogin}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f5f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">Appleでログイン</span>
          </button>
        </div>
      </div>
    </MainLayout>
  )
}
