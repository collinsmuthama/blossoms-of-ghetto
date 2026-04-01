import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌸</span>
            <span className="font-display text-xl font-bold">Blossoms of Ghetto</span>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Restoring hope, dignity, and opportunity for children and families in Mathare, Nairobi.
          </p>
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
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +254 700 000 000</div>
          </div>
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
