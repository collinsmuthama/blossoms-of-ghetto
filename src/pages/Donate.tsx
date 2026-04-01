import { useState } from "react";
import { Heart, CreditCard, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const amounts = [500, 1000, 2500, 5000, 10000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const handleDonate = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    toast({
      title: "Thank you for your generosity! 🌸",
      description: `Your donation of KES ${amount?.toLocaleString()} will make a real difference.`,
    });
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Make a Donation</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Every contribution helps us continue changing lives in Mathare
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 section-pattern">
        <div className="container max-w-3xl">
          <SectionHeading title="Choose an Amount" subtitle="All amounts are in Kenyan Shillings (KES)" />

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setSelectedAmount(a); setCustomAmount(""); }}
                  className={`rounded-xl py-3 px-4 font-semibold text-sm transition-all border ${
                    selectedAmount === a && !customAmount
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  KES {a.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <Input
                type="number"
                placeholder="Or enter a custom amount (KES)"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="bg-background text-lg py-6"
              />
            </div>

            <Button onClick={handleDonate} size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg py-6">
              <Heart className="w-5 h-5" /> Donate Now
            </Button>
          </div>

          {/* Payment methods info */}
          <div className="mt-16">
            <SectionHeading title="How to Donate" subtitle="Choose the method that works best for you" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Phone, title: "M-Pesa", desc: "Send to Paybill/Till number. Contact us for details." },
                { icon: CreditCard, title: "Bank Transfer", desc: "Direct bank transfer. Reach out for account details." },
                { icon: Building, title: "In-Kind Donations", desc: "Food, books, supplies — we welcome all support." },
              ].map((m) => (
                <div key={m.title} className="bg-card rounded-xl p-8 border text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <m.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
