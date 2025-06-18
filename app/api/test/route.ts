export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from OG API!" }), {
    headers: { "Content-Type": "application/json" },
  })
}
