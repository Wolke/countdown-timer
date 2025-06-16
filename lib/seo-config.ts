// SEO 配置文件 - 統一管理所有 SEO 相關設定
export const seoConfig = {
  // 基本 SEO 設定
  defaultTitle: "龍樹諒預言倒數計時器 | 2025年7月5日 | 台灣菲律賓板塊連結預言",
  defaultDescription: "根據龍樹諒漫畫預言，倒數計時至2025年7月5日上午4:18分。預言描述日本與菲律賓間海域災難，範圍涵蓋台灣、香港、印尼摩羅泰島至北馬利安納群島的板塊連結事件。支援8種語言的精美倒數計時器。",
  siteUrl: "https://wolke.github.io/countdown-timer/",
  
  // 關鍵字配置
  keywords: {
    primary: ["龍樹諒", "龍樹涼", "預言", "2025年7月5日", "台灣", "菲律賓", "香港", "板塊連結"],
    secondary: ["地震預言", "災難預警", "倒數計時器", "日本菲律賓海域", "印尼摩羅泰島", "北馬利安納群島", "地質災害", "預測", "漫畫預言"],
    technical: ["countdown timer", "カウントダウンタイマー", "倒计时器", "temporizador", "minuteur", "countdown-timer"]
  },
  
  // Open Graph 設定
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "龍樹諒預言倒數計時器 | 2025年7月5日台灣菲律賓板塊連結",
    description: "根據龍樹諒1999年與2021年兩次夢境預言，倒數至2025年7月5日上午4:18分。預言範圍從日本延伸至台灣、南至印尼摩羅泰島、東達北馬利安納群島的重大板塊連結事件。",
    images: [
      {
        url: "/countdown-og-image.png",
        width: 1200,
        height: 630,
        alt: "龍樹諒預言2025年7月5日台灣菲律賓香港板塊連結倒數計時器",
      }
    ]
  },
  
  // Twitter Cards 設定
  twitter: {
    card: "summary_large_image",
    title: "龍樹諒預言倒數計時器 | 2025年7月5日板塊連結預言",
    description: "根據龍樹諒預言，倒數至2025年7月5日。預言範圍涵蓋台灣、菲律賓、香港等地區的重大板塊連結事件。",
    images: ["/countdown-og-image.png"]
  },
  
  // 結構化資料
  structuredData: {
    event: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "龍樹諒預言事件 - 台灣菲律賓板塊連結",
      "startDate": "2025-07-05T04:18:00+08:00",
      "description": "根據龍樹諒漫畫預言，預測將在2025年7月5日上午4:18分發生的板塊連結事件，範圍涵蓋日本、台灣、菲律賓、香港至印尼摩羅泰島和北馬利安納群島。",
      "location": {
        "@type": "Place",
        "name": "日本與菲律賓間海域",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "20.0",
          "longitude": "125.0"
        }
      },
      "organizer": {
        "@type": "Person",
        "name": "龍樹諒"
      },
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
    },
    
    webApplication: {
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
    },
    
    faq: {
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
        },
        {
          "@type": "Question",
          "name": "預言涉及哪些地區？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "根據龍樹諒的描述，災難範圍從北邊的日本往西延伸到台灣、南至印尼摩羅泰島、東邊則達北馬利安納群島，主要影響區域包括台灣、菲律賓、香港等亞太地區。"
          }
        }
      ]
    }
  },
  
  // 語言版本對應
  alternateLanguages: {
    'zh-TW': '/',
    'zh-CN': '/?lang=zh-CN',
    'en': '/?lang=en',
    'ja': '/?lang=ja',
    'ko': '/?lang=ko',
    'es': '/?lang=es',
    'fr': '/?lang=fr',
    'de': '/?lang=de'
  },
  
  // 地理標記
  geo: {
    region: "TW",
    placename: "Taiwan",
    position: "23.8;121.0",
    icbm: "23.8, 121.0"
  },
  
  // 社群媒體相關標籤
  articleTags: [
    "龍樹諒",
    "預言", 
    "台灣",
    "菲律賓",
    "香港",
    "板塊連結",
    "2025年7月5日",
    "地震預言",
    "災難預警",
    "倒數計時器"
  ]
}

// 生成所有關鍵字的函數
export function getAllKeywords(): string[] {
  const { primary, secondary, technical } = seoConfig.keywords
  return [...primary, ...secondary, ...technical]
}

// 生成結構化資料的函數
export function generateStructuredData(type: keyof typeof seoConfig.structuredData) {
  return JSON.stringify(seoConfig.structuredData[type])
}
