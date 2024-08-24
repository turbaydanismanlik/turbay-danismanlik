import {useEffect, useState} from 'react'

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window
  return {width, height}
}

function useWindowDimensions() {
  const isClient = typeof window === 'object'

  const [windowDimensions, setWindowDimensions] = useState(
    isClient ? getWindowDimensions() : {width: 0, height: 0},
  )

  useEffect(() => {
    if (!isClient) return

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowDimensions
}

export default {
  useWindowDimensions,
}
