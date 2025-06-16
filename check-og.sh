#!/bin/bash

# Facebook 分享縮圖檢查腳本
# 使用方法: ./check-og.sh [網站URL]

URL=${1:-"https://wolke.github.io/countdown-timer/"}

echo "🔍 檢查 Facebook 分享縮圖設定..."
echo "網址: $URL"
echo ""

# 檢查 OG 圖片是否可訪問
echo "📸 檢查 OG 圖片..."
OG_IMAGE_URL="${URL}api/og"
echo "OG 圖片網址: $OG_IMAGE_URL"

# 使用 curl 檢查圖片是否可訪問
if curl -f -s -I "$OG_IMAGE_URL" > /dev/null; then
    echo "✅ OG 圖片可正常訪問"
else
    echo "❌ OG 圖片無法訪問，請檢查部署狀態"
fi

echo ""

# 提供 Facebook 除錯器連結
ENCODED_URL=$(echo "$URL" | python3 -c "import urllib.parse; print(urllib.parse.quote(input(), safe=''))")
FACEBOOK_DEBUG_URL="https://developers.facebook.com/tools/debug/?q=$ENCODED_URL"

echo "🛠️  請使用以下工具檢查 Facebook 分享:"
echo "Facebook 分享除錯器: $FACEBOOK_DEBUG_URL"
echo ""

# 提供其他驗證工具連結
echo "📱 其他社群平台驗證工具:"
echo "Twitter Card 驗證器: https://cards-dev.twitter.com/validator?url=$ENCODED_URL"
echo "LinkedIn 貼文檢查器: https://www.linkedin.com/post-inspector/inspect/$ENCODED_URL"
echo ""

echo "📋 檢查步驟:"
echo "1. 點擊上方的 Facebook 分享除錯器連結"
echo "2. 在 Facebook 工具中點擊「重新抓取」按鈕"
echo "3. 確認看到正確的圖片、標題和描述"
echo "4. 在 Facebook 實際分享測試連結"
echo ""

echo "💡 如果縮圖仍不顯示:"
echo "• 確認網站已正確部署到公開網址"
echo "• 等待幾分鐘讓 Facebook 快取更新"
echo "• 檢查瀏覽器開發者工具中是否有錯誤"
echo "• 訪問 ${URL}debug 查看詳細的 OG 標籤資訊"
