# Facebook 分享縮圖問題解決指南

## 問題診斷

Facebook 分享縮圖不顯示的常見原因：

### 1. 🌐 本地開發環境限制
- **問題**：在 `localhost` 環境中，Facebook 無法抓取到 OG 圖片
- **解決方案**：需要部署到公開可訪問的網址

### 2. 📸 OG 圖片路徑問題
- **問題**：使用相對路徑而非絕對路徑
- **解決方案**：已修復為使用完整 URL：`https://wolke.github.io/countdown-timer/api/og`

### 3. ⚡ Facebook 快取問題
- **問題**：Facebook 會快取頁面的 OG 資料
- **解決方案**：使用 Facebook 分享除錯器強制重新抓取

## 已完成的修復

### ✅ 1. 動態 OG 圖片生成
```typescript
// /app/api/og/route.tsx
export async function GET() {
  return new ImageResponse(
    // 精美的龍樹諒預言主題設計
    <div style={{...}}></div>,
    { width: 1200, height: 630 }
  )
}
```

### ✅ 2. 完整的 OG 標籤設定
```typescript
// /app/layout.tsx
openGraph: {
  title: "龍樹諒預言倒數計時器 | 2025年7月5日台灣菲律賓板塊連結",
  description: "根據龍樹諒1999年與2021年兩次夢境預言...",
  url: "https://wolke.github.io/countdown-timer/",
  images: [{
    url: "https://wolke.github.io/countdown-timer/api/og",
    width: 1200,
    height: 630,
  }],
  locale: "zh_TW",
  type: "website",
}
```

### ✅ 3. Facebook 分享優化
```typescript
// 修復 Facebook 分享 URL
case "facebook":
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank")
```

### ✅ 4. 額外的 Meta 標籤
```html
<meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## 部署後檢查步驟

### 1. 🚀 部署到生產環境
```bash
# 如果使用 GitHub Pages
git add .
git commit -m "修復 Facebook 分享縮圖"
git push origin main
```

### 2. 🔍 驗證 OG 圖片
訪問：`https://wolke.github.io/countdown-timer/api/og`
確認圖片正常顯示

### 3. 🛠️ 使用 Facebook 分享除錯器
1. 前往：https://developers.facebook.com/tools/debug/
2. 輸入：`https://wolke.github.io/countdown-timer/`
3. 點擊「除錯」按鈕
4. 點擊「重新抓取」按鈕
5. 確認看到正確的圖片和資訊

### 4. 📱 測試實際分享
1. 在 Facebook 貼文中貼上網站連結
2. 等待 Facebook 自動產生預覽
3. 確認縮圖、標題和描述都正確顯示

## 除錯工具

### 🔧 內建除錯頁面
訪問：`https://wolke.github.io/countdown-timer/debug`
- 查看所有 OG 標籤
- 預覽 Facebook 分享外觀
- 快速訪問各種驗證工具

### 🌐 外部驗證工具
- **Facebook**：https://developers.facebook.com/tools/debug/
- **Twitter**：https://cards-dev.twitter.com/validator
- **LinkedIn**：https://www.linkedin.com/post-inspector/

## 常見問題 FAQ

### Q: 為什麼我在本地看到縮圖，但 Facebook 看不到？
A: Facebook 無法抓取 `localhost` 的內容，需要部署到公開網址。

### Q: 我已經部署了，但 Facebook 還是顯示舊的縮圖？
A: 使用 Facebook 分享除錯器的「重新抓取」功能清除快取。

### Q: 圖片尺寸有什麼要求？
A: Facebook 建議 1200x630 像素，我們的 OG 圖片已符合此規格。

### Q: 如何確認 OG 圖片正常運作？
A: 直接訪問 `/api/og` 路徑，應該會看到動態生成的預言主題圖片。

## 預期效果

完成修復後，Facebook 分享將顯示：
- 🖼️ 精美的龍樹諒預言主題縮圖
- 📝 完整的標題和描述
- 🌏 正確的網站資訊
- ⏰ 動態的倒數計時資訊

這將大大提升社群分享的視覺效果和點擊率！
