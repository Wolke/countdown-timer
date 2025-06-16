"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Share2, Facebook, Twitter, MessageCircle, Send, Globe, BookOpen, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { detectLanguage, translations, formatShareText, type Language } from "./lib/translations"
import { HorrorEffects } from "./components/horror-effects"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)
  const [language, setLanguage] = useState<Language>("zh-TW")
  const [mounted, setMounted] = useState(false)

  // 目標時間：2025年7月5日4點18分
  const targetDate = new Date("2025-07-05T04:18:00")

  useEffect(() => {
    setMounted(true)
    setLanguage(detectLanguage())
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
      }
    }

    // 立即計算一次
    calculateTimeLeft()

    // 每秒更新一次
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  const t = translations[language]

  const shareData = {
    title: t.title + " - 2025年7月5日",
    text: formatShareText(t.shareText, timeLeft),
    url: typeof window !== "undefined" ? window.location.href : "",
  }

  const handleShare = async (platform?: string) => {
    const url = encodeURIComponent(shareData.url)
    const text = encodeURIComponent(shareData.text)
    const title = encodeURIComponent(shareData.title)

    switch (platform) {
      case "facebook":
        // Facebook分享使用quote參數來傳遞描述文字
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank")
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=龍樹諒,預言,台灣,倒數計時器`, "_blank")
        break
      case "line":
        window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, "_blank")
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${text} ${url}`, "_blank")
        break
      default:
        if (navigator.share) {
          try {
            await navigator.share(shareData)
          } catch (err) {
            console.log("分享取消或失敗")
          }
        } else {
          // 複製到剪貼板作為備用方案
          navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)
          alert(t.linkCopied)
        }
    }
  }

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    // 可以選擇性地保存到 localStorage
    localStorage.setItem("countdown-language", newLang)
  }

  // 在組件掛載前不渲染，避免 hydration 錯誤
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 恐怖背景效果 */}
      <HorrorEffects />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-600 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      <Card className="w-full max-w-4xl bg-black/40 backdrop-blur-lg border-red-900/50 shadow-2xl shadow-red-900/20 relative">
        {/* 恐怖邊框效果 */}
        <div className="absolute inset-0 rounded-lg border border-red-600/30 animate-pulse pointer-events-none"></div>
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8 text-red-100" />
              <CardTitle className="text-3xl md:text-4xl font-bold text-red-100 drop-shadow-lg">{t.title}</CardTitle>
            </div>

            {/* 語言切換按鈕 */}
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-red-200/80" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="bg-red-950/30 backdrop-blur-sm border border-red-800/50 rounded-lg px-3 py-1 text-red-100 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50"
              >
                <option value="zh-TW" className="bg-gray-800">
                  繁體中文
                </option>
                <option value="zh-CN" className="bg-gray-800">
                  简体中文
                </option>
                <option value="en" className="bg-gray-800">
                  English
                </option>
                <option value="ja" className="bg-gray-800">
                  日本語
                </option>
                <option value="ko" className="bg-gray-800">
                  한국어
                </option>
                <option value="es" className="bg-gray-800">
                  Español
                </option>
                <option value="fr" className="bg-gray-800">
                  Français
                </option>
                <option value="de" className="bg-gray-800">
                  Deutsch
                </option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-red-200/80">
            <Clock className="h-5 w-5" />
            <p className="text-lg">{t.targetTime}</p>
          </div>
        </CardHeader>

        <CardContent className="pb-8">
          {isExpired ? (
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-red-500 mb-4 animate-pulse drop-shadow-lg">💀</div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-100 mb-2 animate-pulse">{t.timeUp}</h2>
              <p className="text-xl text-red-200/80">{t.countdownEnded}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="bg-red-950/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold text-red-100 mb-2 drop-shadow-lg animate-pulse">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-sm md:text-lg text-red-200/90 font-medium">{t.days}</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-950/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold text-red-100 mb-2 drop-shadow-lg animate-pulse">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-sm md:text-lg text-red-200/90 font-medium">{t.hours}</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-950/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold text-red-100 mb-2 drop-shadow-lg animate-pulse">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-sm md:text-lg text-red-200/90 font-medium">{t.minutes}</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-950/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold text-red-100 mb-2 drop-shadow-lg animate-pulse">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-sm md:text-lg text-red-200/90 font-medium">{t.seconds}</div>
                </div>
              </div>
            </div>
          )}

          {!isExpired && (
            <>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-red-950/20 backdrop-blur-sm rounded-full px-6 py-3 border border-red-800/40">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                  <span className="text-red-100/90 font-medium">{t.updating}</span>
                </div>
              </div>

              {/* 書籍連結區塊 */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50 shadow-lg shadow-amber-900/30">
                  <h3 className="text-xl font-semibold text-amber-100 mb-4 flex items-center justify-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {t.bookTitle}
                  </h3>
                  <p className="text-amber-200/80 mb-6 text-sm md:text-base leading-relaxed">
                    {t.bookDescription}
                  </p>
                  <Button
                    onClick={() => window.open("https://www.facebook.com/photo/?fbid=24060920760210497&set=a.383492935046612", "_blank")}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <BookOpen className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t.readBook}
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-red-100 mb-4 flex items-center justify-center gap-2">
                  <Share2 className="h-5 w-5" />
                  {t.shareCountdown}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => handleShare()}
                    className="flex items-center gap-2 bg-red-950/30 hover:bg-red-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-red-800/50 text-red-100 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-700/30"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.share}</span>
                  </button>

                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 text-red-100 transition-all duration-200 hover:scale-105"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </button>

                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center gap-2 bg-sky-500/80 hover:bg-sky-500 backdrop-blur-sm rounded-full px-4 py-2 border border-sky-400/30 text-red-100 transition-all duration-200 hover:scale-105"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </button>

                  <button
                    onClick={() => handleShare("line")}
                    className="flex items-center gap-2 bg-green-500/80 hover:bg-green-500 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30 text-red-100 transition-all duration-200 hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="hidden sm:inline">LINE</span>
                  </button>

                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-2 bg-green-600/80 hover:bg-green-600 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30 text-red-100 transition-all duration-200 hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                </div>
                
                {/* 除錯工具鏈接 */}
                <div className="mt-4">
                  <a 
                    href="/debug" 
                    className="text-xs text-red-300/60 hover:text-red-300 transition-colors underline"
                  >
                    🔧 社群分享除錯工具
                  </a>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
