import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const images = [
  { src: hero1, alt: "Children playing and smiling" },
  { src: hero2, alt: "Community feeding program" },
  { src: hero3, alt: "Arts and crafts activities" },
  { src: hero4, alt: "Community outreach" },
  { src: hero1, alt: "Happy children of Mathare" },
  { src: hero2, alt: "Volunteers serving meals" },
  { src: hero3, alt: "Creative learning sessions" },
  { src: hero4, alt: "Distribution of supplies" },
];

const GalleryImage = ({ src, alt, index, onClick }: { src: string; alt: string; index: number; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative bg-muted"
    >
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end justify-start p-4">
        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {alt}
        </span>
      </div>
    </button>
  );
};

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = useCallback((dir: 1 | -1) => {
    setSelected((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      return next < 0 ? images.length - 1 : next >= images.length ? 0 : next;
    });
  }, []);

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container">
          <ScrollReveal direction="scale">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Gallery</h1>
            <p className="text-primary-foreground/80 text-lg">Moments captured from our work in the community</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="scale">
                <GalleryImage
                  src={img.src}
                  alt={img.alt}
                  index={i}
                  onClick={() => setSelected(i)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors" onClick={() => setSelected(null)}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <p className="absolute bottom-6 text-white/70 text-sm">{images[selected].alt} — {selected + 1} / {images.length}</p>
        </div>
      )}
    </main>
  );
};

export default Gallery;
