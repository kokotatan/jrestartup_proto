'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import { Play, MapPin, Share, Link as LinkIcon } from 'lucide-react'

interface StationDetailPageProps {
  params: {
    id: string
  }
}

export default function StationDetailPage({ params }: StationDetailPageProps) {
  const router = useRouter()
  
  const handleBackClick = () => {
    router.back()
  }

  return (
    <MainLayout>
      <Header 
        title="駅の詳細" 
        showBackButton 
        onBackClick={handleBackClick}
      />
      
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px]"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7SdakZ-wjnodaUyPmlWpxc1IL8dw1xlJ1ZalXC_Px1MtqfPhJEw2UkE2hzZhgZgfXLGNzvxUBaKYd35IFvEAisUAgtNPC2OKI9k2ZqraV65SX0jydxfJDczETgmNDe_H4BADXVIwxh9GzUdQS4rpIU1dbWH6A2RcFfxCefcEpIgHHTGj6-jkvS90yxy0e06Jia_rMTjrTL3k7KtpGQSKMpeUHN90Ks0f17rCW3qWoZOwnIES8r6xpjnW0RBi0XjFYKcPsaJIMd1rU")'
            }}
          >
            <div className="flex p-4">
              <p className="text-white tracking-light text-[28px] font-bold leading-tight">花巻駅</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-[#648772] text-sm font-normal leading-normal pb-3 pt-1 px-4">
        JR東北本線 · 雪 · 温泉 · 海岸
      </p>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        ストーリーブロック
      </h2>
      <p className="text-[#111714] text-base font-normal leading-normal pb-3 pt-1 px-4">
        花巻駅は、日本のアルプスに抱かれ、世界レベルのスキーやスノーボードへの玄関口です。スロープの外にも、心を身もやす温泉や美しい海岸の景色があり、山と海の絕妙な体験を提供します。
      </p>
      <p className="text-[#111714] text-base font-normal leading-normal pb-3 pt-1 px-4">
        地元メーカーの声：「私たちの工芸品は、雪の山々から活気に溢れる海岸の景観まで、花巻の自然の美しさからインスピレーションを受けています。」
      </p>
      
      <div className="px-4 py-3">
        <div className="flex flex-col gap-3 rounded-lg bg-[#f0f4f2] px-4 py-3">
          <div className="flex items-center gap-4 overflow-hidden">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh2cS-ue8fkCULx_aoMVhy0ftBc1bYGRo1b50fS4_LbZoFOLaMcf1q9pX46EC5Seh2ZNkPuznoRLRJZ_EwPoTTUbK4PdvUXy5pxcVx1o42UYCsK0HVv0jyzck3NkE8Qm5FEX0HpHFIlHE8X1wY5E6vsaNrk1Xt0DdaD1tD0Pde9EZvViKBOhqCdXhFB8ny4q_XLi7RyTD33znSfQlowK6sOHxdqukY6KpcwoluTzBS7zj0xTae8s0nrSvIue0UFImO_iV3qETv3D-C")'
              }}
            />
            <div className="flex-1">
              <p className="text-[#111714] text-base font-bold leading-tight truncate">花巻の環境音</p>
              <p className="text-[#648772] text-sm font-normal leading-normal truncate">自然音</p>
            </div>
            <button className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#38e07b] text-[#111714]">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        キーホルダーリスト
      </h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#648772] text-sm font-normal leading-normal">花巻駅キーホルダー</p>
              <p className="text-[#111714] text-base font-bold leading-tight">アンロック：花巻駅のストーリー</p>
              <p className="text-[#648772] text-sm font-normal leading-normal">花巻駅の歴史や隠れた名所を発見します。</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f4f2] text-[#111714] text-sm font-medium leading-normal w-fit">
              <span className="truncate">表示</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzDDI-v3HD6NdPjS3kWkon634pD-wVf6RU_MIAFRRYOP05505m7RvFNNKpqcQz8xm-TYkBq6S8zJjP-L46I_a8EL0e_IkzvKlFg0L9KR8_Hy3Ok5kVyJd31r-PS7ZeycMTA5dfetH0QRvISNl7wKEvzNbEsglPegSD5KMgMgCucKQj7d-9YtfK8z5B4jQ8Yr7nsReyMFx8UW_uBkZXouPbc80i-Nn6cRolpTiicipIPMjRPWGc4qFjNGeKwOf-l6vvtosVdrYWxCaF")'
            }}
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#648772] text-sm font-normal leading-normal">花巻スキーリゾートキーホルダー</p>
              <p className="text-[#111714] text-base font-bold leading-tight">アンロック：スキーリゾートガイド</p>
              <p className="text-[#648772] text-sm font-normal leading-normal">最高のスロープやアプレスキーのアクティビティーに関するインサイダーのティップを入手します。</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f4f2] text-[#111714] text-sm font-medium leading-normal w-fit">
              <span className="truncate">表示</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYP1fhSmBWED4hR3q4XzVjstKI8bauLXCRGkkxLY5RL36p59NIYZc9zgkIoy61vBipfAUHRPn9JJkTcEOLRoJDOU8KLhcF3ztv3zhSYKrILd0k_Oi2JplRw1DA2DQBJFfssGebQVrSuQ6Hci3MqMwyIbOEDuCQGNRbbw74ETQ1PxaGHH5axDpaK_AtlZVkWs2fLGyPrXzp0TdxApeaU2Kd9trWR59ak8CK11xcKFnsr_MnV_PU9zlGp0p_B4rjTin42IJV9BHk9teM")'
            }}
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#648772] text-sm font-normal leading-normal">花巻温泉キーホルダー</p>
              <p className="text-[#111714] text-base font-bold leading-tight">アンロック：温泉ガイド</p>
              <p className="text-[#648772] text-sm font-normal leading-normal">スロープでの一日の後、リラックスして心を身もやすのに最適な温泉を見つけます。</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f4f2] text-[#111714] text-sm font-medium leading-normal w-fit">
              <span className="truncate">表示</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXgAC0ssd6GA2x5UQeohI9iC9oibf_hY2fG4aDoNhj7YhiU_WB4gKiI4OZUdn66y6FfsvzgyAJDdm0j_U7Cjvbgbyx7_o9bo09XFNraZaGCr-uJhth6HtdM_pcA9iv91LqMoUzhe52CQKSEhx0r77qDiZKXqUvgdWYpSs3a-DunYWsdGT25TVadbvCnRoVlRGkqzAq5SN6u3QM8uvJHYEdeuhGokTgi8cC3Kx3oxMX_W6McX1J-HepjapP4GMY23BITwaHewI2FTUv")'
            }}
          />
        </div>
      </div>
      
      <div className="flex px-4 py-3">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#38e07b] text-[#111714] text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">体験を試す</span>
        </button>
      </div>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        地図ポップオーバー
      </h2>
      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjHiq0JXnFq-S7Ob_rtIGJY_D7-5RacvdwGrZvEE3gQ3yfbk36-thEcw4Muh6YUEdZRFRIDYZrOIzs6RuNYO6MkrO-63eQebKNYTEsGMYn7IBmHQflYqXv17_ja4D_Y3eFvc0Jj8XmXPoOzX1-rpTTr_8keSIBpARhxepvWSO-KUqYqxBGD2GXVUfl4AbYphHSL1nXte6PIqNhuymqqHI7wxiLXTKp0XPf11-Xi5hFfmBlGGglj1YxC5v_f_bNZ-ZvfUXY5dUCZTwB")'
          }}
        />
      </div>
      
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div className="text-[#111714] flex items-center justify-center rounded-lg bg-[#f0f4f2] shrink-0 size-12">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#111714] text-base font-medium leading-normal line-clamp-1">花巻スキーリゾート</p>
          <p className="text-[#648772] text-sm font-normal leading-normal line-clamp-2">スキーリゾート</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div className="text-[#111714] flex items-center justify-center rounded-lg bg-[#f0f4f2] shrink-0 size-12">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#111714] text-base font-medium leading-normal line-clamp-1">花巻温泉</p>
          <p className="text-[#648772] text-sm font-normal leading-normal line-clamp-2">温泉</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div className="text-[#111714] flex items-center justify-center rounded-lg bg-[#f0f4f2] shrink-0 size-12">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#111714] text-base font-medium leading-normal line-clamp-1">花巻食堂</p>
          <p className="text-[#648772] text-sm font-normal leading-normal line-clamp-2">地元レストラン</p>
        </div>
      </div>
      
      <div className="@container">
        <div className="gap-2 px-4 grid-cols-[repeat(auto-fit, minmax(80px,_1fr))] grid">
          <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center">
            <div className="rounded-full bg-[#f0f4f2] p-2.5">
              <Share size={20} />
            </div>
            <p className="text-[#111714] text-sm font-medium leading-normal">共有</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center">
            <div className="rounded-full bg-[#f0f4f2] p-2.5">
              <LinkIcon size={20} />
            </div>
            <p className="text-[#111714] text-sm font-medium leading-normal">ディープリンク</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
