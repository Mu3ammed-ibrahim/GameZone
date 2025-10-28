// src/Sections/Features.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import GamesImage from "@/assets/Gaming Accessories.png";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
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

  const features = [
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
  ];

  return (
    //     <section className="relative py-24 bg-slate-900">
    //       <div className="max-w-7xl mx-auto px-6">
    //         <div ref={featuresRef} className="grid md:grid-cols-2 gap-8 items-start">
    //           {/* Phone/Game Image */}
    //           <div className="sticky top-32">
    //             <div className="relative">
    //               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-red-600/20 blur-3xl" />
    //               <img
    //                 src={GamesImage}
    //                 alt="Gaming"
    //                 className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
    //               />
    //             </div>
    //           </div>

    //           {/* Feature Cards */}
    //           <div className="space-y-6">
    //             {features.map((feature, index) => (
    //               <Card
    //                 key={index}
    //                 className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/50"
    //               >
    //                 <CardHeader>
    //                   <CardTitle className="text-2xl text-gradient-gaming">
    //                     {feature.title}
    //                   </CardTitle>
    //                 </CardHeader>
    //                 <CardContent>
    //                   <CardDescription className="text-base leading-relaxed text-gradient-subtle">
    //                     {feature.description}
    //                   </CardDescription>
    //                 </CardContent>
    //               </Card>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   );
    // };

    // export default Features;
    <section
      ref={sectionRef}
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-poppins mb-4 text-gradient-neon"
          >
            What We Offer
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg text-gradient-subtle max-w-2xl mx-auto"
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
                  <CardTitle className="card-title text-2xl text-gradient-gaming">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="card-description text-base leading-relaxed text-gradient-subtle">
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
};

export default Features;
