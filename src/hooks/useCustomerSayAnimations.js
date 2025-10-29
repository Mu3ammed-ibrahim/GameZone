import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for CustomersSay section animations
 * Handles heading, subheading, and testimonial card animations with GSAP
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useCustomerSayAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - fade in from top
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: -50,
          borderRadius: "10px",
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
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Hover animation for each card with cleanup
        const eventListeners = [];
        validCards.forEach((card) => {
          if (card) {
            const handleMouseEnter = () => {
              gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            };

            const handleMouseLeave = () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);
            eventListeners.push({ card, handleMouseEnter, handleMouseLeave });
          }
        });

        // Cleanup function for event listeners
        return () => {
          eventListeners.forEach(
            ({ card, handleMouseEnter, handleMouseLeave }) => {
              card.removeEventListener("mouseenter", handleMouseEnter);
              card.removeEventListener("mouseleave", handleMouseLeave);
            }
          );
        };
      }
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
