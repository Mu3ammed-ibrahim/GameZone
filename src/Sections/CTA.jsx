import React, { useEffect,useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const CTA = () => {
    useEffect(() => {
        const ctx= gsap.context(()=>{
            const tl = gsap.timeline({})

        })
        return ()=> ctx.revert()
    },[])
  return (

    <div>CTA
        u
    </div>
  )
}

export default CTA