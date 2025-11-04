import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for CTA section animations
 * Handles heading, subheading, button, and background animations with GSAP
 * Optimized to reduce ScrollTrigger instances and improve performance
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useCTAAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const backgroundRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-animation if already animated
    if (hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Use single ScrollTrigger for the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // Only animate once
        },
      });

      // Background zoom in animation
      if (backgroundRef.current) {
        tl.from(
          backgroundRef.current,
          {
            scale: 1.2,
            opacity: 0,
            borderRadius: "50px",
            duration: 1,
            ease: "power3.out",
          },
          0
        );
      }

      // Heading animation - fade in from top with scale
      if (headingRef.current) {
        tl.from(
          headingRef.current,
          {
            opacity: 0,
            y: -80,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
          },
          0.3
        );
      }

      // Subheading animation - fade in with delay
      if (subheadingRef.current) {
        tl.from(
          subheadingRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
          },
          0.5
        );
      }

      // Button container animation - fade in with bounce
      if (buttonContainerRef.current) {
        tl.from(
          buttonContainerRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          0.7
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
    buttonContainerRef,
    backgroundRef,
  };
};
