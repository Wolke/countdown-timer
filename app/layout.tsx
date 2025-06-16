import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "倒數計時器 | Countdown Timer | カウントダウンタイマー",
  description:
    "精美的多語言倒數計時器，支援繁體中文、簡體中文、英文、日文、韓文等8種語言。倒數到2025年7月5日上午4:18分。",
  keywords: ["倒數計時器", "countdown timer", "カウントダウンタイマー", "계산기", "temporizador", "minuteur", "timer"],
  authors: [{ name: "Countdown Timer" }],
  openGraph: {
    title: "多語言倒數計時器 | Multilingual Countdown Timer",
    description: "支援8種語言的精美倒數計時器，自動偵測瀏覽器語言。倒數到2025年7月5日上午4:18分。",
    url: "https://your-domain.com",
    siteName: "倒數計時器",
    images: [
      {
        url: "/countdown-og-image.png",
        width: 1200,
        height: 630,
        alt: "多語言倒數計時器",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "多語言倒數計時器 | Multilingual Countdown Timer",
    description: "支援8種語言的精美倒數計時器，自動偵測瀏覽器語言。",
    images: ["/countdown-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
