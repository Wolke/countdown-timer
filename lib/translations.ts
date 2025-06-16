export type Language = "zh-TW" | "zh-CN" | "en" | "ja" | "ko" | "es" | "fr" | "de"

export interface Translations {
  title: string
  targetTime: string
  timeUp: string
  countdownEnded: string
  days: string
  hours: string
  minutes: string
  seconds: string
  updating: string
  share: string
  shareCountdown: string
  shareText: string
  linkCopied: string
  morning: string
  afternoon: string
  evening: string
  night: string
  description: string
  keywords: string[]
  ogDescription: string
  // 新增書籍相關翻譯
  bookTitle: string
  bookSubtitle: string
  readBook: string
  bookDescription: string
}

export const translations: Record<Language, Translations> = {
  "zh-TW": {
    title: "龍樹諒預言倒數計時器",
    targetTime: "預言時間：2025年7月5日 上午4:18",
    timeUp: "預言時間到了！",
    countdownEnded: "龍樹諒預言時間已到",
    days: "天",
    hours: "小時",
    minutes: "分鐘",
    seconds: "秒",
    updating: "實時倒數中",
    share: "分享預言",
    shareCountdown: "分享龍樹諒預言倒數計時",
    shareText: "龍樹諒預言台灣菲律賓板塊連結還有 {days} 天 {hours} 小時 {minutes} 分鐘 {seconds} 秒！",
    linkCopied: "預言倒數連結已複製！",
    morning: "上午",
    afternoon: "下午",
    evening: "傍晚",
    night: "深夜",
    description: "根據龍樹諒1999年與2021年預言夢境，倒數至2025年7月5日上午4:18分的台灣菲律賓香港板塊連結事件。預言範圍從日本延伸至台灣、南至印尼摩羅泰島、東達北馬利安納群島。",
    keywords: ["龍樹諒", "預言", "台灣", "菲律賓", "香港", "板塊連結", "2025年7月5日", "地震預言", "災難預警", "倒數計時器"],
    ogDescription: "龍樹諒預言2025年7月5日台灣菲律賓香港板塊連結事件倒數計時器。根據1999年和2021年兩次預言夢境，預測重大地質事件。",
    bookTitle: "我們防護與超越的未來",
    bookSubtitle: "龍樹諒預言全書",
    readBook: "閱讀電子書",
    bookDescription: "深入了解龍樹諒的完整預言內容，包含防護措施與應對策略。",
  },
  "zh-CN": {
    title: "龙树谅预言倒计时器",
    targetTime: "预言时间：2025年7月5日 上午4:18",
    timeUp: "预言时间到了！",
    countdownEnded: "龙树谅预言时间已到",
    days: "天",
    hours: "小时",
    minutes: "分钟",
    seconds: "秒",
    updating: "实时倒数中",
    share: "分享预言",
    shareCountdown: "分享龙树谅预言倒计时",
    shareText: "龙树谅预言台湾菲律宾板块连结还有 {days} 天 {hours} 小时 {minutes} 分钟 {seconds} 秒！",
    linkCopied: "预言倒数链接已复制！",
    morning: "上午",
    afternoon: "下午",
    evening: "傍晚",
    night: "深夜",
    description: "根据龙树谅1999年与2021年预言梦境，倒数至2025年7月5日上午4:18分的台湾菲律宾香港板块连结事件。预言范围从日本延伸至台湾、南至印尼摩罗泰岛、东达北马利亚纳群岛。",
    keywords: ["龙树谅", "预言", "台湾", "菲律宾", "香港", "板块连结", "2025年7月5日", "地震预言", "灾难预警", "倒计时器"],
    ogDescription: "龙树谅预言2025年7月5日台湾菲律宾香港板块连结事件倒计时器。根据1999年和2021年两次预言梦境，预测重大地质事件。",
    bookTitle: "我们防护与超越的未来",
    bookSubtitle: "龙树谅预言全书",
    readBook: "阅读电子书",
    bookDescription: "深入了解龙树谅的完整预言内容，包含防护措施与应对策略。",
  },
  en: {
    title: "Tatsuki Ryo Prophecy Countdown Timer",
    targetTime: "Prophecy Time: July 5, 2025 at 4:18 AM",
    timeUp: "Prophecy Time Has Arrived!",
    countdownEnded: "Tatsuki Ryo Prophecy Time Has Come",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    updating: "Live countdown",
    share: "Share Prophecy",
    shareCountdown: "Share Tatsuki Ryo Prophecy Countdown",
    shareText: "Tatsuki Ryo's Taiwan-Philippines tectonic connection prophecy: {days} days {hours} hours {minutes} minutes {seconds} seconds left!",
    linkCopied: "Prophecy countdown link copied!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description: "Countdown to July 5, 2025 at 4:18 AM based on Tatsuki Ryo's prophetic dreams from 1999 and 2021. The prophecy describes a tectonic connection event spanning from Japan to Taiwan, Philippines, Hong Kong, south to Indonesia's Morotai Island, and east to the Northern Mariana Islands.",
    keywords: ["Tatsuki Ryo", "prophecy", "Taiwan", "Philippines", "Hong Kong", "tectonic connection", "July 5 2025", "earthquake prediction", "disaster warning", "countdown timer"],
    ogDescription: "Tatsuki Ryo prophecy countdown timer for Taiwan-Philippines-Hong Kong tectonic connection event on July 5, 2025. Based on prophetic dreams from 1999 and 2021, predicting a major geological event.",
    bookTitle: "Our Defense and Transcendent Future",
    bookSubtitle: "Tatsuki Ryo's Complete Prophecy",
    readBook: "Read E-book",
    bookDescription: "In-depth exploration of Tatsuki Ryo's complete prophecies, including protective measures and response strategies.",
  },
  ja: {
    title: "たつき諒予言カウントダウンタイマー",
    targetTime: "予言時刻：2025年7月5日 午前4:18",
    timeUp: "予言の時が来ました！",
    countdownEnded: "たつき諒予言時刻到来",
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒",
    updating: "リアルタイムカウントダウン中",
    share: "予言をシェア",
    shareCountdown: "たつき諒予言カウントダウンをシェア",
    shareText: "たつき諒の台湾・フィリピン・プレート連結予言まで あと {days} 日 {hours} 時間 {minutes} 分 {seconds} 秒！",
    linkCopied: "予言カウントダウンリンクをコピーしました！",
    morning: "午前",
    afternoon: "午後",
    evening: "夕方",
    night: "深夜",
    description: "たつき諒の1999年と2021年の予言的夢に基づく、2025年7月5日午前4:18のプレート連結イベントまでのカウントダウン。予言は日本から台湾、フィリピン、香港、南はインドネシアのモロタイ島、東は北マリアナ諸島まで及ぶ。",
    keywords: ["たつき諒", "予言", "台湾", "フィリピン", "香港", "プレート連結", "2025年7月5日", "地震予言", "災害警告", "カウントダウンタイマー"],
    ogDescription: "たつき諒の2025年7月5日台湾・フィリピン・香港プレート連結イベント予言カウントダウンタイマー。1999年と2021年の予言的夢に基づく重大地質イベントの予測。",
    bookTitle: "私たちの防護と超越の未来",
    bookSubtitle: "たつき諒予言全書",
    readBook: "電子書籍を読む",
    bookDescription: "たつき諒の完全な予言内容を深く探求し、防護措置と対応戦略を含む。",
  },
  ko: {
    title: "타츠키 료 예언 카운트다운 타이머",
    targetTime: "예언 시간: 2025년 7월 5일 오전 4:18",
    timeUp: "예언 시간이 왔습니다!",
    countdownEnded: "타츠키 료 예언 시간 도래",
    days: "일",
    hours: "시간",
    minutes: "분",
    seconds: "초",
    updating: "실시간 카운트다운 중",
    share: "예언 공유",
    shareCountdown: "타츠키 료 예언 카운트다운 공유",
    shareText: "타츠키 료의 대만-필리핀 판 연결 예언까지 {days}일 {hours}시간 {minutes}분 {seconds}초 남았습니다!",
    linkCopied: "예언 카운트다운 링크가 복사되었습니다!",
    morning: "오전",
    afternoon: "오후",
    evening: "저녁",
    night: "새벽",
    description: "타츠키 료의 1999년과 2021년 예언적 꿈을 바탕으로 한 2025년 7월 5일 오전 4:18 판 연결 사건까지의 카운트다운. 예언은 일본에서 대만, 필리핀, 홍콩, 남쪽으로는 인도네시아 모로타이 섬, 동쪽으로는 북마리아나 제도까지 걸쳐 있습니다.",
    keywords: ["타츠키 료", "예언", "대만", "필리핀", "홍콩", "판 연결", "2025년 7월 5일", "지진 예언", "재해 경고", "카운트다운 타이머"],
    ogDescription: "타츠키 료의 2025년 7월 5일 대만-필리핀-홍콩 판 연결 사건 예언 카운트다운 타이머. 1999년과 2021년의 예언적 꿈을 바탕으로 한 주요 지질학적 사건 예측.",
    bookTitle: "타츠키 료 예언서",
    bookSubtitle: "타츠키 료의 예언 심층 탐구",
    readBook: "예언서 읽기",
    bookDescription: "이 책은 타츠키 료의 예언, 1999년과 2021년의 예언적 꿈, 2025년 7월 5일 오전 4:18 대만-필리핀-홍콩 판 연결 사건에 대한 예측을 심층적으로 탐구합니다.",
  },
  es: {
    title: "Temporizador de Profecía de Tatsuki Ryo",
    targetTime: "Tiempo de Profecía: 5 de julio de 2025 a las 4:18 AM",
    timeUp: "¡Ha llegado el tiempo de la profecía!",
    countdownEnded: "Ha llegado el tiempo de la profecía de Tatsuki Ryo",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    updating: "Cuenta regresiva en vivo",
    share: "Compartir Profecía",
    shareCountdown: "Compartir Cuenta Regresiva de la Profecía de Tatsuki Ryo",
    shareText: "Profecía de conexión tectónica Taiwán-Filipinas de Tatsuki Ryo: ¡Quedan {days} días {hours} horas {minutes} minutos {seconds} segundos!",
    linkCopied: "¡Enlace de cuenta regresiva de profecía copiado!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description: "Cuenta regresiva hasta el 5 de julio de 2025 a las 4:18 AM basada en los sueños proféticos de Tatsuki Ryo de 1999 y 2021. La profecía describe un evento de conexión tectónica que se extiende desde Japón hasta Taiwán, Filipinas, Hong Kong, al sur hasta la isla Morotai de Indonesia y al este hasta las Islas Marianas del Norte.",
    keywords: ["Tatsuki Ryo", "profecía", "Taiwán", "Filipinas", "Hong Kong", "conexión tectónica", "5 julio 2025", "predicción terremoto", "alerta desastre", "temporizador cuenta regresiva"],
    ogDescription: "Temporizador de cuenta regresiva de la profecía de Tatsuki Ryo para el evento de conexión tectónica Taiwán-Filipinas-Hong Kong el 5 de julio de 2025. Basado en sueños proféticos de 1999 y 2021, prediciendo un evento geológico mayor.",
    bookTitle: "Libro de Profecía de Tatsuki Ryo",
    bookSubtitle: "Exploración en Profundidad de las Profecías de Tatsuki Ryo",
    readBook: "Leer el Libro de Profecía",
    bookDescription: "Este libro profundiza en las profecías de Tatsuki Ryo, incluidos los sueños proféticos de 1999 y 2021, y las predicciones para el evento de conexión tectónica Taiwán-Filipinas-Hong Kong el 5 de julio de 2025 a las 4:18 AM.",
  },
  fr: {
    title: "Minuteur de Prophétie de Tatsuki Ryo",
    targetTime: "Temps de Prophétie : 5 juillet 2025 à 4h18",
    timeUp: "Le temps de la prophétie est arrivé !",
    countdownEnded: "Le temps de la prophétie de Tatsuki Ryo est arrivé",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    updating: "Compte à rebours en direct",
    share: "Partager la Prophétie",
    shareCountdown: "Partager le Compte à Rebours de la Prophétie de Tatsuki Ryo",
    shareText: "Prophétie de connexion tectonique Taïwan-Philippines de Tatsuki Ryo : Il reste {days} jours {hours} heures {minutes} minutes {seconds} secondes !",
    linkCopied: "Lien du compte à rebours de prophétie copié !",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description: "Compte à rebours jusqu'au 5 juillet 2025 à 4h18 basé sur les rêves prophétiques de Tatsuki Ryo de 1999 et 2021. La prophétie décrit un événement de connexion tectonique s'étendant du Japon à Taïwan, Philippines, Hong Kong, au sud jusqu'à l'île Morotai d'Indonésie et à l'est jusqu'aux îles Mariannes du Nord.",
    keywords: ["Tatsuki Ryo", "prophétie", "Taïwan", "Philippines", "Hong Kong", "connexion tectonique", "5 juillet 2025", "prédiction séisme", "alerte catastrophe", "minuteur compte à rebours"],
    ogDescription: "Minuteur de compte à rebours de la prophétie de Tatsuki Ryo pour l'événement de connexion tectonique Taïwan-Philippines-Hong Kong le 5 juillet 2025. Basé sur des rêves prophétiques de 1999 et 2021, prédisant un événement géologique majeur.",
    bookTitle: "Livre de Prophétie de Tatsuki Ryo",
    bookSubtitle: "Exploration Approfondie des Prophéties de Tatsuki Ryo",
    readBook: "Lire le Livre de Prophétie",
    bookDescription: "Ce livre plonge dans les prophéties de Tatsuki Ryo, y compris les rêves prophétiques de 1999 et 2021, et les prédictions pour l'événement de connexion tectonique Taïwan-Philippines-Hong Kong le 5 juillet 2025 à 4h18.",
  },
  de: {
    title: "Tatsuki Ryo Prophezeiung Countdown-Timer",
    targetTime: "Prophezeiungszeit: 5. Juli 2025 um 4:18 Uhr",
    timeUp: "Die Zeit der Prophezeiung ist gekommen!",
    countdownEnded: "Tatsuki Ryo Prophezeiungszeit ist gekommen",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    updating: "Live-Countdown",
    share: "Prophezeiung Teilen",
    shareCountdown: "Tatsuki Ryo Prophezeiung Countdown Teilen",
    shareText: "Tatsuki Ryos Taiwan-Philippinen-Tektonische Verbindung Prophezeiung: Noch {days} Tage {hours} Stunden {minutes} Minuten {seconds} Sekunden!",
    linkCopied: "Prophezeiung Countdown-Link kopiert!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description: "Countdown bis zum 5. Juli 2025 um 4:18 Uhr basierend auf Tatsuki Ryos prophetischen Träumen von 1999 und 2021. Die Prophezeiung beschreibt ein tektonisches Verbindungsereignis, das sich von Japan bis Taiwan, Philippinen, Hongkong, südlich bis zu Indonesiens Morotai-Insel und östlich bis zu den Nördlichen Marianen erstreckt.",
    keywords: ["Tatsuki Ryo", "Prophezeiung", "Taiwan", "Philippinen", "Hongkong", "tektonische Verbindung", "5. Juli 2025", "Erdbebenvorhersage", "Katastrophenwarnung", "Countdown-Timer"],
    ogDescription: "Tatsuki Ryo Prophezeiung Countdown-Timer für das Taiwan-Philippinen-Hongkong tektonische Verbindungsereignis am 5. Juli 2025. Basierend auf prophetischen Träumen von 1999 und 2021, die ein großes geologisches Ereignis vorhersagen.",
    bookTitle: "Tatsuki Ryo Prophezeiung Buch",
    bookSubtitle: "Vertiefte Erkundung von Tatsuki Ryos Prophezeiungen",
    readBook: "Prophezeiung Buch Lesen",
    bookDescription: "Dieses Buch vertieft sich in die Prophezeiungen von Tatsuki Ryo, einschließlich der prophetischen Träume von 1999 und 2021, und der Vorhersagen für das Taiwan-Philippinen-Hongkong tektonische Verbindungsereignis am 5. Juli 2025 um 4:18 Uhr.",
  },
}

