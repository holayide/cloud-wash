"use client";

import { MinusIcon, PlusIcon } from "@/components/icons/icons";
import { SectionSideHeader } from "@/components/ui/section-header";
import { useState } from "react";

const faqs = [
  {
    q: "What features are included in CloudWash ERP?",
    a: "CloudWash ERP includes order management, customer profiles, inventory tracking, staff management, financial reporting, and integrations with payment gateways.",
  },
  {
    q: "Can I manage multiple laundromat branches?",
    a: "Lorem ipsum vitae sem eget mattis diam egestas in sit nullam sit risus diam mattis sit mi lorem faucibus sapien imperdiet diam risus sapien vol",
  },
  {
    q: "Does the mobile app support wallet payments?",
    a: "Yes, the mobile app supports wallet top-ups and payments via major providers, plus card and bank transfer options.",
  },
  {
    q: "Can I track staff attendance and payroll?",
    a: "Absolutely. Track clock-ins, shifts, performance, and run payroll directly from the dashboard.",
  },
  {
    q: "Is CloudWash cloud-based or on-premise?",
    a: "CloudWash is fully cloud-based, so you can access it securely from anywhere with no installation required.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-10 sm:py-24">
      <div className="px-4 sm:px-8 md:px-12 max-w-420 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionSideHeader
            iconText="FAQs"
            title="Frequently asked questions"
            description="Do you have a question? Find the answer to frequently asked questions"
          />
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border border-neutral-da bg-card overflow-hidden transition-shadow 
                  ${isOpen ? "bg-[#F5F7FB]" : ""}
                `}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-6 text-left"
                >
                  <span className="text-base md:text-xl font-inter font-normal text-neutral-3c leading-[1.5em]">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-foreground/60">
                    {isOpen ? (
                      <MinusIcon className="size-4 sm:size-5 lg:size-6" />
                    ) : (
                      <PlusIcon className="size-4 sm:size-5 lg:size-6" />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-218.25 px-5 pb-6 xl:text-xl lg:text-lg text-base font-inter font-light leading-[1.5em] text-neutral-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
