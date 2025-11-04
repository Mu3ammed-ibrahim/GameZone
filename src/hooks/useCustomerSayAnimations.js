import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for CustomersSay section animations
 * Handles heading, subheading, and testimonial card animations with GSAP
 * Optimized with memoized event handlers and reduced ScrollTrigger instances
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useCustomerSayAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-animation if already animated
    if (hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Use single timeline for heading and subheading
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Heading animation - fade in from top
      if (headingRef.current) {
        headerTl.from(headingRef.current, {
          opacity: 0,
          y: -50,
          borderRadius: "10px",
          duration: 1,
          ease: "power3.out",
        });
      }

      // Subheading animation - fade in with delay
      if (subheadingRef.current) {
        headerTl.from(
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

      // Testimonial cards stagger animation
      const validCards = cardsRef.current.filter((card) => card !== null);
      if (validCards.length > 0) {
        // Set initial state
        gsap.set(validCards, {
          opacity: 0,
          y: 80,
          scale: 0.8,
        });

        // Animate cards in with stagger
        gsap.to(validCards, {
          scrollTrigger: {
            trigger: validCards[0],
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Optimized hover animations using GSAP quickTo for better performance
        const eventListeners = [];
        validCards.forEach((card) => {
          if (card) {
            // QuickTo methods for instant, performant updates
            const quickY = gsap.quickTo(card, "y", {
              duration: 0.3,
              ease: "power2.out",
            });
            const quickScale = gsap.quickTo(card, "scale", {
              duration: 0.3,
              ease: "power2.out",
            });

            const handleMouseEnter = () => {
              quickY(-8);
              quickScale(1.02);
            };

            const handleMouseLeave = () => {
              quickY(0);
              quickScale(1);
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);
            eventListeners.push({ card, handleMouseEnter, handleMouseLeave });
          }
        });

        // Cleanup function for event listeners
        ctx.add(() => {
          eventListeners.forEach(
            ({ card, handleMouseEnter, handleMouseLeave }) => {
              card.removeEventListener("mouseenter", handleMouseEnter);
              card.removeEventListener("mouseleave", handleMouseLeave);
            }
          );
        });
      }

      hasAnimated.current = true;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    headingRef,
    subheadingRef,
    cardsRef,
  };
};
