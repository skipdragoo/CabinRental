import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { CalendarIcon } from "lucide-react";

export function BookingSection() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <section id="booking" className="py-20 px-6 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Book Your Stay
          </h2>
          <p className="mt-4 text-muted-foreground">
            Available year-round · We confirm within 4 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card className="p-8 shadow-lg">
            <h3 
              className="mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Select Your Dates
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Check-in</label>
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-input-background">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">
                    {checkIn ? checkIn.toLocaleDateString() : "Select date"}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Check-out</label>
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-input-background">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">
                    {checkOut ? checkOut.toLocaleDateString() : "Select date"}
                  </span>
                </div>
              </div>
              
              {/* Placeholder for calendar embed or interactive date picker */}
              <div className="mt-6 p-6 border-2 border-dashed border-border rounded-lg bg-muted/30 text-center">
                <CalendarIcon className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
                <p className="text-sm text-muted-foreground">
                  Interactive calendar widget
                  <br />
                  <span className="text-xs">(Embed your booking platform calendar here)</span>
                </p>
              </div>
            </div>
          </Card>

          {/* Booking Details */}
          <Card className="p-8 shadow-lg">
            <h3 
              className="mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Reservation Details
            </h3>
            
            <div className="space-y-6">
              {/* Pricing */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-muted-foreground">Rate</span>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem'
                    }}
                  >
                    $250<span className="text-sm text-muted-foreground">/night</span>
                  </span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Cleaning fee</span>
                  <span>$125</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="mb-3">Quick Details</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Minimum 2-night stay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Maximum 6 guests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Check-in: 4:00 PM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Check-out: 11:00 AM
                  </li>
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <Button 
                  className="w-full"
                  size="lg"
                >
                  Request to Book
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-muted rounded-full">
            <div className="text-sm">
              <span className="text-muted-foreground">✓</span> Professionally Cleaned
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">✓</span> Responsive Host
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">✓</span> Transparent Pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
