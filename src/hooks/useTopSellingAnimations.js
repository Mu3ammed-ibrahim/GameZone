import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for TopSelling section animations
 * Handles heading animation, card stagger animations, and hover effects with GSAP
 * 
 * @returns {Object} - Object containing refs for animated elements
 */
export const useTopSellingAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
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
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      // Hover effect for each card
      validCards.forEach((card) => {
        if (card) {
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleMouseEnter);
          card.addEventListener("mouseleave", handleMouseLeave);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    headingRef,
    cardsRef,
  };
};

