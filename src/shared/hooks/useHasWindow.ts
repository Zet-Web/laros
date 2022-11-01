import { useState, useEffect } from 'react'

export const useHasWindow = () => {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return hasWindow
}
