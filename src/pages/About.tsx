import { Heart, Eye, Target, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PhotoWatermark from "@/components/PhotoWatermark";
import aboutUs from "@/assets/images/g1/about.jpeg";
import us from "@/assets/images/g1/us.jpeg";

const values = [
  { icon: Heart, title: "Empathy", desc: "Leading with understanding rooted in lived experience" },
  { icon: Users, title: "Trust", desc: "Building genuine relationships within the community" },
  { icon: Target, title: "Safe Spaces", desc: "Creating inclusive environments for growth" },
  { icon: Eye, title: "Long-term Impact", desc: "Focusing on both immediate relief and lasting change" },
];

const About = () => (
  <main className="pt-32">
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={aboutUs} alt="Blossoms of Ghetto children" className="absolute inset-0 w-full h-full object-cover" />
      <PhotoWatermark
        className="left-1/2 top-1/2 bottom-auto z-20 -translate-x-1/2 -translate-y-1/2"
        sizeClassName="h-24 w-24 opacity-25"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Built on lived experience. Driven by love. Rooted in community.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container max-w-4xl">
        <SectionHeading title="Our Story" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Blossoms of Ghetto is a community-based organization founded in June 2024 and based in Mathare, Nairobi, Kenya. It was started with a simple but powerful vision: to create a safe, supportive, and empowering space for children and families living in vulnerable conditions.</p>
            <p>What makes us unique is that we are built on lived experience. Our founder, Peter Kimani, grew up facing the realities of street life and understands firsthand the challenges many children in Mathare go through—hunger, lack of safe spaces, limited access to education, and exposure to difficult environments.</p>
          </div>
          <div className="relative">
            <img src={us} alt="Community outreach" className="rounded-2xl shadow-xl" loading="lazy" />
            <PhotoWatermark className="bottom-3 left-3" sizeClassName="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 rounded-xl p-10">
            <Eye className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">To build a future where children from informal settlements like Mathare grow up with hope, opportunity, and the support they need to thrive.</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-10">
            <Target className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">To support and empower vulnerable children and communities through food programs, safe spaces, mentorship, and creative development.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
