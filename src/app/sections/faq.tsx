import Accordion from "@/components/ui/accordion";

export default function FAQ() {
  const accordionContents = [
    {
      title: "Why should I choose Humestic?",
      content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      title: "I like your works, how do we start a project?",
      content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      title: "What info is required to get a quotation?",
      content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    }
  ];

  return (
    <section className="max-w-container py-[40px]">
      <div className="flex items-start gap-4 md:gap-[80px]">
        <p className="text-[#001C4A] text-xs lg:text-[24px] lg:w-[240px] font-questrial">Frequently asked <br /> questions</p>
        <h3 className="text-[#111111] text-xl md:text-4xl lg:text-[60px] leading-[120%] md:text-center font-questrial">Constant collaboration is how we <br className="hidden lg:block" /> roll. Let&apos;s see if we are a good fit.</h3>
      </div>

      <div className="mt-[40px] lg:mt-[80px]" >
        <Accordion contents={accordionContents} />
      </div>
    </section>
  );
};
