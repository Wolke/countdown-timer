"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "../countdown-timer"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <CountdownTimer />
}
