import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-20 md:py-28 section-pattern">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get in Touch" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Mathare, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@blossomsofghetto.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+254 700 000 000</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-sm border space-y-6">
              <Input placeholder="Your Name" required className="bg-background" />
              <Input type="email" placeholder="Your Email" required className="bg-background" />
              <Input placeholder="Subject" required className="bg-background" />
              <Textarea placeholder="Your Message" required rows={5} className="bg-background" />
              <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
