import { useCustomerSayAnimations } from "@/hooks/useCustomerSayAnimations";

const CustomersSay = () => {
  const { sectionRef, headingRef, subheadingRef, cardsRef } =
    useCustomerSayAnimations();

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Pro Gamer",
      avatar: "AC",
      rating: 5,
      comment:
        "GameZone has completely transformed my gaming experience! The selection is incredible and the platform is so smooth. Best gaming store I've ever used.",
      game: "Call of Duty",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Streamer",
      avatar: "SM",
      rating: 5,
      comment:
        "As a content creator, I need reliable access to the latest games. GameZone delivers every time with lightning-fast downloads and amazing customer support!",
      game: "Elden Ring",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Casual Player",
      avatar: "MJ",
      rating: 5,
      comment:
        "I love how easy it is to find and purchase games here. The recommendations are spot-on, and the deals are fantastic. GameZone is my go-to platform!",
      game: "FIFA 25",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "RPG Enthusiast",
      avatar: "ER",
      rating: 5,
      comment:
        "The gaming community here is amazing! I've discovered so many hidden gems through their expert recommendations. GameZone truly understands gamers.",
      game: "God of War",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Competitive Player",
      avatar: "DK",
      rating: 5,
      comment:
        "Fast, reliable, and packed with features. GameZone's platform is built for serious gamers. The performance is unmatched!",
      game: "Valorant",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Game Collector",
      avatar: "LW",
      rating: 5,
      comment:
        "I've been collecting games for years, and GameZone has the best catalog. The exclusive deals and early access are incredible!",
      game: "The Last of Us",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-gradient-neon mb-4"
          >
            What Gamers Say
          </h2>
          <p
            ref={subheadingRef}
            className="text-base sm:text-lg text-gradient-subtle max-w-2xl mx-auto px-4"
          >
            Join thousands of satisfied gamers who trust GameZone for their
            gaming needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 overflow-hidden">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      >
                        {testimonial.avatar}
                      </div>
                      {/* Name and Role */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-3">
                    <svg
                      className="w-8 h-8 text-purple-500/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                    {testimonial.comment}
                  </p>

                  {/* Favorite Game Tag */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/50 rounded-full border border-slate-700">
                      <svg
                        className="w-4 h-4 text-purple-400"
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
                      <span className="text-xs text-slate-400">
                        Playing: {testimonial.game}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4 text-sm sm:text-base">
            Join our community of{" "}
            <span className="text-gradient-gaming font-bold">100,000+</span>{" "}
            happy gamers
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full">
              <span className="text-sm text-slate-300">⭐ 4.9/5 Rating</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full">
              <span className="text-sm text-slate-300">🎮 10M+ Games Sold</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full">
              <span className="text-sm text-slate-300">🏆 Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
