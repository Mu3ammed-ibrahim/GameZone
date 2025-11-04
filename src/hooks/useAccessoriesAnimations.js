import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for Accessories section animations
 * Handles heading, subheading, button, and carousel animations with GSAP
 * Optimized to use single timeline with one ScrollTrigger
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useAccessoriesAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-animation if already animated
    if (hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Use single timeline with one ScrollTrigger for all elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Heading animation - fade in from top with scale
      if (headingRef.current) {
        tl.from(headingRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Subheading animation - fade in with delay
      if (subheadingRef.current) {
        tl.from(
          subheadingRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          0.2
        );
      }

      // Button animation - fade in with bounce
      if (buttonRef.current) {
        tl.from(
          buttonRef.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.8,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          0.4
        );
      }

      hasAnimated.current = true;
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
