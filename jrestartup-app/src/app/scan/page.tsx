import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import Link from 'next/link'

export default function ScanPage() {
  return (
    <MainLayout>
      <Header title="キーホルダーをスキャン" showQuestionButton />
      
      <p className="text-[#101814] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        キーホルダーをスマートフォンに近づけてください
      </p>
      
      <div className="flex w-full grow bg-white @container p-4">
        <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[2/3] rounded-lg flex">
          <div
            className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj3B2gpxte-ElQctUpgCNOY2-hDN-YAGRdozArQdNyFZlsz9OCyQ7WhR7IWbHPJvmaL7_PffHQZmNnZM1QKPwFXTMfo6OxyUp3DEkUPrw_8lmsUSiKgSdQaoXukgIe9K-pDeuUMqblKn8U83lVpzAg7vthoX2lP-vbRQaJ31S6_jPyibk4dQdAUOjGFqU9GlDyembfUhGWYgr7YUMqAgnm0M_SFXsnDXuKE3mQpOHMKJwdua32VbauM7BccR7hzM22T8z7zGrg2zPq")'
            }}
          />
        </div>
      </div>
      
      <div className="flex px-4 py-3 justify-center">
        <Link
          href="/station/hanamaki"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f5f2] text-[#101814] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">NFCをシミュレート</span>
        </Link>
      </div>
    </MainLayout>
  )
}
