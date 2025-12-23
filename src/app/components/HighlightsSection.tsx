import { Users, Bed, Bath, Wifi, ChefHat, Car, PawPrint, KeyRound, Flame, Waves, TreePine, Wind } from "lucide-react";

const highlights = [
  { icon: Users, label: "Sleeps 6", description: "Perfect for families or groups" },
  { icon: Bed, label: "3 Beds", description: "1 King, 2 Queens" },
  { icon: Bath, label: "2 Baths", description: "Full bathrooms" },
  { icon: Wifi, label: "High-Speed WiFi", description: "Remote work ready" },
  { icon: ChefHat, label: "Full Kitchen", description: "Fully equipped" },
  { icon: Car, label: "Free Parking", description: "2 vehicles" },
  { icon: PawPrint, label: "Pet Friendly", description: "Dogs welcome" },
  { icon: KeyRound, label: "Self Check-In", description: "Keypad entry" },
  { icon: Flame, label: "Wood Fireplace", description: "Cozy ambiance" },
  { icon: Waves, label: "Hot Tub", description: "Private 6-person spa" },
  { icon: TreePine, label: "Lake Access", description: "5-minute walk" },
  { icon: Wind, label: "Large Deck", description: "Mountain views" }
];

export function HighlightsSection() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Everything You Need
          </h2>
          <p className="mt-4 text-muted-foreground">
            Thoughtfully equipped for a seamless getaway
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 
                  className="mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
