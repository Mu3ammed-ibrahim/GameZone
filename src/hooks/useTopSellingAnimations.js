import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for TopSelling section animations
 * Handles heading animation, card stagger animations, and hover effects with GSAP
 * Optimized with quickTo methods and reduced ScrollTrigger instances
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useTopSellingAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-animation if already animated
    if (hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Cards stagger animation
      const validCards = cardsRef.current.filter((card) => card !== null);
      if (validCards.length > 0) {
        // Set initial state for cards
        gsap.set(validCards, {
          opacity: 0,
          y: 60,
          scale: 0.9,
        });

        // Animate cards in
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
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Optimized hover animations using GSAP quickTo for better performance
        const eventListeners = [];
        validCards.forEach((card) => {
          if (card) {
            // QuickTo method for instant, performant updates
            const quickY = gsap.quickTo(card, "y", {
              duration: 0.3,
              ease: "power2.out",
            });

            const handleMouseEnter = () => {
              quickY(-10);
            };

            const handleMouseLeave = () => {
              quickY(0);
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
    cardsRef,
  };
};
