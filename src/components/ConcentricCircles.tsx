'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ConcentricCirclesProps {
  rings: number
  size?: number
}

export default function ConcentricCircles({ rings, size = 120 }: ConcentricCirclesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dotRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const circleElements = []
  for (let i = 1; i <= rings; i++) {
    const circleSize = (size / rings) * i
    circleElements.push(
      <div
        key={i}
        className="absolute rounded-full border border-stone/30"
        style={{
          width: circleSize,
          height: circleSize,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: size, height: size }}
    >
      {circleElements}
      {/* Orbiting dot on outermost ring */}
      <div
        ref={dotRef}
        className="absolute"
        style={{
          width: size,
          height: size,
          top: 0,
          left: 0,
        }}
      >
        <div
          className="absolute w-2 h-2 rounded-full bg-coral"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  )
}
