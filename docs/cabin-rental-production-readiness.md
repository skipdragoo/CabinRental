# Cabin Rental Website - Production Readiness

## Priority 1: Content & Branding (Required before launch)

### Cabin Identity
- [ ] Replace cabin name throughout site (Hero, Footer, Contact)
- [ ] Add location/area name (e.g., "Blue Ridge Mountains")
- [ ] Add nearby city name
- [ ] Add lake name
- [ ] Add ski resort name (if applicable)
- [ ] Add company/LLC name for footer copyright

### Property Details
- [ ] Verify/update sleep capacity
- [ ] Verify/update bed configuration
- [ ] Verify/update bathroom count
- [ ] Verify/update parking capacity
- [ ] Verify/update hot tub capacity
- [ ] Verify/update lake access distance
- [ ] Update pet policy specifics

### Pricing & Rates
- [ ] Set nightly rate (placeholder: $250)
- [ ] Set cleaning fee (placeholder: $125)
- [ ] Set minimum stay requirement
- [ ] Set maximum guest count
- [ ] Set additional guest fee
- [ ] Set pet fee (placeholder: $50)

### Check-in/Check-out
- [ ] Confirm check-in time (placeholder: 4:00 PM)
- [ ] Confirm check-out time (placeholder: 11:00 AM)

### Contact Information
- [ ] Add real email address (placeholder: stay@cabinname.com)
- [ ] Add real phone number (placeholder: 555-555-1234)
- [ ] Add Facebook URL
- [ ] Add Instagram URL

---

## Priority 2: Images (Required before launch)

- [ ] Hero background image - actual cabin exterior
- [ ] Gallery: Exterior photo
- [ ] Gallery: Living room
- [ ] Gallery: Primary bedroom
- [ ] Gallery: Kitchen
- [ ] Gallery: Deck/views
- [ ] Gallery: Hot tub

---

## Priority 3: Integrations (Required for full functionality)

### Contact & Booking Forms ✅ COMPLETE
Both forms submit to a unified Google Form, with responses collected in Google Sheets.

- [x] Contact form submits to Google Forms (custom UI preserved)
- [x] Booking request form submits to Google Forms (custom UI preserved)
- [x] Responses auto-save to Google Sheets for review
- [x] Form distinguishes between contact inquiries and booking requests via Message field
  - Message = "Booking Request" → booking inquiry with dates/guests/pets
  - Message = anything else → general contact inquiry

**Google Form URL:** `https://docs.google.com/forms/d/e/1FAIpQLSfJAeTCgJJSemBAj17FOBALZ3A4ccBLO0hPWuuPTPm8AHIGyw/formResponse`

**Field IDs:**
| Field | Entry ID |
|-------|----------|
| Name | entry.2096257247 |
| Email | entry.547784766 |
| Phone | entry.517807036 |
| Message | entry.1536607944 |
| Check-In Date | entry.1470014607 |
| Check-out Date | entry.1347064650 |
| Number of Guests | entry.1860827715 |
| Pets | entry.254815522 |
| Special Requests | entry.816468295 |

### Availability Calendar ✅ COMPLETE
- [x] Google Calendar created for cabin availability
- [x] Calendar made public and embedded in BookingSection
- [x] Blocked dates visible to visitors

**Calendar Embed:** `https://calendar.google.com/calendar/embed?src=c81e00ad562f404cf15cb9636ec3f1ba4b251ecc65f35ea962a31619967975b1%40group.calendar.google.com&ctz=America%2FChicago`

**Workflow:** Manually add events to calendar when bookings are confirmed.

### Map Integration ✅ COMPLETE
- [x] Google Maps embed added to LocationSection (no API key required)
- [x] Cabin location pin visible
- [ ] Verify driving times to nearby attractions (update LocationSection.tsx)

---

## Priority 4: Policy & Content Review

### House Rules (verify accuracy)
- [ ] Pet policy details
- [ ] Smoking policy
- [ ] Party/event policy
- [ ] Quiet hours
- [ ] Hot tub rules

### Cancellation Policy (verify terms)
- [ ] Free cancellation window (placeholder: 7+ days)
- [ ] Partial refund window (placeholder: 3-7 days = 50%)
- [ ] No refund window (placeholder: <3 days)

### FAQs
- [ ] Review all 10 Q&As for accuracy
- [ ] Update location-specific answers

### What's Included / What to Bring
- [ ] Verify included items list
- [ ] Verify "bring your own" list

---

## Files to Modify

| File | Updates Needed | Status |
|------|----------------|--------|
| `src/app/components/HeroSection.tsx` | Cabin name, location, hero image, property specs | Pending |
| `src/app/components/GallerySection.tsx` | All 6 gallery images, cabin name | Pending |
| `src/app/components/HighlightsSection.tsx` | All amenity details | Pending |
| `src/app/components/BookingSection.tsx` | Pricing, verify details | ✅ Calendar + Form integrated |
| `src/app/components/RatesPoliciesSection.tsx` | Rates, policies, house rules | Pending |
| `src/app/components/LocationSection.tsx` | Location names, distances | ✅ Map integrated |
| `src/app/components/FAQSection.tsx` | Location names, verify all answers | Pending |
| `src/app/components/ContactSection.tsx` | Email, phone | ✅ Form integrated |
| `src/app/components/Footer.tsx` | Cabin name, contact info, social links | Pending |
