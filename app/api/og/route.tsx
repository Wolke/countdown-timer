import { ImageResponse } from "next/og"

export const runtime = "edge"
export const dynamic = "force-static"
export const revalidate = false

export async function GET() {
  try {
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
          <div style={{ fontSize: "30px" }}>2025年7月5日</div>
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
