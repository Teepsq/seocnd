'use client'

import { useEffect, useState } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import { useScrollProgress } from './useScrollProgress'

interface ParallaxLayerConfig {
  depthMultiplier: number // -60 to 0
  scaleRange?: [number, number] // [min, max] default [0.8, 1]
  opacityRange?: [number, number] // [min, max] default [0.3, 1]
  rotationRange?: [number, number] // [min, max] in degrees
}

export function useParallaxLayer(config: ParallaxLayerConfig) {
  const scrollProgress = useScrollProgress()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const {
    depthMultiplier,
    scaleRange = [0.8, 1],
    opacityRange = [0.3, 1],
    rotationRange,
  } = config

  // Z-transform based on scroll and depth
  const translateZ = useTransform(scrollProgress, (progress) => {
    // Depth effect: as scroll progresses, layers with lower depthMultiplier move faster
    return depthMultiplier * (1 - progress) * 100
  })

  // Scale based on depth (closer = larger)
  const scale = useTransform(scrollProgress, (progress) => {
    const depth = Math.abs(depthMultiplier) / 60
    const scaleValue = scaleRange[0] + (scaleRange[1] - scaleRange[0]) * (1 - depth * 0.3)
    return scaleValue + progress * 0.1
  })

  // Opacity fades in as you scroll past
  const opacity = useTransform(scrollProgress, (progress) => {
    const progressInLayer = Math.min(Math.max(progress - 0.1, 0), 0.3) / 0.3
    const baseOpacity = opacityRange[0] + (opacityRange[1] - opacityRange[0]) * progressInLayer
    return baseOpacity
  })

  // Optional rotation effect
  const rotation = rotationRange
    ? useTransform(scrollProgress, (progress) => {
        return rotationRange[0] + (rotationRange[1] - rotationRange[0]) * progress
      })
    : useMotionValue(0)

  return {
    translateZ: isMounted ? translateZ : 0,
    scale: isMounted ? scale : scaleRange[0],
    opacity: isMounted ? opacity : opacityRange[0],
    rotation: isMounted ? rotation : 0,
  }
}
