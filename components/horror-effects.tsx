"use client"

import { useEffect, useState } from "react"

export function HorrorEffects() {
  const [showFlicker, setShowFlicker] = useState(false)

  useEffect(() => {
    // 隨機閃爍效果
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        // 10% 機率觸發閃爍
        setShowFlicker(true)
        setTimeout(() => setShowFlicker(false), 150)
      }
    }, 2000)

    return () => clearInterval(flickerInterval)
  }, [])

  return (
    <>
      {/* 恐怖閃爍覆蓋層 */}
      {showFlicker && <div className="fixed inset-0 bg-red-900/20 pointer-events-none z-50 animate-pulse" />}

      {/* 浮動的恐怖粒子 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 恐怖陰影效果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/30 to-transparent" />
      </div>
    </>
  )
}
