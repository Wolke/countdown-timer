import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "龍樹諒預言倒數計時器 | 2025年7月5日 | 台灣菲律賓板塊連結預言",
  description:
    "根據龍樹諒漫畫預言，倒數計時至2025年7月5日上午4:18分。預言描述日本與菲律賓間海域災難，範圍涵蓋台灣、香港、印尼摩羅泰島至北馬利安納群島的板塊連結事件。支援8種語言的精美倒數計時器。",
  keywords: [
    "龍樹諒", "龍樹涼", "預言", "2025年7月5日", "台灣", "菲律賓", "香港", "板塊連結", 
    "地震預言", "災難預警", "倒數計時器", "countdown timer", "カウントダウンタイマー", 
    "日本菲律賓海域", "印尼摩羅泰島", "北馬利安納群島", "地質災害", "預測", "漫畫預言"
  ],
  authors: [{ name: "龍樹諒預言倒數計時器" }],
  openGraph: {
    title: "龍樹諒預言倒數計時器 | 2025年7月5日台灣菲律賓板塊連結",
    description: "根據龍樹諒1999年與2021年兩次夢境預言，倒數至2025年7月5日上午4:18分。預言範圍從日本延伸至台灣、南至印尼摩羅泰島、東達北馬利安納群島的重大板塊連結事件。",
    url: "https://wolke.github.io/countdown-timer/",
    siteName: "龍樹諒預言倒數計時器",
    images: [
      {
        url: "/countdown-og-image.png",
        width: 1200,
        height: 630,
        alt: "龍樹諒預言2025年7月5日台灣菲律賓香港板塊連結倒數計時器",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "龍樹諒預言倒數計時器 | 2025年7月5日板塊連結預言",
    description: "根據龍樹諒預言，倒數至2025年7月5日。預言範圍涵蓋台灣、菲律賓、香港等地區的重大板塊連結事件。",
    images: ["/countdown-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wolke.github.io/countdown-timer/",
    languages: {
      'zh-TW': 'https://wolke.github.io/countdown-timer/',
      'zh-CN': 'https://wolke.github.io/countdown-timer/?lang=zh-CN',
      'en': 'https://wolke.github.io/countdown-timer/?lang=en',
      'ja': 'https://wolke.github.io/countdown-timer/?lang=ja',
    }
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="TW" />
        <meta name="geo.placename" content="Taiwan" />
        <meta name="geo.position" content="23.8;121.0" />
        <meta name="ICBM" content="23.8, 121.0" />
        <meta name="article:tag" content="龍樹諒" />
        <meta name="article:tag" content="預言" />
        <meta name="article:tag" content="台灣" />
        <meta name="article:tag" content="菲律賓" />
        <meta name="article:tag" content="香港" />
        <meta name="article:tag" content="板塊連結" />
        <meta name="article:tag" content="2025年7月5日" />
        <link rel="canonical" href="https://wolke.github.io/countdown-timer/" />
        <meta name="google-site-verification" content="[YOUR_GOOGLE_VERIFICATION_CODE]" />
        <meta name="msvalidate.01" content="[YOUR_BING_VERIFICATION_CODE]" />
        
        {/* 額外的結構化資料 */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "龍樹諒預言倒數計時器",
            "alternateName": "Tatsuki Ryo Prophecy Countdown Timer",
            "description": "根據龍樹諒1999年與2021年預言夢境，倒數至2025年7月5日上午4:18分的台灣菲律賓香港板塊連結事件倒數計時器",
            "url": "https://wolke.github.io/countdown-timer/",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": "龍樹諒",
              "alternateName": "たつき諒"
            },
            "datePublished": "2025-06-16",
            "inLanguage": ["zh-TW", "zh-CN", "en", "ja", "ko", "es", "fr", "de"],
            "keywords": "龍樹諒,預言,台灣,菲律賓,香港,板塊連結,2025年7月5日,倒數計時器"
          }`}
        </script>
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "什麼是龍樹諒預言？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "龍樹諒是日本漫畫家，曾在1999年7月5日夢見日本與菲律賓之間海域發生爆炸，並於2021年7月再次夢見相同場景。預言描述災難範圍從北邊的日本往西延伸到台灣、南至印尼摩羅泰島、東邊則達北馬利安納群島。"
                }
              },
              {
                "@type": "Question",
                "name": "預言的具體時間是什麼時候？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "根據龍樹諒的預言，事件將發生在2025年7月5日上午4:18分。"
                }
              },
              {
                "@type": "Question",
                "name": "這個倒數計時器支援哪些語言？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "倒數計時器支援8種語言：繁體中文、簡體中文、英文、日文、韓文、西班牙文、法文和德文，會自動偵測瀏覽器語言設定。"
                }
              }
            ]
          }`}
        </script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
