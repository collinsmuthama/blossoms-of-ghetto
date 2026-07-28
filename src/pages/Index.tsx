import { Link } from "react-router-dom";
import { Heart, Utensils, BookOpen, Users, HandHeart, ArrowRight, RefreshCw, ShieldCheck, HeartPulse, Briefcase, Megaphone, Handshake, Siren, Lightbulb, Home, Trophy, Tent, Goal, GraduationCap, Sparkles, Shield, Target, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoWatermark from "@/components/PhotoWatermark";
import whoweare from "@/assets/images/g1/whoweare.jpeg";
import Alive from "@/assets/logos/Alive.jpg";
import Istreet from "@/assets/logos/Istreet.jpg";
import moo from "@/assets/logos/moo.jpg";
import serve from "@/assets/logos/Serve.jpg";
import startWithMe from "@/assets/logos/Startswithme.jpg";
import The from "@/assets/logos/The.jpg";
import cheerfull from "@/assets/logos/cheerfull.jpg";
import kids from "@/assets/logos/kids.jpg";
import hero from "@/assets/logos/hero.jpg";
import logo from "@/assets/logos/watermark.png";
import smallStepsLogo from "@/assets/logos/small-steps-project-logo.jpeg";

const programs = [
  { icon: Utensils, title: "Feeding Program", desc: "Regular meals for children and vulnerable families facing food insecurity." },
  { icon: BookOpen, title: "Holiday Programs", desc: "Safe, engaging spaces during school holidays through arts, games, and sports." },
  { icon: Users, title: "Mentorship", desc: "Life skills guidance, personal development, and education support." },
  { icon: HandHeart, title: "Community Outreach", desc: "Food, basic needs, and emergency support for vulnerable areas." },
];

const activities = [
  { icon: RefreshCw, title: "Rehabilitation & Reintegration", desc: "Supporting individuals to rebuild their lives and reintegrate into the community." },
  { icon: ShieldCheck, title: "Education & Protection", desc: "Ensuring access to quality education and child protection services." },
  { icon: HeartPulse, title: "Health", desc: "Health awareness, basic medical support, and wellness programs." },
  { icon: Briefcase, title: "Economic Empowerment", desc: "Skills training and livelihood support for sustainable self-reliance." },
  { icon: Megaphone, title: "Advocacy", desc: "Championing the rights of children and vulnerable communities." },
  { icon: Handshake, title: "Partnership & Networking", desc: "Building alliances with organizations for greater collective impact." },
  { icon: Siren, title: "Emergency Response", desc: "Rapid assistance during crises and disaster situations." },
  { icon: Lightbulb, title: "Life Skills", desc: "Equipping youth with practical skills for everyday decision-making." },
  { icon: Home, title: "Social Welfare", desc: "Providing social support services to families and individuals in need." },
  { icon: Trophy, title: "Sports & Culture", desc: "Promoting talent, teamwork, and cultural expression through sports and arts." },
  { icon: Tent, title: "Kids Camp", desc: "Fun, safe camp experiences that inspire learning and adventure." },
  { icon: Goal, title: "Slums Soccer", desc: "Football programs that unite communities and nurture young talent." },
];

const stats = [
  { value: "500–600", label: "Children Supported" },
  { value: "15,000+", label: "Meals Served" },
  { value: "150–200", label: "Kids Reached Per Event" },
  { value: "2 Days/Week", label: "Street Kid Feeding Program" },
  { value: "3", label: "Full-Time Staff" },
  { value: "10–15", label: "Active Volunteers" },
  { value: "3 Slums", label: "Mathare, Dandora & Surroundings" },
];

const partners = [
  { name: "Istreet Charity", logo: Istreet },
  { name: "Hope Alive Pioneer Organization", logo: Alive },
  { name: "The Kenya Scouts Association", logo: The },
  { name: "Live More Local Charity", logo: moo },
  { name: "Serve The Street", logo: serve },
  { name: "Mind Your Community", logo: startWithMe }, 
  { name: "Cheerfull Hearts", logo: cheerfull },
  { name : "Kids 254", logo: kids },
  { name : 'Hero In Action' , logo: hero },
];

const Index = () => (
  <main>
    <HeroCarousel />

    {/* About Preview */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right">
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
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={whoweare} alt="Children at Blossoms of Ghetto" className="rounded-2xl shadow-xl" width={800} height={533} loading="lazy" />
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-end gap-4">
                <div className="bg-secondary text-secondary-foreground rounded-xl p-6 shadow-lg">
                  <p className="font-display text-2xl font-bold">Since 2024</p>
                  <p className="text-sm">Serving Mathare Community</p>
                </div>
                <PhotoWatermark className="static" sizeClassName="h-14 w-14 opacity-60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Our Programs" subtitle="Meeting both immediate needs and long-term development" light />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120} direction="scale">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 hover:bg-primary-foreground/15 hover:-translate-y-2 transition-all duration-300">
                <p.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Our Impact Approach */}
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-secondary/20 via-background to-primary/10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      <div className="container relative">
        <ScrollReveal>
          <SectionHeading title="Our Impact Approach" subtitle="Rooted in lived experience. Built for lasting change in Mathare." />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Blossoms of Ghetto is a community-based organization working in Mathare, Nairobi. Our approach is guided by the realities of informal settlements. Over time, we have learned that lasting change requires more than short-term support — it requires systems that strengthen <span className="text-primary font-semibold">education</span>, <span className="text-primary font-semibold">livelihoods</span>, and <span className="text-primary font-semibold">protection</span> within the community itself.
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">Our Focus Areas</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Education & Learning Recovery", desc: "Structured learning programs that improve literacy, numeracy, and school retention — so children don't just attend school, they progress with confidence." },
              { icon: Sparkles, title: "Youth Skills & Livelihood Pathways", desc: "Practical skills, apprenticeships, mentorship, and starter support that link young people to real income opportunities and economic stability." },
              { icon: Shield, title: "Child Protection & Girls' Empowerment", desc: "Safe spaces, mentorship, menstrual health support, life skills education, and community-based protection for vulnerable children and girls." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 150} direction="scale">
                <div className="relative h-full bg-card border-2 border-primary/10 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-bold mt-4 mb-3 text-foreground">{f.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal direction="right">
            <div className="h-full bg-card rounded-2xl p-8 shadow-md border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl font-bold text-foreground">Our Approach</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Community involvement and ownership",
                  "Consistency over one-time interventions",
                  "Tracking of progress and outcomes",
                  "Collaboration with schools, volunteers, and local stakeholders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <div className="h-full bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-secondary/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <Eye className="w-7 h-7 text-secondary" />
                  <h3 className="font-display text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-lg italic">
                  To build a Mathare where <span className="text-secondary font-semibold not-italic">children can learn</span>, <span className="text-secondary font-semibold not-italic">youth can earn</span>, and <span className="text-secondary font-semibold not-italic">families can live with dignity and stability.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Activities */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Our Activities" subtitle="Comprehensive programs driving lasting change across the community" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80} direction="scale">
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <a.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">{s.value}</p>
                <p className="text-sm text-secondary-foreground/70 mt-1">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-28 section-pattern">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Testimonials" subtitle="Hear from those whose lives have been touched" />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="right" delay={0}>
            <div className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow duration-300">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "Blossoms of Ghetto gave my children a safe place to learn and play during the holidays. I no longer worry about them being on the streets."
              </p>
              <p className="font-display font-semibold text-foreground">— Mary W., Parent</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={150}>
            <div className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow duration-300">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "The mentorship program changed how I see my future. I now believe I can be someone great, no matter where I come from."
              </p>
              <p className="font-display font-semibold text-foreground">— Kevin O., Youth Mentee</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { id: "wsXcHNiP8hA", title: "Our Impact Story" },
            { id: "okFTEynO_e0", title: "Life in the Community" },
            { id: "fj2aLvTvaf0", title: "Blossoms of Ghetto Shorts" },
          ].map((video, i) => (
            <ScrollReveal key={video.id} delay={i * 150} direction="scale">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">{video.title}</p>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={500}>
          <div className="text-center mt-8">
            <a
              href="https://youtube.com/@blossomsofghetto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors duration-300"
            >
              Visit our YouTube Channel <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Partners */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <ScrollReveal>
          <SectionHeading title="Our Partner" subtitle="Working together to create lasting change" />
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-xl border">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              <div className="flex flex-col items-center text-center md:sticky md:top-28">
                <div className="bg-white rounded-xl p-6 shadow-sm border mb-4 w-full">
                  <img
                    src={smallStepsLogo.url}
                    alt="Small Steps Project logo"
                    className="w-full max-w-[220px] mx-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="font-display font-semibold text-foreground">Small Steps Project</p>
                <p className="text-sm text-muted-foreground">UK-based charity</p>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Supporting vulnerable children in Mathare
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Small Steps Project is a UK-based charity dedicated to supporting children living in landfill communities and other vulnerable environments around the world. Through education, nutrition, healthcare, child protection, and essential support, the organization helps children build safer and brighter futures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Blossoms of Ghetto is proud to partner with Small Steps Project to support vulnerable children in Mathare, including those living in communities around the Dandora landfill. Together, we are working to improve children's access to nutritious meals, education, hygiene, healthcare, and opportunities that enable them to learn, grow, and reach their full potential. This partnership reflects our shared belief that every child deserves a safe and hopeful future.
                </p>

                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Areas of Support</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Nutrition and feeding programmes",
                    "Education and learning support",
                    "School shoes and essential items",
                    "Hygiene and child wellbeing",
                    "Safe community spaces for children",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
    <div className="flex justify-center items-center">
      <div className="flex justify-center mb-8">
        <img
          src={logo}
          alt="Blossoms of Ghetto Logo"
          className="w-40 h-40 object-contain drop-shadow-md"
        />
      </div>
      <div className="container max-w-2xl">
        <ScrollReveal direction="scale">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Change a Life Today</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Every contribution, big or small, helps us continue making a difference in the lives of children and families who need it most.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg px-10 hover:scale-105 transition-transform">
            <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
          </Button>
        </ScrollReveal>
      </div>
      </div>
    </section>
  </main>
);

export default Index;
