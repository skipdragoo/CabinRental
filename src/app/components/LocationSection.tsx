import { Card } from "./ui/card";
import { MapPin, Clock } from "lucide-react";

const nearbyAttractions = [
  { name: "Downtown [CITY]", time: "15 minutes", icon: "🏘️" },
  { name: "Hiking Trails", time: "5 minutes", icon: "🥾" },
  { name: "Lake [NAME]", time: "5 minutes walk", icon: "🚣" },
  { name: "Ski Resort", time: "25 minutes", icon: "⛷️" },
  { name: "Local Restaurants", time: "10 minutes", icon: "🍴" },
  { name: "Grocery Store", time: "12 minutes", icon: "🛒" }
];

export function LocationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            The Perfect Location
          </h2>
          <p className="mt-4 text-muted-foreground">
            Secluded enough to unwind, close enough to explore
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="p-8 shadow-lg">
            <div className="aspect-square rounded-xl bg-muted/50 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">
                  Interactive Map
                  <br />
                  <span className="text-xs">(Embed Google Maps or Mapbox here)</span>
                </p>
              </div>
            </div>
          </Card>

          {/* Nearby Attractions */}
          <div>
            <Card className="p-8 shadow-lg h-full">
              <h3 
                className="mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Minutes To...
              </h3>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{attraction.icon}</span>
                      <span>{attraction.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Area Description */}
        <Card className="mt-8 p-8 shadow-lg">
          <h3 
            className="mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            About the Area
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Nestled in the scenic [AREA] region, our cabin offers the perfect blend of tranquility and convenience. 
            Wake up to birdsong and mountain views, spend your days exploring pristine hiking trails, kayaking on 
            the crystal-clear lake, or simply relaxing on the deck with a good book. The charming downtown area is 
            just a short drive away, offering local eateries, craft breweries, and artisan shops. In winter, world-class 
            skiing is at your doorstep. Whether you're seeking adventure or a peaceful retreat, this location delivers 
            the quintessential mountain getaway experience.
          </p>
        </Card>
      </div>
    </section>
  );
}
