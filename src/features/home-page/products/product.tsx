import { MobileIcon, ProductIcon } from "@/components/icons/icons";
import { SectionSideHeader } from "@/components/ui/section-header";
import Image from "next/image";

export default function Product() {
  return (
    <section className="py-10 sm:py-24 bg-white">
      <div className="px-4 sm:px-8 md:px-12 mx-auto grid max-w-420 grid-cols-1 gap-12 md:grid-cols-2">
        {/* LEFT SIDE */}
        <SectionSideHeader
          icon={<ProductIcon className="w-4 h-4 sm:w-auto sm:h-auto" />}
          iconText="Our products"
          title="Built for Performance & Scalability"
          description="CloudWash is built with modern cloud infrastructure to ensure speed, reliability, and scalability as your business grows"
          buttonText="Get started"
        />

        <div>
          <div
            className="retative rounded-3xl bg-[#b8c8d6] p-5 sm:p-14"
            style={{
              background:
                "linear-gradient(110.29deg, rgba(14, 85, 130, 0.4) 9.25%, rgba(39, 179, 202, 0.181818) 120.43%)",
            }}
          >
            <div className="rounded-2xl bg-white px-4 pt-4">
              <div className="sm:mb-12 inline-flex items-center gap-2 rounded-md bg-blue-75 px-5 py-3 text-lg font-inter font-light text-neutral-6">
                <MobileIcon className="w-4 h-4 sm:w-auto sm:h-auto" />
                Mobile
              </div>
              <div className="flex justify-center">
                <Image
                  src="/assets/mobile_shot.png"
                  alt="CloudWash mobile app"
                  width={376}
                  height={814}
                  className="max-h-[420px] w-auto rounded-t-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-blue-500" />
            <span className="h-4 w-4 rounded-full bg-gray-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
