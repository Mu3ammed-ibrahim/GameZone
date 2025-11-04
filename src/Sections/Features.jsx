import { useMemo, memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import GamesImage from "@/assets/Gaming Accessories.png";
import { useFeatureAnimations } from "@/hooks/useFeatureAnimations";

const Features = memo(() => {
  const { sectionRef, headingRef, subheadingRef, imageRef, cardsRef } =
    useFeatureAnimations();

  // Memoize features array to prevent unnecessary re-renders
  const features = useMemo(
    () => [
      {
        title: "Immersive Gaming Experience",
        description:
          "Dive into worlds of adventure with cutting-edge graphics and seamless gameplay. Our platform brings you the most engaging gaming content.",
      },
      {
        title: "Advanced Technology",
        description:
          "Experience next-generation gaming powered by the latest hardware and software innovations designed to elevate your digital experience.",
      },
      {
        title: "Expert Recommendations",
        description:
          "Get personalized game suggestions from our expert team. We curate the best titles to match your gaming preferences and style.",
      },
    ],
    []
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-poppins font-bold mb-4 text-gradient-neon"
          >
            What We Offer
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg font-roboto text-gradient-subtle max-w-2xl mx-auto leading-relaxed"
          >
            Discover the amazing features that make our gaming platform stand
            out from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image - Sticky */}
          <div ref={imageRef} className="sticky top-32">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-red-600/20 blur-3xl" />
              <img
                src={GamesImage}
                alt="Gaming"
                className="relative z-10 w-full h-96 max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Feature Cards - Scroll animated */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/50"
              >
                <CardHeader>
                  <CardTitle className="card-title text-2xl font-poppins font-semibold text-gradient-gaming">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="card-description text-base font-roboto leading-relaxed text-gradient-subtle">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;
