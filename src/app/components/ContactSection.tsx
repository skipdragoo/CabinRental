import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    pets: "no",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Request received! We'll confirm your booking details within 4 hours.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        pets: "no",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? Ready to book? We're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Email
              </h3>
              <a 
                href="mailto:stay@cabinname.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                stay@cabinname.com
              </a>
            </Card>

            <Card className="p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Phone
              </h3>
              <a 
                href="tel:+15555551234" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (555) 555-1234
              </a>
            </Card>

            <Card className="p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Response Time
              </h3>
              <p className="text-muted-foreground">
                Within 4 hours
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2 p-8 shadow-lg">
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
                  Thanks for reaching out!
                </h3>
                <p className="text-muted-foreground">
                  We'll confirm your booking details within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="6"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in Date *</Label>
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out Date *</Label>
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="pets">Bringing Pets?</Label>
                  <select
                    id="pets"
                    name="pets"
                    value={formData.pets}
                    onChange={handleChange}
                    className="mt-2 w-full p-2 border rounded-lg bg-input-background"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes (dogs only, $50 fee)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requests or questions?"
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Booking Request
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our booking terms and policies.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
