import { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { Button } from "@/Components/ui/button";
import Heroimg from "@/assets/Heroimg.jpg";
import SplitText from "@/Components/SplitText";

const Hero = memo(() => {
  const buttonsRef = useRef(null);
  const descRef = useRef(null);

  // Smooth scroll handler - memoized to prevent unnecessary re-creation
  const handleSmoothScroll = useRef((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }).current;

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      // Buttons animation
      gsap.to(buttonsRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current.children, {
        y: 30,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // Description animation
      gsap.to(descRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // Features scroll animation removed as it's not needed
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <SplitText
            text="GameZone"
            className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 opacity-0 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              asChild
              className="font-poppins bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 border-0 w-full sm:w-auto"
            >
              <a href="#games" onClick={(e) => handleSmoothScroll(e, "#games")}>
                Explore Games
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-poppins bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base hover:border-white transition-all duration-300 w-full sm:w-auto"
            >
              <a href="#cta" onClick={(e) => handleSmoothScroll(e, "#cta")}>
                Learn More
              </a>
            </Button>
          </div>
        </div>

        {/* Right Content - Description */}
        <div
          ref={descRef}
          className="flex items-center justify-center lg:justify-end opacity-0"
        >
          <div className="max-w-md text-center lg:text-left px-4 sm:px-0">
            <p className="font-roboto text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
              Discover the latest technology that transforms how you work and
              play. Our expert team brings you innovative devices designed to
              enhance your digital experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
