import { useState } from "react";
import { Heart, CreditCard, Phone, Building, ExternalLink, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const amounts = [500, 1000, 2500, 5000, 10000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [mpesaOpen, setMpesaOpen] = useState(false);
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [mpesaLoading, setMpesaLoading] = useState(false);
  const [mpesaSent, setMpesaSent] = useState(false);
  const { toast } = useToast();

  const donationAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleDonate = () => {
    if (!donationAmount || donationAmount <= 0) {
      toast({ title: "Please select or enter an amount", variant: "destructive" });
      return;
    }
    setMpesaOpen(true);
    setMpesaSent(false);
    setMpesaPhone("");
  };

  const handleMpesaSend = () => {
    if (!mpesaPhone || mpesaPhone.length < 10) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    setMpesaLoading(true);
    // Simulate STK push
    setTimeout(() => {
      setMpesaLoading(false);
      setMpesaSent(true);
    }, 2000);
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

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleDonate} size="lg" className="flex-1 bg-[#4CAF50] text-white hover:bg-[#43A047] gap-2 text-lg py-6">
                <Smartphone className="w-5 h-5" /> Pay with M-Pesa
              </Button>
              <Button
                asChild
                size="lg"
                className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg py-6"
              >
                <a href="https://gofundme.com" target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5" /> GoFundMe
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Payment methods info */}
          <div className="mt-16">
            <SectionHeading title="How to Donate" subtitle="Choose the method that works best for you" />
            <div className="grid md:grid-cols-2 gap-6">
              {/* M-Pesa Card */}
              <div className="bg-card rounded-xl p-8 border text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">M-Pesa</h3>
                <p className="text-muted-foreground text-sm mb-4">Pay instantly via M-Pesa STK push or use the details below:</p>
                <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3">
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Paybill No.</span>
                    <span className="font-bold text-foreground text-xl block">522533</span>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Account No.</span>
                    <span className="font-bold text-foreground text-xl block">7877206</span>
                  </div>
                </div>
              </div>

              {/* Bank Transfer Card */}
              <div className="bg-card rounded-xl p-8 border text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">Bank Transfer</h3>
                <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3">
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Bank</span>
                    <span className="font-semibold text-foreground block">Kenya Commercial Bank (KCB)</span>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Account Name</span>
                    <span className="font-semibold text-foreground block">Blossoms of Ghetto</span>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Account No.</span>
                    <span className="font-bold text-foreground text-xl block">1330069609</span>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide block">Swift Code</span>
                    <span className="font-bold text-foreground text-lg block">KCBLKENX</span>
                  </div>
                </div>
              </div>

              {/* GoFundMe Card */}
              <div className="bg-card rounded-xl p-8 border text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">GoFundMe</h3>
                <p className="text-muted-foreground text-sm">Donate through our GoFundMe campaign page with card or PayPal.</p>
              </div>

              {/* In-Kind Card */}
              <div className="bg-card rounded-xl p-8 border text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">In-Kind Donations</h3>
                <p className="text-muted-foreground text-sm">Food, books, supplies — we welcome all support.</p>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* M-Pesa STK Push Dialog */}
      <Dialog open={mpesaOpen} onOpenChange={setMpesaOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Smartphone className="w-6 h-6 text-[#4CAF50]" />
              M-Pesa Payment
            </DialogTitle>
            <DialogDescription>
              {!mpesaSent
                ? `Pay KES ${donationAmount?.toLocaleString()} via M-Pesa Lipa Na M-Pesa`
                : "STK Push sent to your phone"}
            </DialogDescription>
          </DialogHeader>

          {!mpesaSent ? (
            <div className="space-y-4 pt-2">
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Amount</p>
                <p className="text-3xl font-bold text-foreground">KES {donationAmount?.toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">M-Pesa Phone Number</label>
                <Input
                  type="tel"
                  placeholder="e.g. 0712345678"
                  value={mpesaPhone}
                  onChange={(e) => setMpesaPhone(e.target.value)}
                  className="text-lg py-5"
                />
              </div>
              <Button
                onClick={handleMpesaSend}
                disabled={mpesaLoading}
                className="w-full bg-[#4CAF50] text-white hover:bg-[#43A047] py-5 text-lg"
              >
                {mpesaLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending STK Push...
                  </span>
                ) : (
                  "Send Payment Request"
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                You will receive an M-Pesa prompt on your phone to complete the payment.
              </p>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Check Your Phone</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  An M-Pesa STK push has been sent to <strong>{mpesaPhone}</strong>.
                  Enter your M-Pesa PIN to complete the donation.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => { setMpesaOpen(false); toast({ title: "Thank you for your generosity! 🌸", description: `Your donation of KES ${donationAmount?.toLocaleString()} will make a real difference.` }); }}
                className="mt-2"
              >
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Donate;
