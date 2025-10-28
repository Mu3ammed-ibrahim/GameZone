import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/Components/ui/button";
import CallOfDuty from "@/assets/Games/Call Of Duty.jpg";
import Eldenring from "@/assets/Games/Eldenring.webp";
import Fifa25 from "@/assets/Games/Fifa25.webp";
import GodOfWar from "@/assets/Games/God of War.jpg";

gsap.registerPlugin(ScrollTrigger);

const TopSelling = () => {
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

  const games = [
    {
      title: "Call of Duty",
      description:
        "Experience the ultimate first-person shooter with intense multiplayer action and gripping storylines.",
      price: "$69.99",
      rating: "4.8",
      image: CallOfDuty,
    },
    {
      title: "Elden Ring",
      description:
        "Embark on an epic journey through a vast fantasy world filled with danger and discovery.",
      price: "$59.99",
      rating: "4.9",
      image: Eldenring,
    },
    {
      title: "FIFA 25",
      description:
        "The world's most popular football game returns with enhanced gameplay and realistic graphics.",
      price: "$69.99",
      rating: "4.6",
      image: Fifa25,
    },
    {
      title: "God of War",
      description:
        "Join Kratos on a breathtaking adventure through Norse mythology in this action masterpiece.",
      price: "$49.99",
      rating: "4.9",
      image: GodOfWar,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-gradient-neon mb-4">
            Top Selling Games
          </h2>
          <p className="text-lg text-gradient-subtle max-w-2xl mx-auto">
            Discover our most popular games loved by millions of players
            worldwide
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-slate-800/50 border-2 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden group rounded-xl shadow-lg"
            >
              {/* Game Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-sm font-semibold">
                    {game.rating}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gradient-gaming mb-3">
                  {game.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-4">
                  {game.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center px-6 pb-6">
                <span className="text-2xl font-bold text-gradient-fire">
                  {game.price}
                </span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 border-0"
          >
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
