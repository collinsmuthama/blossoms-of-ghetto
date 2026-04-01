import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">Moments captured from our work in the community</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={images[selected].src} alt={images[selected].alt} className="max-w-full max-h-[90vh] rounded-xl" />
        </div>
      )}
    </main>
  );
};

export default Gallery;
