import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 4:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability. Please contact us in advance to arrange."
  },
  {
    question: "Is parking available?",
    answer: "Yes! We provide free parking for up to 2 vehicles directly at the cabin. The driveway is paved and easily accessible year-round, including during winter months."
  },
  {
    question: "How fast is the WiFi?",
    answer: "We offer high-speed fiber internet with speeds up to 200 Mbps, perfect for streaming, video calls, and remote work. The cabin is fully equipped for digital nomads and remote workers."
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, we welcome well-behaved dogs (maximum 2). A pet fee of $50 per stay applies. Please keep pets off furniture and clean up after them. Cats are not permitted due to allergies."
  },
  {
    question: "What are the hot tub rules?",
    answer: "The hot tub is available year-round and seats 6 people comfortably. We provide cleaning and maintenance between each guest. Please shower before use, no glass containers, and supervise children at all times. Detailed instructions are provided at the cabin."
  },
  {
    question: "Is there a grill?",
    answer: "Absolutely! We provide a propane BBQ grill on the deck with a full tank. Grilling utensils and a cover are also provided. Please clean the grill after use."
  },
  {
    question: "What linens and towels are provided?",
    answer: "All bed linens, bath towels, and hand towels are provided and professionally laundered. We also include basic toiletries (shampoo, conditioner, body wash). Please bring your own beach towels for the hot tub and lake."
  },
  {
    question: "Can I use the fireplace?",
    answer: "Yes! The cabin features a wood-burning fireplace. We provide one complimentary bundle of firewood. Additional firewood can be purchased locally or from the host ($10 per bundle). Please use the fireplace screen and ensure the fire is completely out before leaving."
  },
  {
    question: "Is the cabin accessible?",
    answer: "The cabin has a single-level main floor with the primary bedroom, living area, kitchen, and one bathroom. Two additional bedrooms and a bathroom are upstairs. There are 3 steps to enter the cabin. Unfortunately, it is not wheelchair accessible."
  },
  {
    question: "Is the cabin kid-friendly?",
    answer: "Yes! Families love our cabin. We can provide a pack-n-play and high chair upon request (please ask in advance). The lake is perfect for kids, and there are family-friendly hiking trails nearby. Please supervise children around the hot tub and fireplace."
  },
  {
    question: "What attractions are nearby?",
    answer: "You're minutes from hiking trails, lake activities, and scenic drives. Downtown [CITY] offers shopping, dining, and local culture. In winter, [SKI RESORT] is just 25 minutes away. We provide a detailed local guide with our favorite recommendations upon booking."
  },
  {
    question: "What if I need to cancel?",
    answer: "We offer free cancellation up to 7 days before check-in for a full refund. Cancellations made 3-7 days prior receive a 50% refund. No refunds are provided for cancellations within 3 days of check-in. We recommend purchasing travel insurance for added protection."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know for a smooth stay
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl shadow-md px-6 border-none"
            >
              <AccordionTrigger 
                className="hover:no-underline py-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
