import { Button } from "@/Components/ui/button";
import { useAccessoriesAnimations } from "@/hooks/useAccessoriesAnimations";

const Accessories = () => {
  const { sectionRef, headingRef, subheadingRef, buttonRef } =
    useAccessoriesAnimations();

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-slate-950"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-bold text-gradient-neon mb-6"
          >
            Level Up Your Setup
          </h2>

          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="text-lg sm:text-xl md:text-2xl text-gradient-subtle leading-relaxed mb-10 px-4"
          >
            Discover premium gaming accessories and gear designed to enhance
            your performance. From professional-grade headsets to mechanical
            keyboards, we have everything you need to dominate the game.
          </p>

          {/* Call to Action Button */}
          <div ref={buttonRef}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold text-lg px-10 py-6 h-auto border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Shop Accessories Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-fire mb-2">
                500+
              </div>
              <div className="text-xs md:text-sm text-slate-400">
                Premium Products
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gaming mb-2">
                50+
              </div>
              <div className="text-xs md:text-sm text-slate-400">
                Top Brands
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-neon mb-2">
                24/7
              </div>
              <div className="text-xs md:text-sm text-slate-400">
                Fast Shipping
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-subtle mb-2">
                100%
              </div>
              <div className="text-xs md:text-sm text-slate-400">
                Quality Assured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
