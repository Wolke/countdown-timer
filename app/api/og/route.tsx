import { ImageResponse } from "next/og"

export const runtime = "edge"
export const dynamic = "force-static"

export async function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f23 0%, #1e1b4b 30%, #1e3a8a 70%, #dc2626 100%)",
          fontSize: 60,
          fontWeight: 700,
          color: "white",
          position: "relative",
        }}
      >
        {/* 背景裝飾效果 */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            width: "100px",
            height: "100px",
            background: "rgba(220, 38, 38, 0.3)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            width: "150px",
            height: "150px",
            background: "rgba(59, 130, 246, 0.3)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        {/* 主標題 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "40px",
            background: "rgba(0, 0, 0, 0.3)",
            padding: "30px 50px",
            borderRadius: "20px",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              marginBottom: "20px",
              background: "linear-gradient(45deg, #fbbf24, #f59e0b, #dc2626)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            龍樹諒預言
          </div>
          <div
            style={{
              fontSize: "48px",
              marginBottom: "10px",
              color: "#fbbf24",
            }}
          >
            倒數計時器
          </div>
        </div>

        {/* 時間資訊 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "25px 40px",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "42px",
              marginBottom: "15px",
              color: "#fef3c7",
            }}
          >
            2025年7月5日
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#fed7aa",
            }}
          >
            上午 4:18 分
          </div>
        </div>

        {/* 地理範圍 */}
        <div
          style={{
            fontSize: "28px",
            color: "#e5e7eb",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          🌏 台灣 • 菲律賓 • 香港 • 板塊連結預言
        </div>

        {/* 底部標語 */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "24px",
            color: "#d1d5db",
            textAlign: "center",
          }}
        >
          ⚠️ 預言倒數進行中 ⚠️
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
