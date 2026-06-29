// Scene definitions and progress tracking
export type Scene = 'night-sky' | 'memories' | 'letters' | 'vinyl' | 'ocean-dreams' | 'infinite-ascent'

export interface SceneConfig {
  id: Scene
  name: string
  startScroll: number
  endScroll: number
  cameraDepth: number
  backgroundColor: string
  parallaxLayers: number
}

export const SCENES: Record<Scene, SceneConfig> = {
  'night-sky': {
    id: 'night-sky',
    name: 'Under the Stars',
    startScroll: 0,
    endScroll: 0.15,
    cameraDepth: -100,
    backgroundColor: '#0a0e27',
    parallaxLayers: 4,
  },
  memories: {
    id: 'memories',
    name: 'Our Memories',
    startScroll: 0.15,
    endScroll: 0.35,
    cameraDepth: -50,
    backgroundColor: '#0f1229',
    parallaxLayers: 5,
  },
  letters: {
    id: 'letters',
    name: 'Unfolded Words',
    startScroll: 0.35,
    endScroll: 0.55,
    cameraDepth: -20,
    backgroundColor: '#0a0e27',
    parallaxLayers: 4,
  },
  vinyl: {
    id: 'vinyl',
    name: 'Our Soundtrack',
    startScroll: 0.55,
    endScroll: 0.7,
    cameraDepth: 0,
    backgroundColor: '#0f1229',
    parallaxLayers: 3,
  },
  'ocean-dreams': {
    id: 'ocean-dreams',
    name: 'Dreams & Ocean',
    startScroll: 0.7,
    endScroll: 0.85,
    cameraDepth: 20,
    backgroundColor: '#0a0e27',
    parallaxLayers: 5,
  },
  'infinite-ascent': {
    id: 'infinite-ascent',
    name: 'Forever',
    startScroll: 0.85,
    endScroll: 1.0,
    cameraDepth: 50,
    backgroundColor: '#1a1a2e',
    parallaxLayers: 3,
  },
}

// Calculate progress within a scene (0 to 1)
export function getSceneProgress(scrollProgress: number, scene: SceneConfig): number {
  if (scrollProgress < scene.startScroll || scrollProgress > scene.endScroll) {
    return scrollProgress < scene.startScroll ? 0 : 1
  }
  return (scrollProgress - scene.startScroll) / (scene.endScroll - scene.startScroll)
}

// Get current active scene
export function getCurrentScene(scrollProgress: number): Scene {
  for (const [key, scene] of Object.entries(SCENES)) {
    if (scrollProgress >= scene.startScroll && scrollProgress <= scene.endScroll) {
      return key as Scene
    }
  }
  return 'night-sky'
}

// Parallax depth multipliers for each layer
export function getParallaxDepth(layer: number, maxLayers: number): number {
  // Values from -60 to 0, spreading evenly across layers
  return (-60 * (maxLayers - layer)) / maxLayers
}

// Easing functions for smooth transitions
export const easing = {
  smooth: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
}
