import { ImageResponse } from "next/og"

export const runtime = "edge"

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
          background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 50%, #1e40af 100%)",
          fontSize: 60,
          fontWeight: 700,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            ⏰
          </div>
          <div>倒數計時器</div>
        </div>

        <div
          style={{
            fontSize: "48px",
            marginBottom: "30px",
            opacity: 0.9,
          }}
        >
          目標時間：2025年7月5日
        </div>

        <div
          style={{
            fontSize: "36px",
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          上午 4:18 分
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "24px",
            opacity: 0.7,
          }}
        >
          快來一起倒數吧！ 🎉
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
