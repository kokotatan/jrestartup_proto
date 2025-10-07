import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import Link from 'next/link'

export default function CollectionPage() {
  return (
    <MainLayout>
      <Header title="コレクション" showShareButton />
      
      <div className="flex flex-wrap gap-3 px-4 py-3">
        <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dae7df] p-3 items-start">
          <p className="text-[#101814] tracking-light text-2xl font-bold leading-tight">12</p>
          <div className="flex items-center gap-2">
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">アイテム</p>
          </div>
        </div>
        <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dae7df] p-3 items-start">
          <p className="text-[#101814] tracking-light text-2xl font-bold leading-tight">8</p>
          <div className="flex items-center gap-2">
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">ステーション</p>
          </div>
        </div>
        <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dae7df] p-3 items-start">
          <p className="text-[#101814] tracking-light text-2xl font-bold leading-tight">3</p>
          <div className="flex items-center gap-2">
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3 p-3 overflow-x-hidden">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-2">
          <p className="text-[#101814] text-sm font-medium leading-normal">ステーション</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-2">
          <p className="text-[#101814] text-sm font-medium leading-normal">シリーズ</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-2">
          <p className="text-[#101814] text-sm font-medium leading-normal">レアリティ</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f5f2] pl-4 pr-2">
          <p className="text-[#101814] text-sm font-medium leading-normal">未収集</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <Link href="/station/hanamaki" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe5bgAtCAF_ptJU8AbwPzJFkfTH17Fq0PJPgUybEBgwA745KOLP_IHLef1A1m77quWljRdzfMkl3b-m-dlqu-K9ORJjZfTRlyLcL9hu9fW9-mprVW6-J7lh0ZMHAyLsuT1GOVui8jgNdhGfEq6MYshyfHlpWI73OjkxCK8CbBO0Mi8P8QXshCZN9TU3RrV5dTTqsC8DFsNRiQh8-XiesZal-ks9LYu21FFqDuT7FrfGojYrsMvhfLFgr_UAdsbBebgqyTwdjJ02HuO")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">花巻駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 1</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">コモン</p>
          </div>
        </Link>
        <Link href="/station/naruko" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiEIWOTzy7TSNMWOUOh_7VuyntU8w9Kg2QBR4e_xb-bWIjQsH7l8ta5v0aVrqfWjtVSqkeOTgbqO0dIdgsnDbPFwpL_NlMgQ8SszePoUz3doA-K27ino5er01MexAkXvHCC_bAv7Aq7-0_XcNeAguLDS11j7CYs7yKS3DDzOQKerw6AGgsKuCjTPp3nFnpMU5FYKNAQxEMzd6LuNW05bU4W76OJD_lCLvWvDPrAsSBgNjX7IjmX2vBV37QLL3d0DWXwb5qNEv2V9gx")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">鳴子駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 2</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">レア</p>
          </div>
        </Link>
        <Link href="/station/ishinomaki" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKlXCuFKbTdbCsFUs_uj6fpQySBp41U8yUbi3aX-R42nqlA2Y6NGdUFsqTlwtINQ03i-G0SnyklY4ZIkU6VxmIVrgNI9W4KXkW0JlCwstOLpUbGnECqvwf8G-GXMn-muGQJoDlinz1N4fh4ks4V3TUdZRWamfFELIGr50hc6yciVelMOcfp5yJNcxPlngKKufhxXuqXruCcO20_4ezijU-pTdMdNvlcFiK6S6eigM3s7J0LdjSC2jeYe5C-T8MzSixnBadQlhSpKCx")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">石巻駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 1</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">コモン</p>
          </div>
        </Link>
        <Link href="/station/omiya" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgEc-BXtTM2dfwVZ0kKo4a3pN9eOBywL2zbSipF7nlUAmjP8iU-XPVkWizYUlcwzbWXG2vTzYrCVWYDdCI6eVu-TvvmxnExNyNsYDGIxCS4ralOhzFlMVOL2xUydVu9d62-hKkOhpoYlOlYD0kcEhBxYyjT3NJOS9pe-pe5IhDbiZ2-ioMTgVL3U7kzSxuAzYjBvr0VN13y7shM0csJBrGD5wBEaMrBVxXdDpjj5iJRCN2LM8Nd865yWiPLbCFY5NKsxOM6YvUasMV")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">大宮駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 3</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">アンコモン</p>
          </div>
        </Link>
        <Link href="/station/sendai" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcK8QPDfIr7aO_xEWgLmouYIIn8Civ_BphNC_nNb-UT4iTtlibjn1zR4eNKoD-kjYqfkPbhFwSAEVs9jXiC6SX8amCgBoWDF6Bk0TtBEJxbG7v8p1v0Ik_GoAtni2RuFJ68XJHs0ka15QcoBCTwZaHitU2ilCUe3Czt4EZvmGS3jueCr3dprG5xpotV71N9URCDJJJxd3FWoCJJDgjeO8N5nx7dGrheNrw4__i1z8U1lgFSIBS6YLM_oh40U-oglTEWXwO4JzVli8l")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">仙台駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 2</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">レア</p>
          </div>
        </Link>
        <Link href="/station/fukushima" className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOyvRl2DoZ3MlzzLYAr_SIH30_Jx_O1CupRODeXPdVJiAud-YAEwuvSk9-G89JHTJfgixEosxJDcNmFAdbIL3ldC5cHOXa_gh0886AXBHaXUW7pGz3DJjcU0tIPFAUFJki2Qp85GSz4Htnnjm2qtBg1lQhhwtrc4Ml6dX3wwRw8G-MyL9_baAfoPwOuRBUDXSrFZQdwQgjEvFXIvy_7qGh20rIy3TxehGlgDEcSX59fjWmOlI20V03zSEOoP96C0hTzK-urw287ZiY")'
            }}
          />
          <div>
            <p className="text-[#101814] text-base font-medium leading-normal">福島駅</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">シリーズ 1</p>
            <p className="text-[#5e8d71] text-sm font-normal leading-normal">コモン</p>
          </div>
        </Link>
      </div>
    </MainLayout>
  )
}
