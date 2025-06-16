"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Facebook, Twitter, MessageCircle, Copy, Check } from "lucide-react"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
}

export function SocialShare({ 
  url = "https://wolke.github.io/countdown-timer/",
  title = "龍樹諒預言倒數計時器 | 2025年7月5日",
  description = "根據龍樹諒預言，倒數至2025年7月5日上午4:18分。預言範圍涵蓋台灣、菲律賓、香港等地區的重大板塊連結事件。"
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`
    window.open(facebookUrl, '_blank', 'width=600,height=400')
  }

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' - ' + description)}&hashtags=龍樹諒,預言,台灣,倒數計時器`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  const shareToLine = () => {
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(title + ' - ' + description + ' ' + url)}`
    window.open(lineUrl, '_blank')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${title}\n${description}\n${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('複製失敗:', err)
    }
  }

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        })
      } catch (err) {
        console.error('分享失敗:', err)
      }
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="h-5 w-5" />
          <h3 className="text-lg font-semibold">分享預言倒數計時器</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          與朋友分享龍樹諒預言倒數計時器，一起關注2025年7月5日的預言事件
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={shareToFacebook}
            className="flex items-center gap-2"
          >
            <Facebook className="h-4 w-4 text-blue-600" />
            Facebook
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={shareToTwitter}
            className="flex items-center gap-2"
          >
            <Twitter className="h-4 w-4 text-blue-400" />
            Twitter
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={shareToLine}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4 text-green-500" />
            LINE
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "已複製" : "複製連結"}
          </Button>
        </div>

        {navigator.share && (
          <Button
            variant="default"
            size="sm"
            onClick={nativeShare}
            className="w-full mt-3"
          >
            <Share2 className="h-4 w-4 mr-2" />
            更多分享選項
          </Button>
        )}

        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-xs text-muted-foreground">
            💡 提示：分享時會自動顯示預言倒數計時器的專屬縮圖和描述
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
