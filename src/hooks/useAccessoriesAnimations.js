import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for Accessories section animations
 * Handles heading, subheading, button, and carousel animations with GSAP
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useAccessoriesAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - fade in from top with scale
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: -60,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Subheading animation - fade in with delay
      if (subheadingRef.current) {
        gsap.from(subheadingRef.current, {
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });
      }

      // Button animation - fade in with bounce
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          scale: 0.8,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    headingRef,
    subheadingRef,
    buttonRef,
  };
};
