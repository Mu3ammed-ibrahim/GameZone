import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for Features section animations
 * Handles heading, subheading, image, and card animations with GSAP
 *
 * @returns {Object} - Object containing refs for animated elements
 */
export const useFeatureAnimations = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading animation
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

      // Subheading/paragraph animation (staggered after heading)
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

      // Image animation with scale and rotation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        scale: 0.9,
        rotation: -5,
        duration: 1.2,
        ease: "power3.out",
      });

      // Individual card animations on scroll
      cardsRef.current.forEach((card) => {
        if (card) {
          // Animate the entire card
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: 100,
            duration: 0.8,
            ease: "power3.out",
          });

          // Animate card title separately
          const cardTitle = card.querySelector(".card-title");
          if (cardTitle) {
            gsap.from(cardTitle, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              y: 20,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
            });
          }

          // Animate card description separately
          const cardDescription = card.querySelector(".card-description");
          if (cardDescription) {
            gsap.from(cardDescription, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              y: 20,
              duration: 0.8,
              delay: 0.4,
              ease: "power3.out",
            });
          }
        }
      });
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
