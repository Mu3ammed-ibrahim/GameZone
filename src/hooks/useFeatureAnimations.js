import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for Features section animations
 * Handles heading, subheading, image, and card animations with GSAP
 * Optimized to reduce ScrollTrigger instances - MAJOR performance improvement
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useFeatureAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-animation if already animated
    if (hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Header timeline with single ScrollTrigger
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Main heading animation
      headerTl.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Subheading/paragraph animation (staggered after heading)
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

      // Image animation with scale and rotation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
        opacity: 0,
        x: -100,
        scale: 0.9,
        rotation: -5,
        duration: 1.2,
        ease: "power3.out",
      });

      // Optimized card animations - use single timeline per card instead of 3 ScrollTriggers
      const validCards = cardsRef.current.filter((card) => card !== null);
      validCards.forEach((card, index) => {
        if (card) {
          const cardTitle = card.querySelector(".card-title");
          const cardDescription = card.querySelector(".card-description");

          // Single timeline with one ScrollTrigger per card
          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          });

          // Animate the entire card
          cardTl.from(card, {
            opacity: 0,
            x: 100,
            duration: 0.8,
            ease: "power3.out",
          });

          // Animate card title
          if (cardTitle) {
            cardTl.from(
              cardTitle,
              {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
              },
              0.2
            );
          }

          // Animate card description
          if (cardDescription) {
            cardTl.from(
              cardDescription,
              {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
              },
              0.4
            );
          }
        }
      });

      hasAnimated.current = true;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    headingRef,
    subheadingRef,
    imageRef,
    cardsRef,
  };
};
