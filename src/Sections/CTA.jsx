import { Button } from "@/Components/ui/button";
import Gaming from "@/assets/Accessories/gaming headset.jpg";
import { useCTAAnimations } from "@/hooks/useCTAAnimations";

const CTA = () => {
  const {
    sectionRef,
    headingRef,
    subheadingRef,
    buttonContainerRef,
    backgroundRef,
  } = useCTAAnimations();

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          ref={backgroundRef}
          className="absolute z-10 inset-0 w-full h-full"
        >
          <img
            src={Gaming}
            alt="Gaming Keyboard"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-gradient-neon mb-6 sm:mb-8"
          >
            Ready to Start Your
            <br />
            Gaming Journey?
          </h2>

          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-roboto text-slate-300 leading-relaxed mb-8 sm:mb-12 px-4 max-w-3xl mx-auto"
          >
            Join thousands of gamers worldwide and experience the ultimate
            gaming platform. Get access to exclusive deals, latest releases, and
            premium accessories.
          </p>

          {/* Buttons */}
          <div
            ref={buttonContainerRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Get Started Now
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-roboto font-medium">
                Free Shipping
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-roboto font-medium">
                30-Day Returns
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-roboto font-medium">
                Secure Payment
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-roboto font-medium">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"></div>
    </section>
  );
};

export default CTA;
