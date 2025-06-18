# 🤖 GitHub Action 自動生成 OG 圖片

這個GitHub Action會自動生成Facebook分享縮圖，確保社群分享時顯示正確的預覽圖片。

## 🚀 如何運作

### 觸發條件
Action會在以下情況自動執行：
- 推送到 `main` 分支
- 建立Pull Request到 `main` 分支  
- 手動觸發（在GitHub Actions頁面）

### 執行步驟
1. **檢出代碼** - 下載最新的倉庫代碼
2. **設定Python環境** - 安裝Python 3.11
3. **安裝依賴** - 安裝Pillow圖片處理庫
4. **生成OG圖片** - 執行Python腳本生成1200x630的PNG圖片
5. **檢查結果** - 驗證圖片是否成功生成
6. **提交變更** - 自動提交生成的圖片到倉庫

## 📁 生成的檔案

- **檔案路徑**: `public/countdown-og-image.png`
- **尺寸**: 1200x630 像素（符合Facebook建議）
- **格式**: PNG（高質量，支援所有社群平台）
- **內容**: 龍樹諒預言倒數計時器主題設計

## 🛠️ 手動執行

### 在GitHub上手動觸發
1. 前往倉庫的 **Actions** 頁面
2. 選擇 **Generate OG Image** 工作流程
3. 點擊 **Run workflow** 按鈕
4. 選擇分支並點擊綠色的 **Run workflow** 按鈕

### 本地執行
```bash
# 安裝依賴（如果尚未安裝）
pip3 install pillow

# 生成圖片
python3 generate-og-image.py

# 檢查生成的圖片
ls -la public/countdown-og-image.png
```

## 🎨 圖片設計

生成的OG圖片包含以下元素：
- **漸層背景**: 深藍到藍色到紅色的漸層
- **主標題**: "龍樹諒預言" (金黃色，大字體)
- **副標題**: "倒數計時器" (白色)
- **日期時間**: "2025年7月5日 上午4:18分" (淺黃色)
- **地理範圍**: "台灣•菲律賓•香港•板塊連結預言" (淺灰色)
- **警告訊息**: "預言倒數進行中" (底部)
- **裝飾效果**: 彩色圓圈和邊框

## 🔧 自訂設定

### 修改圖片內容
編輯 `generate-og-image.py` 中的文字內容：
```python
texts = [
    ("龍樹諒預言", title_font, title_color, 180),
    ("倒數計時器", subtitle_font, subtitle_color, 250),
    # ... 更多文字
]
```

### 修改顏色
調整顏色定義：
```python
title_color = '#fbbf24'  # 金黃色
subtitle_color = '#ffffff'  # 白色
# ... 其他顏色
```

### 修改觸發條件
編輯 `.github/workflows/generate-og-image.yml` 的 `on` 部分：
```yaml
on:
  push:
    branches: [ main, develop ]  # 添加其他分支
  schedule:
    - cron: '0 0 * * 0'  # 每週日自動執行
```

## 📊 監控和除錯

### 查看執行狀態
1. 前往GitHub倉庫的 **Actions** 頁面
2. 查看最新的工作流程執行狀態
3. 點擊具體的執行來查看詳細日誌

### 常見問題

**Q: Action執行失敗，顯示權限錯誤？**
A: 確保倉庫設定中的 Actions 有寫入權限：
- 前往 Settings > Actions > General
- 在 "Workflow permissions" 中選擇 "Read and write permissions"

**Q: 圖片生成了但沒有自動提交？**
A: 檢查是否有實際的圖片變更，Action只會在圖片有變化時才提交。

**Q: 字體顯示不正確？**
A: GitHub Actions使用Ubuntu系統，支援的中文字體有限。腳本會自動選擇最佳可用字體。

## 🌟 優勢

✅ **自動化**: 推送代碼時自動更新OG圖片  
✅ **一致性**: 確保所有部署都有最新的分享圖片  
✅ **跨平台**: 在GitHub雲端環境中生成，避免本地環境差異  
✅ **版本控制**: 圖片變更有完整的Git歷史記錄  
✅ **零配置**: 推送後自動執行，無需手動介入  

## 🔄 整合到部署流程

這個Action與GitHub Pages部署完美整合：
1. 推送代碼到main分支
2. 自動生成OG圖片並提交
3. GitHub Pages自動部署包含新圖片的網站
4. Facebook分享立即顯示更新後的縮圖

現在你的Facebook分享縮圖會始終保持最新！🎉
