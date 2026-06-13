import Button from "@/components/ui/button";
import Header from "@/features/header/header";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-full lg:min-h-screen w-full bg-blue-50 font-sans text-[#1E3A5F] overflow-hidden">
      {/* CLOUD LAYER */}
      <div className="absolute -top-37.5 md:top-62.5 lg:top-[-500] xl:-top-200 left-0 right-0 z-2 pointer-events-none select-none">
        <Image
          src="/assets/cloud.png"
          alt="cloud background"
          width={1920}
          height={967}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* GRADIENT SPHERE LAYER */}
      <div className="absolute top-0 bottom-0 inset-0 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none select-none">
        <Image
          src="/assets/hero-gradient.png"
          alt="gradient background shape"
          width={1600}
          height={1200}
          className="w-full h-full sm:min-h-screen object-cover"
          priority
        />
      </div>

      {/* CONTENT & FOREGROUND LAYER */}
      <div className="relative z-20 flex flex-col items-center">
        <Header />

        <section className="mt-8 px-4 sm:px-6 lg:mt-32">
          <div className="flex flex-col items-center text-center max-w-272.75 ">
            <h1 className="text-xl sm:text-4xl lg:text-7xl text-blue-800/90 font-bold tracking-[-0.005em] leading-[1.4em]">
              Powering modern laundromats <br /> with smart software
            </h1>

            <p className="mt-3 sm:mt-6 max-w-205.75 text-sm sm:text-[21px] font-inter font-light leading-[1.5em] text-neutral-6">
              CloudWash provides an all-in-one ERP and mobile app solution to
              manage laundry businesses, automate operations, and increase
              revenue.
            </p>

            <div className="mt-6 sm:mt-10 flex justify-between gap-3 sm:gap-4 max-w-[300px] sm:max-w-[359px] w-full">
              <Button className="flex-1 sm:flex-none sm:px-10">
                Get started
              </Button>
              <Button className="flex-1 sm:flex-none" variant="secondary">
                Request demo
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Image Section */}
        <section className="mt-12 sm:mt-24 w-full max-w-5xl overflow-hidden rounded-t-[52px]">
          <div className="px-4 relative rounded-2xl bg-transparent backdrop-blur-md shadow-2xl border-none">
            <Image
              src="/assets/dashboard.png"
              alt="Cloud Wash Dashboard"
              width={1200}
              height={665}
              className="rounded-xl shadow-inner border border-white/20 w-full h-auto -mb-2"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
