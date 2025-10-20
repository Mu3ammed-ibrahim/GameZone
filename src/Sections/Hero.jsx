import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Heroimg from "@/assets/Heroimg.jpg";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const descRef = useRef(null);
  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      });

      // Buttons animation
      gsap.from(buttonsRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(descRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Features scroll animation removed as it's not needed
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Heroimg})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Simple dark overlay for text readability */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1
            ref={titleRef}
            className="font-poppins text-display-lg md:text-8xl font-bold  text-gradient-hero mb-8 tracking-tight"
          >
            Game Zone
          </h1>

          <div ref={buttonsRef} className="flex gap-4 mb-8">
            <Button
              size="lg"
              className="font-poppins bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 text-body-md"
            >
              Explore
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-poppins border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 text-body-md"
            >
              Visit
            </Button>
          </div>
        </div>

        {/* Right Content - Description */}
        <div ref={descRef} className="flex items-center justify-end">
          <div className="max-w-md">
            <p className="font-roboto text-body-lg text-gradient-subtle leading-relaxed">
              Discover the latest technology that transforms how you work and
              play. Our expert team brings you innovative devices designed to
              enhance your digital experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
