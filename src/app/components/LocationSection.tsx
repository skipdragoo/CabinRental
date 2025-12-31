import { Card } from "./ui/card";
import { Clock } from "lucide-react";

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
          {/* Google Maps Embed */}
          <Card className="p-4 shadow-lg overflow-hidden">
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.7377524618482!2d-94.35441791218942!3d34.76873630968507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ2JzA3LjQiTiA5NMKwMjAnNTguNCJX!5e1!3m2!1sen!2sus!4v1766522483241!5m2!1sen!2sus"
                className="w-full aspect-square border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabin Location Map"
              ></iframe>
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
            Nestled in the scenic Ouachita Mountains region, our cabin offers the perfect blend of tranquility and convenience. 
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
