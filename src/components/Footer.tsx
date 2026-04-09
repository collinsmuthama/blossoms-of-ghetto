import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logos/watermark.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61555030305092", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/blossomsofghetto_254?igsh=MXBocnd1czJpYXc0dA==", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/BlossomsG26955", label: "Twitter / X" },
  { icon: Youtube, href: "https://youtube.com/@blossomsofghetto", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/blossoms-of-ghetto-96367b305", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://vm.tiktok.com/ZS98qdAcwVWK9-q8alb/", label: "TikTok" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
            Restoring hope, dignity, and opportunity for children and families in Mathare, Nairobi.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
              { label: "Donate", path: "/donate" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Mathare, Nairobi, Kenya</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@blossomsofghetto.org</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +254 0705 287 804</div>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Support Us</h4>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Your donation can change a life. Every shilling counts.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
          >
            <Heart className="w-4 h-4" /> Donate Now
          </Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Blossoms of Ghetto. Made with <Heart className="w-3 h-3 fill-current" /> in Mathare.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
