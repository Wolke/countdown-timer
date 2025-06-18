#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 Facebook 分享 OG 圖片
適用於 GitHub Actions 自動部署
需要安裝: pip install pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os
import sys

def create_og_image():
    # 圖片尺寸 (Facebook 建議)
    width = 1200
    height = 630
    
    # 創建圖片
    img = Image.new('RGB', (width, height), color='#1e1b4b')
    draw = ImageDraw.Draw(img)
    
    # 嘗試使用不同的字體
    def get_font(size):
        font_paths = [
            # Ubuntu/GitHub Actions 字體
            '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
            '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
            # macOS 字體
            '/System/Library/Fonts/PingFang.ttc',
            '/System/Library/Fonts/Arial Unicode.ttf',
            # Windows 字體
            'C:/Windows/Fonts/arial.ttf',
            'C:/Windows/Fonts/simhei.ttf',
        ]
        
        for font_path in font_paths:
            try:
                return ImageFont.truetype(font_path, size)
            except (OSError, IOError):
                continue
        
        # 如果都失敗，使用默認字體
        try:
            return ImageFont.load_default()
        except:
            return None
    
    # 字體設定
    title_font = get_font(80)
    subtitle_font = get_font(50)
    date_font = get_font(40)
    desc_font = get_font(30)
    
    # 顏色定義
    title_color = '#fbbf24'  # 金黃色
    subtitle_color = '#ffffff'  # 白色
    date_color = '#fef3c7'  # 淺黃色
    desc_color = '#e5e7eb'  # 淺灰色
    border_color = '#dc2626'  # 紅色
    
    # 繪製背景漸層效果（用多個矩形模擬）
    for i in range(height):
        ratio = i / height
        # 從深藍到藍色到紅色的漸層
        if ratio < 0.3:
            # 深藍到中藍
            r = int(15 + (30 - 15) * (ratio / 0.3))
            g = int(15 + (27 - 15) * (ratio / 0.3))
            b = int(35 + (75 - 35) * (ratio / 0.3))
        elif ratio < 0.7:
            # 中藍到淺藍
            r = int(30 + (30 - 30) * ((ratio - 0.3) / 0.4))
            g = int(27 + (58 - 27) * ((ratio - 0.3) / 0.4))
            b = int(75 + (138 - 75) * ((ratio - 0.3) / 0.4))
        else:
            # 淺藍到紅色
            r = int(30 + (220 - 30) * ((ratio - 0.7) / 0.3))
            g = int(58 + (38 - 58) * ((ratio - 0.7) / 0.3))
            b = int(138 + (38 - 138) * ((ratio - 0.7) / 0.3))
        
        color = f'#{r:02x}{g:02x}{b:02x}'
        draw.rectangle([0, i, width, i+1], fill=color)
    
    # 添加裝飾圓圈
    draw.ellipse([50, 50, 200, 200], fill='rgba(220, 38, 38, 0.3)')  # 左上紅圈
    draw.ellipse([1000, 380, 1150, 530], fill='rgba(59, 130, 246, 0.3)')  # 右下藍圈
    
    # 文字內容
    texts = [
        ("龍樹諒預言", title_font, title_color, 180),
        ("倒數計時器", subtitle_font, subtitle_color, 250),
        ("2025年7月5日", date_font, date_color, 330),
        ("上午 4:18 分", date_font, desc_color, 380),
        ("🌏 台灣•菲律賓•香港•板塊連結預言", desc_font, desc_color, 450),
        ("⚠️ 預言倒數進行中 ⚠️", desc_font, desc_color, 550),
    ]
    
    # 繪製文字
    for text, font, color, y_pos in texts:
        if font:
            try:
                bbox = draw.textbbox((0, 0), text, font=font)
                text_width = bbox[2] - bbox[0]
                x_pos = (width - text_width) // 2
                draw.text((x_pos, y_pos), text, font=font, fill=color)
            except:
                # 如果字體有問題，使用默認繪製
                x_pos = width // 2 - len(text) * 10
                draw.text((x_pos, y_pos), text, fill=color)
        else:
            # 沒有字體時的備用方案
            x_pos = width // 2 - len(text) * 10
            draw.text((x_pos, y_pos), text, fill=color)
    
    # 添加邊框
    draw.rectangle([10, 10, width-10, height-10], outline=border_color, width=5)
    
    return img

def main():
    try:
        # 確保 public 目錄存在
        public_dir = 'public'
        if not os.path.exists(public_dir):
            os.makedirs(public_dir)
            print(f"📁 創建目錄: {public_dir}")
        
        # 生成圖片
        print("🎨 正在生成 Facebook OG 圖片...")
        img = create_og_image()
        
        # 儲存圖片
        output_path = os.path.join(public_dir, 'countdown-og-image.png')
        img.save(output_path, 'PNG', quality=95, optimize=True)
        
        print(f"✅ OG 圖片已生成: {output_path}")
        print(f"📐 尺寸: 1200x630 (符合 Facebook 要求)")
        print(f"🎨 主題: 龍樹諒預言倒數計時器")
        
        # 檢查文件大小
        file_size = os.path.getsize(output_path)
        print(f"📄 文件大小: {file_size / 1024:.1f} KB")
        
        if file_size > 8 * 1024 * 1024:  # 8MB
            print("⚠️  警告: 文件大小超過 8MB，可能影響加載速度")
        
        return 0
        
    except Exception as e:
        print(f"❌ 生成圖片時發生錯誤: {e}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)
