import React, {useState, useEffect} from 'react'

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
      setScrollY(window.scrollY)
      console.log(window.scrollY);
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll )
  }, [])

  return (
    <>
      { scrollY }
    </>
  )
}

export default Scroll