"use client";

import Button from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-10 sm:py-24 bg-blue-150 font-inter">
      <div className="px-4 sm:px-8 md:px-12 mx-auto grid max-w-420 grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-[#012330] leading-[1.3em] tracking-[-0.005em]">
            Contact us
          </h1>

          <p className="mt-7 sm:mt-4 max-w-175 text-base sm:text-xl font-light leading-7 text-gray-900">
            We&lsquo;re here to help you with any questions, concerns, or
            feedback you may have. Please feel free to reach out to us.
          </p>

          <div className="flex flex-col flex-wrap md:flex-row gap-3 lg:gap-5 xl:gap-0 justify-between mt-10 sm:mt-24">
            <div>
              <h4 className="mb-4 text-lg sm:text-2xl text-[#0C0C0C] font-normal">
                Phone
              </h4>
              <div className="text-base sm:text-lg leading-8 text-gray-500 font-light">
                +23480 0000 000
                <br />
                +23480 0000 000
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg sm:text-2xl text-[#0C0C0C] font-normal">
                Email
              </h4>
              <div className="text-base sm:text-lg leading-8 text-gray-500 font-light">
                support@laundromatapp.com
                <br />
                support@laundromatapp.com
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg sm:text-2xl text-[#0C0C0C] font-normal">
                Address
              </h4>

              <div className="text-base sm:text-lg  text-gray-500 font-light leading-[1.4em]">
                Cloudwash Headquarters
                <br />
                123 Clean Street, Lagos,
                <br />
                Nigeria Postal Code: 101233
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-lg sm:text-[28px] font-medium leading-[1.5em] text-[#0C0C0C]">
            We&lsquo;d love to hear from you.
            <br />
            Let&lsquo;s get in touch with you <span>👋</span>
          </h2>

          <form
            className="mt-10 flex flex-col gap-3.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>

            <Input placeholder="Email" />
            <Input placeholder="Company name" />
            <Input placeholder="Phone number" />

            <textarea
              placeholder="How can we help?"
              rows={4}
              className="resize-none rounded-md border border-gray-200 px-2 py-4 text-xl text-[#0b1320] font-inter font-light outline-none placeholder:text-lg placeholder:text-[#B1B1B1]"
            />

            <div className="mt-6">
              <Button>Contact us</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-200 px-2 py-4 text-xl text-[#0b1320] outline-none placeholder:text-lg placeholder:text-[#B1B1B1] font-inter font-light"
    />
  );
}
