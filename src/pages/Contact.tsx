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
                    <p className="text-muted-foreground text-sm">+254 0705 287 804</p>
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

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-5xl">
          <SectionHeading title="Find Us" subtitle="Visit us in Mathare, Nairobi" />
          <div className="rounded-xl overflow-hidden shadow-md border h-[400px] md:h-[500px]">
            <iframe
              title="Blossoms of Ghetto Location - Mathare, Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.17642982088!2d36.8550!3d-1.2600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17338e17e381%3A0x3e53b3c3c1b3e8!2sMathare%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
