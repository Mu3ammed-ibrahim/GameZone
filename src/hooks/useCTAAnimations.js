import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for CTA section animations
 * Handles heading, subheading, button, and background animations with GSAP
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useCTAAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background zoom in animation
      if (backgroundRef.current) {
        gsap.from(backgroundRef.current, {
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 1.2,
          opacity: 0,
          borderRadius: "50px",
          ease: "power3.out",
        });
      }

      // Heading animation - fade in from top with scale
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: -80,
          scale: 0.8,
          duration: 1,
          delay: 0.3,
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
          y: 40,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        });
      }

      // Button container animation - fade in with bounce
      if (buttonContainerRef.current) {
        gsap.from(buttonContainerRef.current, {
          scrollTrigger: {
            trigger: buttonContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          scale: 0.8,
          duration: 0.8,
          delay: 0.7,
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
    buttonContainerRef,
    backgroundRef,
  };
};
