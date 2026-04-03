import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/images/g1/school.jpeg";
import hero2 from "@/assets/images/g1/hero2.jpeg";
import hero8    from "@/assets/images/g1/hero8.jpeg";
import hero4 from "@/assets/images/g1/hero3.jpeg";

const slides = [
  { image: hero1, title: "Restoring Hope in Mathare", subtitle: "Empowering children through love, food, and education" },
  { image: hero2, title: "Feeding Communities", subtitle: "No child should go to bed hungry" },
  { image: hero8, title: "Environmental Conservation", subtitle: "Protect today, preserve tomorrow 🌱" },
  { image: hero4, title: "Community Outreach", subtitle: "Reaching those who need it most" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1)' : 'scale(1.05)',
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            style={{ imageRendering: 'auto', filter: 'brightness(0.95) contrast(1.05) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <h1
              key={`title-${current}`}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              style={{ animation: 'fade-in 0.8s ease-out forwards' }}
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-lg md:text-xl text-white/85 mb-8 font-body"
              style={{ animation: 'fade-in 0.8s 0.2s ease-out forwards', opacity: 0 }}
            >
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base px-8">
                <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-base px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full p-3 text-white transition-all hover:scale-110">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full p-3 text-white transition-all hover:scale-110">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
