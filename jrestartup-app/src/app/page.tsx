import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <MainLayout>
      <Header title="LinkCraft" showSettingsButton />
      
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5JnJOiEis_QwNaj0OvW1YBtADXD5RaLN92WsBGa4csNzV_7k4Gqo7dYjuxafqgLsPdSb2eizhTz-gF76V0KBxolk9acMui3Uvtui5LiPBezifop0-mcvUTqq_IZ5qEUZl2bGiADroQsPJyjeEQmKnWcAPEibcPPKXPrutGHPbpWcnA6LKRosVV6q3JoAQmLCm1hJ8452cadd49W49HC7iPL6FohER-7-rVS6_XQiefZZujVHtbiVperX_RTqJENzm3ki0PLAokxM7")'
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                旅を、もう一度つなぐ。
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                旅の記憶を、あなたの手の中に。
              </h2>
            </div>
            <div className="flex-wrap gap-3 flex justify-center">
              <Link
                href="/station/hanamaki"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">購入</span>
              </Link>
              <Link
                href="/scan"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f4f2] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">スキャン</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        注目駅
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <Link href="/station/hanamaki" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2JNaS-IuaK7Dbh_Z8pBwJfAbShegbs6tOzznqtAod9G1iRR3bPZ3LuV3c5o3rl5YeQYhFl2TJZbrVob94a2n3nMOH7P07wjqC_bsNzhdB6mWcF_4YA03ndL2cs9UYyE_hP47446P9J_lzjqK8OXrELXYpWr-_IX3TSnhKFXu6Um6aoZBv2JLCEEFUJrwRLxjvS4Aouuss-ikMLO45rZEldCzCRLiJqROMxuBIeZqhfnma5cwz0IoKBZhoZPSSd2FETQ5XI3XllASX")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">花巻駅</p>
          </Link>
          <Link href="/station/naruko" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPmm_Vr1PCjKl72YGenyADOdOOgj8X26UEvH300sEQStRGiK2Heh6LoVzS1rsxcHRc-hzwhJUX97pL_T39gjJfutX1iA2DO3NlzZx0fvyo9Kf6qEaPsu4J4i9hDWVBmQE-W1vzCfKOaX0yJi-2ykOuCd-u0EHrz6HrHyZPHQCltbWeqiOY_Sl2mRbWHBfugVoaTrmFnvPKr6vP0TC06bVPB9KZMGVKg-6mgDYqaSaxeAyEq_26lm4uSzwJ1KNqZo6psTOza63PBUTR")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">鳴子駅</p>
          </Link>
          <Link href="/station/ishinomaki" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFEFHxFOcXWkuHS_M6fiuVXk5GLokDjFXhMUHmW71jpJsm1uISjRqQpfcXEcF3n2WdTN18k9xcHZWRqBtdoSrr5CZrAUTATfxZJQY2FPGYpfA6I87yw_4HeqFKTtjb8sK2GintzCYO9usZ6MdRjNX3nsbDViGVURqPFhDySCnYB8S9Y4nlwM5xe0gVhZCUu6EEhrO6RjPfqahO2tEczSj33O5BC0p3mmAibxkYaaTaXi95ylNm4lbsQ7uPQhDm53dBG2SBF55mOMZ3")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">石巻駅</p>
          </Link>
        </div>
      </div>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        新着キーホルダー
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <Link href="/station/hanamaki" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6FxNUBMLumUy2p3jqamSbIDnLVjT11WYAsvHCXyTyzNHuvzDB6flKPt2OoM4rlZfPbxMVukDn4Unm_1BEKLSB8m_4xBe7WSPLA6mEOR0tj19sbb3PI1Ty0KoAVJuj61S8NhxgYWuT1sdLtKAsu7i60p1KyAmnCIGDAGWAdUfInFvTeoV0K5YevAoLwZtCWhqQlnFUIerDKkeH4AptK216Lljm0qmelM7tsIakSO5YLsodh__TbjaS5aKquEAuDLvzaP3eWRNfkG3_")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">花巻駅 限定キーホルダー</p>
          </Link>
          <Link href="/station/naruko" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFWR66YIFiZijqnW9-M1ock1qMxpiCEWtmG4AdKm7JbHfSrRzZ7Eeg3HPDsp_wZyL7AoacJKAR5YU68gjlTxprsnuz3ExpkE9tVo88LIhCTSSKzmErEKplJinwUd3vYhzRYK-bYB82nZ6BTeYLyPeWR7TGm3giwAOpgMzrtZrQQaDHiVQtmku0quuOvpDlx1zuyXsc_ICYMAYviUoE7mg7j9YrFh3Jkt1w_UgCAAX7hU1S6dkX9tGe1ihS7zD4AJ4Vd9z6ocdea9Xq")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">鳴子駅 限定キーホルダー</p>
          </Link>
          <Link href="/station/ishinomaki" className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdtduwq2hSAOf39sBTR5ormoRoAAJMKQ_qJvnQbAAObPdnbfrYmQp-qLHh63CWvSVU6b1c0LvJoEPypurP7BKpVzFkfePcO9aDfr8GR7amk95hD1jaQIPl9cVINMA2BHoQbVXYlBt7dDFfI5pt3WbuCHiZ61WlJtHwLGxVJ6MI8Qu2i4BR_2f0VIzp58pgCt3gOYdsKiKxwTS2AQsV_RM7z8STot-A2kBR_ZgUvMQA7NvtWpWA0tpqJAHpKB29KscdMU3KyA-hfvWO")'
              }}
            />
            <p className="text-[#111714] text-base font-medium leading-normal">石巻駅 限定キーホルダー</p>
          </Link>
        </div>
      </div>
      
      <h2 className="text-[#111714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        マイコレクション
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <Link href="/station/hanamaki" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2_DGEm9hNC_-vIxgnIAu02ZXtHNCTHNpcPfvf5oLyUwqta8_XbiWiVE1DOq1yYdh-EdxKz2adypx1USpqWG1udYcx5c48_izikl1zTmMwpFILqmPtq_4SxTnpJhbVctKp35mG3xqRqQS_0tnOuqq3RkCV_wfJKz2Nc8nOJ2SBdlrmlPhbMCti1w9tKi3azimFU7_D07bkBmzNy78lthdlmQdj2hMknq5XTImgX2FsVP-MXGgj00rGLPJCVROhadJ7JBnNJQfQ2wGU")'
            }}
          />
        </Link>
        <Link href="/station/naruko" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd9mRMHBfhuVbQwOXI4tQXwvPP6CXlOWg5zUHsVmRcoHt8i4tKwnyezzRPzCk0U7rvAxzoOSq-Sm9bJGRw9D7iT0MVak7Gqs6rqSkQGb7NHgbv0fHjih0xGS31ouAivCi5oW1Vxq6vfhpgQwzhvn8itQo7t0ShGEGVsCK3xM65b1IIA-zUv7eH1xftRVSB8cKobW3nWDSBh9Hqtr0xHgMEqMIn9dtRM7XTAC79I8qaoiECSp3CDODSfwc-pt24sMPihocrGAT_GKz8")'
            }}
          />
        </Link>
        <Link href="/station/ishinomaki" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUzG7ngo0VYfOq0GqG3qrsVyYJJZjWK8HzWPD8sXxLbWLTtfSgbey7KqhqdexOfsPFsv2lzFjCn8VVbfK3v-lc32Q4TRf_7mw5TSEaDcIM16oE60XFkjwYnjCq6L3Prhr6vD4jl_ZGVea0vyP1TFCKHlwsfEEE3cmhZYtJFX_5IQtYH_MAT40i_nVAEago_P29wafysAys_WV34dFzMRXuurvcecQk93VImfnpPWJBJ6jEdBngUFWQiQdk2A59DBPEMMxcjlqE3VZ0")'
            }}
          />
        </Link>
        <Link href="/station/omiya" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxLJ0tsUbfx88PnnWE1aZLbvmFMku3vPYy7GZqBZ1oId8pfLo422u-Vn99XrsF31etr-IWS8iAsb7uIE9o8xeSXwTfqk2Wb2ozxFa0i_jjOJCN1Nu59cX1mO8lPJvBydR3pVlPzfYD93Pen7UwcS3QD5wwUVm775xM2p32QZhC9qlIRvV8ZdEWFeglA5ySkiUnDw0NlZzpb6PufIzZncAwIrgJGLJthGTXRUps98Gr_rjhVFUPQPyAkentqnA4CpHqSsCHoPWdDEAm")'
            }}
          />
        </Link>
        <Link href="/station/sendai" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcK8QPDfIr7aO_xEWgLmouYIIn8Civ_BphNC_nNb-UT4iTtlibjn1zR4eNKoD-kjYqfkPbhFwSAEVs9jXiC6SX8amCgBoWDF6Bk0TtBEJxbG7v8p1v0Ik_GoAtni2RuFJ68XJHs0ka15QcoBCTwZaHitU2ilCUe3Czt4EZvmGS3jueCr3dprG5xpotV71N9URCDJJJxd3FWoCJJDgjeO8N5nx7dGrheNrw4__i1z8U1lgFSIBS6YLM_oh40U-oglTEWXwO4JzVli8l")'
            }}
          />
        </Link>
        <Link href="/station/fukushima" className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOyvRl2DoZ3MlzzLYAr_SIH30_Jx_O1CupRODeXPdVJiAud-YAEwuvSk9-G89JHTJfgixEosxJDcNmFAdbIL3ldC5cHOXa_gh0886AXBHaXUW7pGz3DJjcU0tIPFAUFJki2Qp85GSz4Htnnjm2qtBg1lQhhwtrc4Ml6dX3wwRw8G-MyL9_baAfoPwOuRBUDXSrFZQdwQgjEvFXIvy_7qGh20rIy3TxehGlgDEcSX59fjWmOlI20V03zSEOoP96C0hTzK-urw287ZiY")'
            }}
          />
        </Link>
      </div>
      
      <div className="px-4 py-3">
        <p className="text-[#648772] text-sm font-normal leading-normal pb-3 pt-1 text-center">ⓒ 2024 LinkCraft</p>
        <p className="text-[#648772] text-sm font-normal leading-normal pb-3 pt-1 text-center">利用規約 ・ プライバシーポリシー ・ お問い合わせ</p>
    </div>
    </MainLayout>
  )
}