import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const revalidate = false

export async function GET() {
  try {
    // 計算倒數時間
    const targetDate = new Date("2025-07-05T04:18:00")
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()
    
    let timeString = ""
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      timeString = `${days}天 ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    } else {
      timeString = "時間已到！"
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1e1b4b",
            fontSize: 60,
            fontWeight: 700,
            color: "white",
          }}
        >
          <div style={{ marginBottom: "20px" }}>龍樹諒預言</div>
          <div style={{ fontSize: "40px", marginBottom: "20px" }}>倒數計時器</div>
          <div style={{ fontSize: "30px", marginBottom: "15px" }}>2025年7月5日</div>
          <div style={{ 
            fontSize: "35px", 
            color: "#ef4444",
            fontWeight: 900,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
          }}>
            {timeString}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`OG Error: ${e.message}`)
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    })
  }
}
