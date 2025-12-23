import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build form data for Google Forms
    const params = new URLSearchParams();
    params.append(FIELD_IDS.name, formData.name);
    params.append(FIELD_IDS.email, formData.email);
    params.append(FIELD_IDS.phone, formData.phone || "N/A");
    params.append(FIELD_IDS.message, formData.message);

    try {
      // Submit to Google Forms (using no-cors mode since Google doesn't allow CORS)
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      // Show success (we can't verify response with no-cors, but submission works)
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you within 4 hours.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <div className="space-y-4">
            <Card className="p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-md font-medium"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:stay@cabinname.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    stay@cabinname.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-md font-medium"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+15555551234"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    (555) 555-1234
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-md font-medium"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Response Time
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Within 4 hours
                  </p>
                </div>
              </div>
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
                  We'll get back to you within 4 hours.
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll respond within 4 hours during business hours.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
