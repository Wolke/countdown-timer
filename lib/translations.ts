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
}

export const translations: Record<Language, Translations> = {
  "zh-TW": {
    title: "倒數計時器",
    targetTime: "目標時間：2025年7月5日 上午4:18",
    timeUp: "時間到了！",
    countdownEnded: "倒數計時已結束",
    days: "天",
    hours: "小時",
    minutes: "分鐘",
    seconds: "秒",
    updating: "實時更新中",
    share: "分享",
    shareCountdown: "分享倒數計時",
    shareText: "還有 {days} 天 {hours} 小時 {minutes} 分鐘 {seconds} 秒！",
    linkCopied: "連結已複製到剪貼板！",
    morning: "上午",
    afternoon: "下午",
    evening: "傍晚",
    night: "深夜",
    description: "精美的倒數計時器，倒數到2025年7月5日上午4:18分。實時更新，支援分享到社群媒體。",
    keywords: ["倒數計時器", "計時器", "2025", "倒數", "countdown"],
    ogDescription: "精美的倒數計時器，倒數到2025年7月5日上午4:18分。快來一起倒數吧！",
  },
  "zh-CN": {
    title: "倒计时器",
    targetTime: "目标时间：2025年7月5日 上午4:18",
    timeUp: "时间到了！",
    countdownEnded: "倒计时已结束",
    days: "天",
    hours: "小时",
    minutes: "分钟",
    seconds: "秒",
    updating: "实时更新中",
    share: "分享",
    shareCountdown: "分享倒计时",
    shareText: "还有 {days} 天 {hours} 小时 {minutes} 分钟 {seconds} 秒！",
    linkCopied: "链接已复制到剪贴板！",
    morning: "上午",
    afternoon: "下午",
    evening: "傍晚",
    night: "深夜",
    description: "精美的倒计时器，倒计时到2025年7月5日上午4:18分。实时更新，支持分享到社交媒体。",
    keywords: ["倒计时器", "计时器", "2025", "倒计时", "countdown"],
    ogDescription: "精美的倒计时器，倒计时到2025年7月5日上午4:18分。快来一起倒计时吧！",
  },
  en: {
    title: "Countdown Timer",
    targetTime: "Target: July 5, 2025 at 4:18 AM",
    timeUp: "Time's Up!",
    countdownEnded: "Countdown has ended",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    updating: "Live updating",
    share: "Share",
    shareCountdown: "Share Countdown",
    shareText: "{days} days {hours} hours {minutes} minutes {seconds} seconds left!",
    linkCopied: "Link copied to clipboard!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description:
      "Beautiful countdown timer counting down to July 5, 2025 at 4:18 AM. Real-time updates with social media sharing.",
    keywords: ["countdown timer", "timer", "2025", "countdown", "clock"],
    ogDescription: "Beautiful countdown timer counting down to July 5, 2025 at 4:18 AM. Join the countdown!",
  },
  ja: {
    title: "カウントダウンタイマー",
    targetTime: "目標時刻：2025年7月5日 午前4:18",
    timeUp: "時間です！",
    countdownEnded: "カウントダウン終了",
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒",
    updating: "リアルタイム更新中",
    share: "シェア",
    shareCountdown: "カウントダウンをシェア",
    shareText: "あと {days} 日 {hours} 時間 {minutes} 分 {seconds} 秒！",
    linkCopied: "リンクをクリップボードにコピーしました！",
    morning: "午前",
    afternoon: "午後",
    evening: "夕方",
    night: "深夜",
    description: "2025年7月5日午前4:18までの美しいカウントダウンタイマー。リアルタイム更新、SNSシェア対応。",
    keywords: ["カウントダウンタイマー", "タイマー", "2025", "カウントダウン", "時計"],
    ogDescription: "2025年7月5日午前4:18までの美しいカウントダウンタイマー。一緒にカウントダウンしましょう！",
  },
  ko: {
    title: "카운트다운 타이머",
    targetTime: "목표 시간: 2025년 7월 5일 오전 4:18",
    timeUp: "시간 종료!",
    countdownEnded: "카운트다운이 끝났습니다",
    days: "일",
    hours: "시간",
    minutes: "분",
    seconds: "초",
    updating: "실시간 업데이트 중",
    share: "공유",
    shareCountdown: "카운트다운 공유",
    shareText: "{days}일 {hours}시간 {minutes}분 {seconds}초 남았습니다!",
    linkCopied: "링크가 클립보드에 복사되었습니다!",
    morning: "오전",
    afternoon: "오후",
    evening: "저녁",
    night: "새벽",
    description: "2025년 7월 5일 오전 4:18까지의 아름다운 카운트다운 타이머. 실시간 업데이트, SNS 공유 지원.",
    keywords: ["카운트다운 타이머", "타이머", "2025", "카운트다운", "시계"],
    ogDescription: "2025년 7월 5일 오전 4:18까지의 아름다운 카운트다운 타이머. 함께 카운트다운해요!",
  },
  es: {
    title: "Temporizador de Cuenta Regresiva",
    targetTime: "Objetivo: 5 de julio de 2025 a las 4:18 AM",
    timeUp: "¡Tiempo terminado!",
    countdownEnded: "La cuenta regresiva ha terminado",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    updating: "Actualizando en vivo",
    share: "Compartir",
    shareCountdown: "Compartir Cuenta Regresiva",
    shareText: "¡Quedan {days} días {hours} horas {minutes} minutos {seconds} segundos!",
    linkCopied: "¡Enlace copiado al portapapeles!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description:
      "Hermoso temporizador de cuenta regresiva hasta el 5 de julio de 2025 a las 4:18 AM. Actualizaciones en tiempo real con compartir en redes sociales.",
    keywords: ["temporizador cuenta regresiva", "temporizador", "2025", "cuenta regresiva", "reloj"],
    ogDescription:
      "Hermoso temporizador de cuenta regresiva hasta el 5 de julio de 2025 a las 4:18 AM. ¡Únete a la cuenta regresiva!",
  },
  fr: {
    title: "Minuteur de Compte à Rebours",
    targetTime: "Objectif : 5 juillet 2025 à 4h18",
    timeUp: "Temps écoulé !",
    countdownEnded: "Le compte à rebours est terminé",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    updating: "Mise à jour en direct",
    share: "Partager",
    shareCountdown: "Partager le Compte à Rebours",
    shareText: "Il reste {days} jours {hours} heures {minutes} minutes {seconds} secondes !",
    linkCopied: "Lien copié dans le presse-papiers !",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description:
      "Beau minuteur de compte à rebours jusqu'au 5 juillet 2025 à 4h18. Mises à jour en temps réel avec partage sur les réseaux sociaux.",
    keywords: ["minuteur compte à rebours", "minuteur", "2025", "compte à rebours", "horloge"],
    ogDescription: "Beau minuteur de compte à rebours jusqu'au 5 juillet 2025 à 4h18. Rejoignez le compte à rebours !",
  },
  de: {
    title: "Countdown-Timer",
    targetTime: "Ziel: 5. Juli 2025 um 4:18 Uhr",
    timeUp: "Zeit ist um!",
    countdownEnded: "Countdown ist beendet",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    updating: "Live-Aktualisierung",
    share: "Teilen",
    shareCountdown: "Countdown Teilen",
    shareText: "Noch {days} Tage {hours} Stunden {minutes} Minuten {seconds} Sekunden!",
    linkCopied: "Link in die Zwischenablage kopiert!",
    morning: "AM",
    afternoon: "PM",
    evening: "PM",
    night: "AM",
    description: "Schöner Countdown-Timer bis zum 5. Juli 2025 um 4:18 Uhr. Echtzeit-Updates mit Social Media-Sharing.",
    keywords: ["countdown timer", "timer", "2025", "countdown", "uhr"],
    ogDescription: "Schöner Countdown-Timer bis zum 5. Juli 2025 um 4:18 Uhr. Mach mit beim Countdown!",
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
