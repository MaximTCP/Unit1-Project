import { useEffect, useRef, useState } from 'react'
import feather from 'feather-icons'
import Lightning from './components/Lightning'
import TitleSlide from './slides/TitleSlide'
import RoleSlide from './slides/RoleSlide'
import BackgroundSlide from './slides/BackgroundSlide'
import SuccessSlide from './slides/SuccessSlide'
import StakeholdersSlide from './slides/StakeholdersSlide'
import LifeCycleSlide from './slides/LifeCycleSlide'
import CoreFunctionsSlide from './slides/CoreFunctionsSlide'
import FacilitatingFunctionsSlide from './slides/FacilitatingFunctionsSlide'
import ExperienceSlide from './slides/ExperienceSlide'
import ReflectionSlide from './slides/ReflectionSlide'
import WorksCitedSlide from './slides/WorksCitedSlide'

export default function App() {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)

  // Replace feather icons after render & when progress changes (slides in view)
  useEffect(() => { feather.replace() })

  // Scroll progress
  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    el.addEventListener('scroll', onScroll)
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen w-screen overflow-hidden gradient-bg text-gray-100 relative">
      {/* Lightning background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Lightning hue={225} xOffset={0} speed={1} intensity={0.9} size={1.1} />
      </div>
      {/* Overlay subtle vignette for contrast */}
      <div className="fixed inset-0 -z-5 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0.75))]" />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-[width] duration-150 ease-out z-50" style={{ width: `${progress}%` }} />

      <div ref={mainRef} className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll relative">
        <TitleSlide />
        <RoleSlide />
        <BackgroundSlide />
        <SuccessSlide />
        <StakeholdersSlide />
        <LifeCycleSlide />
        <CoreFunctionsSlide />
        <FacilitatingFunctionsSlide />
        <ExperienceSlide />
        <ReflectionSlide />
        <WorksCitedSlide />
      </div>
    </div>
  )
}
