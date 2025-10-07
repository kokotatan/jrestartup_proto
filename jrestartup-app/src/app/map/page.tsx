import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import { Search, Plus, Minus, Navigation } from 'lucide-react'

export default function MapPage() {
  return (
    <MainLayout>
      <Header title="探索" showListButton />
      
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#5e8d71] flex border-none bg-[#f0f5f2] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <Search size={24} />
            </div>
            <input
              placeholder="駅を検索"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101814] focus:outline-0 focus:ring-0 border-none bg-[#f0f5f2] focus:border-none h-full placeholder:text-[#5e8d71] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>
      
      <div className="flex gap-3 p-3 overflow-x-hidden">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-4">
          <p className="text-[#101814] text-sm font-medium leading-normal">今日</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-4">
          <p className="text-[#101814] text-sm font-medium leading-normal">週末</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-4">
          <p className="text-[#101814] text-sm font-medium leading-normal">雨の日</p>
        </div>
      </div>
      
      <div className="@container flex flex-col h-full flex-1">
        <div className="flex flex-1 flex-col @[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5 @[480px]:rounded-lg @[480px]:px-8 @[480px]:pb-6 @[480px]:pt-8"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvPpVNHESp503Ro9I1EWviitjdzTZbzZl3oRFylFzIf7l7rijXIHJJdEE6YWk6FSJd1bxMjTmbwFYrXFoa5kIR-zUX_wptqI4h_XPKvr52Nxl54l7gxUvKRGmLM4sqmONp5G_KgBogprTbMDQ8bjqHgNFlGAm0jC6ZQsHOuJrGqDNhCnzhG9mDNfITTJivSsLot_coZUaPe2JJoctmidoNhsai18cpBYDUlBgOyQs1Jh21OtC4I1e58E1Q7meK9bafUoW_o3b5PWlb")'
            }}
          >
            <label className="flex flex-col min-w-40 h-12">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#5e8d71] flex border-none bg-white items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <Search size={24} />
                </div>
                <input
                  placeholder="駅を検索"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101814] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#5e8d71] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-col gap-0.5">
                <button className="flex size-10 items-center justify-center rounded-t-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  <Plus size={24} />
                </button>
                <button className="flex size-10 items-center justify-center rounded-b-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  <Minus size={24} />
                </button>
              </div>
              <button className="flex size-10 items-center justify-center rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                <Navigation size={24} className="transform scale-x-[-1]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
