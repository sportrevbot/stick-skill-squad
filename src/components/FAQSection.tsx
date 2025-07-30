import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What do I need to do as an ambassador?",
      answer: "Post fun videos using our gear! Share your training sessions, skills, and progress on TikTok and Instagram. Show other young players how Better Hockey equipment helps improve their game."
    },
    {
      question: "Do I get paid?",
      answer: "No, ambassadors receive free gear instead of payment. You'll get awesome Better Hockey training equipment, apparel, and the chance to be featured to thousands of players worldwide!"
    },
    {
      question: "Who can apply?",
      answer: "Hockey players ages 8-16 from North America and Europe! We're looking for passionate young players who love creating content and sharing their hockey journey."
    },
    {
      question: "Which gear can I receive?",
      answer: "Trainers, tiles, passers, Pro Goalie Cover, shirts, and more! The specific gear depends on your training needs and content creation plans."
    },
    {
      question: "How many followers do I need?",
      answer: "Follower count doesn't matter! We care more about your passion for hockey and creativity in content creation. Quality over quantity!"
    },
    {
      question: "How long does the application process take?",
      answer: "We review applications weekly and aim to respond within 7-10 days. If selected, we'll reach out with next steps and gear selection!"
    }
  ];

  return (
    <section className="py-20 bg-ice-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-hockey-black mb-6">
            Got Questions?
          </h2>
          <p className="text-xl text-hockey-gray max-w-2xl mx-auto">
            Everything you need to know about becoming a Better Hockey ambassador
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-hockey-black hover:text-hockey-gray py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-hockey-gray leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};