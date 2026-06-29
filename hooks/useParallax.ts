'use client'

import { useEffect, useRef, useState } from 'react'

export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const windowCenter = window.innerHeight / 2
        const distance = windowCenter - elementCenter
        setOffset(distance * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
