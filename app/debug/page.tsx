"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, RefreshCw } from "lucide-react"

export default function DebugPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  const [ogData, setOgData] = useState<any>({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.origin)
      
      // 收集當前頁面的OG資料
      const ogTags: any = {}
      const metaTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')
      metaTags.forEach(tag => {
        const property = tag.getAttribute('property') || tag.getAttribute('name')
        const content = tag.getAttribute('content')
        if (property && content) {
          ogTags[property] = content
        }
      })
      setOgData(ogTags)
    }
  }, [])

  const openFacebookDebugger = () => {
    const url = encodeURIComponent(currentUrl)
    window.open(`https://developers.facebook.com/tools/debug/?q=${url}`, '_blank')
  }

  const openTwitterCardValidator = () => {
    const url = encodeURIComponent(currentUrl)
    window.open(`https://cards-dev.twitter.com/validator?url=${url}`, '_blank')
  }

  const openLinkedInPostInspector = () => {
    const url = encodeURIComponent(currentUrl)
    window.open(`https://www.linkedin.com/post-inspector/inspect/${url}`, '_blank')
  }

  const testOgImage = () => {
    window.open(`${currentUrl}/api/og`, '_blank')
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              社群分享除錯工具
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                當前網址：<code className="bg-muted px-2 py-1 rounded">{currentUrl}</code>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button onClick={openFacebookDebugger} variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Facebook 分享除錯器
              </Button>

              <Button onClick={openTwitterCardValidator} variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Twitter Card 驗證器
              </Button>

              <Button onClick={openLinkedInPostInspector} variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                LinkedIn 貼文檢查器
              </Button>

              <Button onClick={testOgImage} variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                測試 OG 圖片
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>檢測到的 Open Graph 標籤</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(ogData).map(([property, content]) => (
                <div key={property} className="grid grid-cols-3 gap-2 text-sm">
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                    {property}
                  </code>
                  <div className="col-span-2 break-words">
                    {property.includes('image') ? (
                      <img 
                        src={content as string} 
                        alt="OG Image" 
                        className="max-w-xs max-h-32 object-contain border rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling!.textContent = `圖片載入失敗: ${content}`
                        }}
                      />
                    ) : (
                      <span className="text-muted-foreground">{content as string}</span>
                    )}
                    <div className="hidden text-red-500 text-xs"></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Facebook 分享預覽</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col space-y-2">
                <img 
                  src={`${currentUrl}/api/og`} 
                  alt="Facebook Share Preview" 
                  className="w-full max-w-md rounded border"
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">
                    {ogData['og:title'] || '標題未設定'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {ogData['og:description'] || '描述未設定'}
                  </p>
                  <p className="text-xs text-blue-600">
                    {ogData['og:url'] || currentUrl}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>解決方案與建議</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">如果 Facebook 縮圖不顯示：</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>使用 Facebook 分享除錯器重新抓取頁面</li>
                <li>確認 OG 圖片 URL 是完整的絕對路徑</li>
                <li>檢查圖片尺寸是否符合 Facebook 要求（建議 1200x630）</li>
                <li>確認網站可以從外部訪問（不是 localhost）</li>
                <li>等待 Facebook 快取更新（可能需要幾分鐘）</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">部署後的檢查步驟：</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>將網站部署到生產環境（GitHub Pages 等）</li>
                <li>在 Facebook 分享除錯器中輸入生產環境網址</li>
                <li>點擊「重新抓取」來更新 Facebook 快取</li>
                <li>測試在 Facebook 貼文中分享連結</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
