import { Link } from "react-router-dom";
import { Heart, Utensils, BookOpen, Users, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import hero3 from "@/assets/hero-3.jpg";

const programs = [
  { icon: Utensils, title: "Feeding Program", desc: "Regular meals for children and vulnerable families facing food insecurity." },
  { icon: BookOpen, title: "Holiday Programs", desc: "Safe, engaging spaces during school holidays through arts, games, and sports." },
  { icon: Users, title: "Mentorship", desc: "Life skills guidance, personal development, and education support." },
  { icon: HandHeart, title: "Community Outreach", desc: "Food, basic needs, and emergency support for vulnerable areas." },
];

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "1,000+", label: "Meals Served Monthly" },
  { value: "50+", label: "Volunteers" },
  { value: "June 2024", label: "Founded" },
];

const Index = () => (
  <main>
    <HeroCarousel />

    {/* About Preview */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Who We Are" subtitle="" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Blossoms of Ghetto is a community-based organization founded in June 2024, based in Mathare, Nairobi. Built on lived experience by founder Peter Kimani, we create safe, supportive, and empowering spaces for children and families living in vulnerable conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that every child, regardless of their background, deserves to feel safe, to be seen, and to have a chance to grow.
            </p>
            <Button asChild variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">Read Our Story <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="relative">
            <img src={hero3} alt="Children at Blossoms of Ghetto" className="rounded-2xl shadow-xl" width={800} height={533} loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-lg hidden md:block">
              <p className="font-display text-2xl font-bold">Since 2024</p>
              <p className="text-sm">Serving Mathare Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <SectionHeading title="Our Programs" subtitle="Meeting both immediate needs and long-term development" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p) => (
            <div key={p.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 hover:bg-primary-foreground/15 transition-colors">
              <p.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">{s.value}</p>
              <p className="text-sm text-secondary-foreground/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container">
        <SectionHeading title="Testimonials" subtitle="Hear from those whose lives have been touched" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <p className="text-muted-foreground italic leading-relaxed mb-6">
              "Blossoms of Ghetto gave my children a safe place to learn and play during the holidays. I no longer worry about them being on the streets."
            </p>
            <p className="font-display font-semibold text-foreground">— Mary W., Parent</p>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <p className="text-muted-foreground italic leading-relaxed mb-6">
              "The mentorship program changed how I see my future. I now believe I can be someone great, no matter where I come from."
            </p>
            <p className="font-display font-semibold text-foreground">— Kevin O., Youth Mentee</p>
          </div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Blossoms of Ghetto Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Watch our story and see the impact firsthand</p>
        </div>
      </div>
    </section>

    {/* Partners */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionHeading title="Our Partners" subtitle="We are grateful for the support of friends and organizations" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-3xl mx-auto">
          {["Community Partners", "Local Churches", "International Donors", "Volunteer Networks"].map((p) => (
            <div key={p} className="bg-background rounded-xl p-6 text-center shadow-sm border">
              <p className="font-display font-semibold text-foreground text-sm">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Change a Life Today</h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Every contribution, big or small, helps us continue making a difference in the lives of children and families who need it most.
        </p>
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg px-10">
          <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Index;
