import SectionHeader from "@/components/ui/section-header";
import { FilledCheckIcon } from "@/components/icons/icons";
import { steps } from "./data";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 sm:py-24 bg-white">
      <div className="px-4 sm:px-8 md:px-12 max-w-420 mx-auto">
        <SectionHeader
          icon={<FilledCheckIcon className="w-4 h-4 sm:w-auto sm:h-auto" />}
          title="How it works"
          description="How Cloudwash works"
        />

        {/* Cards */}
        <div className="mt-8 sm:mt-20 relative">
          <div className="absolute w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Image
              src="/assets/work_gradient.png"
              alt="Work gradient icons"
              width={1466}
              height={199}
              className="w-full h-auto"
            />
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6"
                style={{
                  boxShadow:
                    "0 2px 12px rgba(54, 113, 151, 0.08), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div className="p-2 sm:p-3 xl:p-4.5 bg-slate-100 rounded-lg inline-flex items-center justify-center mb-4.5 sm:mb-15">
                  {step.icon}
                </div>

                <div>
                  <h4 className="text-base sm:text-3xl font-inter font-normal text-neutral-12 mb-3">
                    {step.title}
                  </h4>
                  <p className="pb-9 sm:pb-12 text-xs sm:text-xl font-inter font-light text-neutral-6 leading-[1.5em] ">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
