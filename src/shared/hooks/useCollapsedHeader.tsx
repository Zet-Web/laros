import { useEffect, useState } from 'react'
import { COLLAPSE_IN_PX } from 'shared/constants'

// Return if header on the screen is collapsed
export const useCollapsedHeader = (): boolean => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => setIsCollapsed(window.pageYOffset > COLLAPSE_IN_PX)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return isCollapsed
}
