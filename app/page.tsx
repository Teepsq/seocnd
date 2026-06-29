'use client'

import { CinematicHero } from '@/components/scenes/CinematicHero'
import { StarfieldMemories } from '@/components/scenes/StarfieldMemories'
import { UnfoldingLetters } from '@/components/scenes/UnfoldingLetters'
import { SpinningVinyl } from '@/components/scenes/SpinningVinyl'
import { OceanDreams } from '@/components/scenes/OceanDreams'
import { InfiniteAscent } from '@/components/scenes/InfiniteAscent'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0e27]">
      <CinematicHero />
      <StarfieldMemories />
      <UnfoldingLetters />
      <SpinningVinyl />
      <OceanDreams />
      <InfiniteAscent />
    </main>
  )
}
