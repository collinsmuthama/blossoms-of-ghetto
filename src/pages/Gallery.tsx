import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoWatermark from "@/components/PhotoWatermark";
import imag1 from "@/assets/images/g1/11.jpeg";
import imag2 from "@/assets/images/g1/21.jpeg";
import imag3 from "@/assets/images/g1/31.jpeg";
import imag4 from "@/assets/images/g1/41.jpeg";
import imag5 from "@/assets/images/g1/51.jpeg";
import imag6 from "@/assets/images/g1/61.jpeg";
import imag7 from "@/assets/images/g1/71.jpeg";
import imag9 from "@/assets/images/g1/91.jpeg";
import imag10 from "@/assets/images/g1/101.jpeg"; 
import imag11 from "@/assets/images/g1/111.jpeg";
import imag12 from "@/assets/images/g1/121.jpeg";     
import imag13 from "@/assets/images/g1/131.jpeg";
import imag14 from "@/assets/images/g1/141.jpeg";
import imag15 from "@/assets/images/g1/151.jpeg";
import imag16 from "@/assets/images/g1/161.jpeg";
import imag17 from "@/assets/images/g1/171.jpeg";
import imag18 from "@/assets/images/g1/181.jpeg";
import imag19 from "@/assets/images/g1/191.jpeg";
import imag20 from "@/assets/images/g1/201.jpeg";     
import imag21 from "@/assets/images/g1/211.jpeg";
import imag22 from "@/assets/images/g1/221.jpeg";
import imag23 from "@/assets/images/g1/231.jpeg";
import imag24 from "@/assets/images/g1/241.jpeg";
import imag25 from "@/assets/images/g1/251.jpeg";
import imag26 from "@/assets/images/g1/261.jpeg";
import imag27 from "@/assets/images/g1/271.jpeg";
import imag28 from "@/assets/images/g1/281.jpeg";
import imag29 from "@/assets/images/g1/291.jpeg";
import imag30 from "@/assets/images/g1/301.jpeg"; 
import imag31 from "@/assets/images/g1/311.jpeg";
import imag32 from "@/assets/images/g1/321.jpeg";
import imag33 from "@/assets/images/g1/331.jpeg";
import imag34 from "@/assets/images/g1/341.jpeg";
import imag35 from "@/assets/images/g1/351.jpeg";     
import imag37 from "@/assets/images/g1/371.jpeg";
import imag38 from "@/assets/images/g1/381.jpeg";   
import imag39 from "@/assets/images/g1/391.jpeg";
import imag40 from "@/assets/images/g1/401.jpeg";
import imag41 from "@/assets/images/g1/411.jpeg";
import imag42 from "@/assets/images/g1/421.jpeg";
import imag43 from "@/assets/images/g1/431.jpeg";
import imag44 from "@/assets/images/g1/441.jpeg";
import imag45 from "@/assets/images/g1/451.jpeg";
import imag46 from "@/assets/images/g1/461.jpeg";
import imag47 from "@/assets/images/g1/471.jpeg";
import imag49 from "@/assets/images/g1/491.jpeg"; 
import imag50 from "@/assets/images/g1/501.jpeg"; 
import imag51 from "@/assets/images/g1/511.jpeg";
import imag52 from "@/assets/images/g1/521.jpeg";
import imag53 from "@/assets/images/g1/531.jpeg";
import imag54 from "@/assets/images/g1/541.jpeg";   


const images = [
  { src: imag1, alt: "Children playing and smiling" },
  { src: imag2, alt: "Community feeding program" },
  { src: imag3, alt: "Arts and crafts activities" },
  { src: imag4, alt: "Community outreach" },
  { src: imag5, alt: "Happy children of Mathare" },
  { src: imag6, alt: "Volunteers serving meals" },
  { src: imag7, alt: "Creative learning sessions" },
  { src: imag9, alt: "Children enjoying meals" },
  { src: imag10, alt: "Mentorship and guidance" },
  { src: imag11, alt: "Community gatherings" },   
  { src: imag12, alt: "Children in safe spaces" },  
  { src: imag13, alt: "Educational activities" },
  { src: imag14, alt: "Volunteers engaging with children" },
  { src: imag15, alt: "Community celebrations" }, 
  { src: imag16, alt: "Children learning and growing" },  
  { src: imag17, alt: "Feeding program in action" },
  { src: imag18, alt: "Creative workshops" },
  { src: imag19, alt: "Community support and care" },
  { src: imag20, alt: "Children's smiles and joy" },
  { src: imag21, alt: "Volunteers making a difference" },
  { src: imag22, alt: "Safe spaces for children" },
  { src: imag23, alt: "Educational opportunities" },
  { src: imag24, alt: "Community empowerment" },
  { src: imag25, alt: "Children's laughter and happiness" },
  { src: imag26, alt: "Volunteers' dedication and love" },
  { src: imag27, alt: "Supportive community environment" },
  { src: imag28, alt: "Children thriving in safe spaces" },
  { src: imag29, alt: "Educational programs in action" },
  { src: imag30,alt: "Community coming together" },
  { src: imag31, alt: "Children's creativity and expression" },
  { src: imag32, alt: "Volunteers' impact on lives" },
  { src: imag33, alt: "Safe and nurturing environments" },
  { src: imag34, alt: "Educational growth and development" },
  { src: imag35, alt: "Community resilience and strength" },
  { src: imag37, alt: "Volunteers' compassion and care" },
  { src: imag38, alt: "Supportive community networks" },
  { src: imag39, alt: "Children's joy and hope" },
  { src: imag40, alt: "Educational opportunities for all" },
  { src: imag41, alt: "Community solidarity and unity" },
  { src: imag42, alt: "Children's growth and potential" },
  { src: imag43, alt: "Volunteers' commitment to change" },
  { src: imag44, alt: "Safe spaces fostering development" },
  { src: imag45, alt: "Educational programs empowering youth" },
  { src: imag46, alt: "Community support and collaboration" },
  { src: imag47, alt: "Children's resilience and strength" },
  { src: imag49, alt: "Supportive community relationships"  },
  { src: imag50, alt: "Children's happiness and well-being" },
  { src: imag51, alt: "Educational opportunities changing lives" },
  { src: imag52, alt: "Community empowerment and growth" },
  { src: imag53, alt: "Children's smiles and bright futures" },
  { src: imag54, alt: "Volunteers' impact on the community" },  
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
      <PhotoWatermark />
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
    <main className="pt-32">
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
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
            />
            <PhotoWatermark sizeClassName="h-9 w-9 opacity-80" className="bottom-3 left-3" />
          </div>
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
