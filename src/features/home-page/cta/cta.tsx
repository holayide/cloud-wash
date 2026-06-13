import {
  CardIcon,
  CurveLineIcon,
  DatabaseIcon,
  MonitorIcon,
  SlopeFilledIcon,
} from "@/components/icons/icons";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-10 sm:py-24 bg-neutral-100">
      <div className="px-4 sm:px-8 md:px-12 max-w-420 mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#c5d4e0] py-10 px-5 lg:py-32 xl:py-[135px]">
          <span className="absolute left-1/2 top-[-5%] xl:top-[-7%] -translate-x-1/2">
            <CurveLineIcon />
          </span>

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute xl:left-[3%] xl:top-[18%] hidden xl:block">
              <IconBubble>
                <SlopeFilledIcon className="w-4 h-4 lg:w-auto lg:h-auto" />
              </IconBubble>
            </div>

            <div className="absolute xl:left-[15%] xl:top-[42%] hidden xl:block">
              <IconBubble className="w-12! h-12! xl:w-24! xl:h-24!">
                <CardIcon className="w-4 h-4 lg:w-auto lg:h-auto" />
              </IconBubble>
            </div>

            <div className="absolute xl:right-[15%] xl:top-[42%] hidden xl:block">
              <IconBubble className="w-12! h-12! xl:w-24! xl:h-24!">
                <DatabaseIcon className="w-4 h-4 lg:w-auto lg:h-auto" />
              </IconBubble>
            </div>

            <div className="absolute xl:right-[3%] xl:top-[18%] hidden xl:block">
              <IconBubble className="">
                <MonitorIcon className="w-4 h-4 lg:w-auto lg:h-auto" />
              </IconBubble>
            </div>
          </div>

          <div className="relative max-w-[350px] sm:max-w-[786px] mx-auto flex flex-col items-center justify-self-center text-center">
            <h2 className="text-[clamp(20px,5vw,56px)] font-semibold leading-[1.4em] tracking-[-0.005em] md:text-5xl">
              Stop manual laundry. Start scaling with{" "}
              <span className="text-blue-400/50">CloudWash</span>
            </h2>
            <p className="mt-5 text-sm sm:text-xl font-inter font-light leading-[1.5em] tracking-0 text-neutral-6">
              Automate your laundromat operations, increase efficiency, and
              deliver a better customer experience
            </p>

            <Button className="mt-6 sm:mt-14">Request demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex sm:h-16 sm:w-16 h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_16px_48px_0px_#36719766] ${className || ""}`}
    >
      {children}
    </div>
  );
}
