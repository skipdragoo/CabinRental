import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";

// Google Form field IDs (unified form for both Contact and Booking)
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfJAeTCgJJSemBAj17FOBALZ3A4ccBLO0hPWuuPTPm8AHIGyw/formResponse";
const FIELD_IDS = {
  name: "entry.2096257247",
  email: "entry.547784766",
  phone: "entry.517807036",
  message: "entry.1536607944",
  checkInDate: "entry.1470014607",
  checkOutDate: "entry.1347064650",
  guests: "entry.1860827715",
  pets: "entry.254815522",
  specialRequests: "entry.816468295",
};

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    pets: "No",
    specialRequests: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build URL-encoded form data for Google Forms
    const params = new URLSearchParams();
    params.append(FIELD_IDS.name, formData.name);
    params.append(FIELD_IDS.email, formData.email);
    params.append(FIELD_IDS.phone, formData.phone || "N/A");
    params.append(FIELD_IDS.message, "Booking Request");
    params.append(FIELD_IDS.checkInDate, formData.checkIn);
    params.append(FIELD_IDS.checkOutDate, formData.checkOut);
    params.append(FIELD_IDS.guests, formData.guests);
    params.append(FIELD_IDS.pets, formData.pets);
    params.append(FIELD_IDS.specialRequests, formData.specialRequests || "None");

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      setSubmitted(true);
      toast.success("Booking request sent! We'll confirm within 4 hours.");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "2",
          pets: "No",
          specialRequests: ""
        });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          {/* Booking Form */}
          <Card className="p-8 shadow-lg">
            <h3
              className="mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Request a Reservation
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Request Received!
                </h3>
                <p className="text-muted-foreground">
                  We'll review your dates and confirm within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in *</Label>
                    <div className="relative mt-2">
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out *</Label>
                    <div className="relative mt-2">
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests">Guests *</Label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full h-10 px-3 border rounded-md bg-background"
                    >
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                      <option value="5">5 guests</option>
                      <option value="6">6 guests</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="pets">Bringing Pets? *</Label>
                    <select
                      id="pets"
                      name="pets"
                      value={formData.pets}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full h-10 px-3 border rounded-md bg-background"
                    >
                      <option value="No">No</option>
                      <option value="Yes - 1 dog">Yes - 1 dog</option>
                      <option value="Yes - 2 dogs">Yes - 2 dogs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Early check-in, late check-out, special occasions..."
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request to Book"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  You won't be charged yet · We'll confirm availability first
                </p>
              </form>
            )}
          </Card>

          {/* Availability Calendar */}
          <Card className="p-8 shadow-lg">
            <h3
              className="mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Check Availability
            </h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=c81e00ad562f404cf15cb9636ec3f1ba4b251ecc65f35ea962a31619967975b1%40group.calendar.google.com&ctz=America%2FChicago"
                className="w-full border-0"
                style={{ minHeight: '400px' }}
                title="Cabin Availability Calendar"
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Blocked dates show confirmed bookings
            </p>
          </Card>
        </div>

        {/* Reservation Details - Full Width */}
        <Card className="mt-8 p-8 shadow-lg">
          <h3
            className="mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Reservation Details
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
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

            {/* Quick Details */}
            <div>
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

            {/* Pet Policy */}
            <div>
              <h4 className="mb-3">Pet Policy</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Dogs welcome (max 2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  $50 pet fee per stay
                </li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h4 className="mb-3">Cancellation Policy</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Free cancellation 7+ days before
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  50% refund 3-7 days before
                </li>
              </ul>
            </div>
          </div>
        </Card>

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