export function detectLanguage(): Language {
  if (typeof window === "undefined") return "zh-TW"

  const browserLang = navigator.language || navigator.languages?.[0] || "zh-TW"

  // 語言映射
  const langMap: Record<string, Language> = {
    "zh-TW": "zh-TW",
    "zh-HK": "zh-TW",
    "zh-MO": "zh-TW",
    "zh-CN": "zh-CN",
    "zh-SG": "zh-CN",
    en: "en",
    "en-US": "en",
    "en-GB": "en",
    "en-AU": "en",
    "en-CA": "en",
    ja: "ja",
    "ja-JP": "ja",
    ko: "ko",
    "ko-KR": "ko",
    es: "es",
    "es-ES": "es",
    "es-MX": "es",
    fr: "fr",
    "fr-FR": "fr",
    "fr-CA": "fr",
    de: "de",
    "de-DE": "de",
    "de-AT": "de",
    "de-CH": "de",
  }

  // 精確匹配
  if (langMap[browserLang]) {
    return langMap[browserLang]
  }

  // 語言前綴匹配
  const langPrefix = browserLang.split("-")[0]
  if (langMap[langPrefix]) {
    return langMap[langPrefix]
  }

  // 預設返回繁體中文
  return "zh-TW"
}

export function formatShareText(
  template: string,
  timeLeft: { days: number; hours: number; minutes: number; seconds: number },
): string {
  return template
    .replace("{days}", timeLeft.days.toString())
    .replace("{hours}", timeLeft.hours.toString())
    .replace("{minutes}", timeLeft.minutes.toString())
    .replace("{seconds}", timeLeft.seconds.toString())
}
