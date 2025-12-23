import { Card } from "./ui/card";
import { DollarSign, Shield, Home } from "lucide-react";

export function RatesPoliciesSection() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Rates & Policies
          </h2>
          <p className="mt-4 text-muted-foreground">
            Clear, transparent, and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Pricing */}
          <Card className="p-6 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 
              className="mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Pricing
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Starting at <strong className="text-foreground">$250/night</strong></li>
              <li>Cleaning fee: $125</li>
              <li>2-night minimum stay</li>
              <li>Maximum 6 guests</li>
              <li>Additional guest fee: $25/night (after 4 guests)</li>
            </ul>
          </Card>

          {/* Cancellation */}
          <Card className="p-6 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 
              className="mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Cancellation
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Free cancellation up to 7 days before check-in</li>
              <li>50% refund for cancellations 3-7 days prior</li>
              <li>No refund within 3 days of check-in</li>
              <li>Full refund for host cancellations</li>
            </ul>
          </Card>

          {/* House Rules */}
          <Card className="p-6 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 
              className="mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              House Rules
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Dogs welcome (max 2, fee applies)</li>
              <li>✗ No smoking indoors</li>
              <li>✗ No parties or events</li>
              <li>✓ Quiet hours: 10 PM - 8 AM</li>
              <li>✓ Hot tub rules provided upon booking</li>
            </ul>
          </Card>
        </div>

        {/* Additional Policies */}
        <Card className="p-8 shadow-lg">
          <h3 
            className="mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Good to Know
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="mb-2">What's Included</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Fresh linens and towels</li>
                <li>• Starter supplies (toilet paper, paper towels, etc.)</li>
                <li>• Basic cooking essentials (salt, pepper, oil)</li>
                <li>• Complimentary firewood (1 bundle)</li>
                <li>• Access to lake dock and kayaks</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2">What to Bring</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Food and beverages</li>
                <li>• Personal toiletries</li>
                <li>• Beach towels for lake/hot tub</li>
                <li>• Any special dietary items</li>
                <li>• Your favorite coffee or tea</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
