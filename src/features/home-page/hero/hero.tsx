import NavLink from "@/features/header/navbar";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#e7eef2] font-sans text-[#1E3A5F]">
      {/*  &  
        This div mimics the 'shape' used in Figma. 
        It uses the gradient 7BB7FF at 40% opacity.
      */}
      <div className="absolute -top-[890px] left-0 right-0">
        <Image src="/assets/cloud.png" alt="cloud" width={1920} height={967} />
      </div>
      {/* CLOUD LAYER */}
      {/* <div
        className="absolute top-[-80px] left-0 w-full h-[950px] z-0 pointer-events-none"
        style={{
          backgroundImage: `
      radial-gradient(circle at 50% -10%, rgba(123, 183, 255, 0.4) 0%, transparent 70%),
      radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
      radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
      url('/assets/cloud.png')
    `,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          opacity: 0.65,
        }}
      /> */}
      {/* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% -10%, rgba(123, 183, 255, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
            radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
            url('/assets/cloud.png')
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          opacity: 0.65,
        }}
      /> */}
      {/* <div
        border border-red-500
        className="w-full h-[500px] absolute top-[-70px] bg-right bg-cover bg-no-repeat bg-[#7BB7FF40]"
        style={{ backgroundImage: "url('/assets/cloud.png')" }}
      /> */}
      {/* GRADIENT */}
      {
        /* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 110%, rgba(123, 183, 255, 0.35) 0%, transparent 70%),  /* down */
        // radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),   /* left */
        // radial-gradient(circle at 85% 25%, rgba(255, 255, 255, 0.8) 0%, transparent 40%)    /* right */
        // `,
        // }}
        // /> */}
      }

      {/* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 60% -10%, rgba(123, 183, 255, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 40%)
          `,
        }}
      /> */}

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Navigation */}
        <header className="flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-2">
            {/* Replace with your actual Logo SVG/Image */}
            <div className="h-8 w-8 bg-sky-400 rounded-lg shadow-sm" />
            <span className="text-xl font-bold tracking-tight text-[#115993]">
              Cloud Wash
            </span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-slate-600">
              <li>
                <Link href="#" className="hover:text-sky-600 transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-600 transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-600 transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-600 transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>

          <button className="rounded-md bg-[#115993] px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#0d4674] transition">
            Get started
          </button>
        </header>

        {/* Hero Section */}
        <section className="mt-20 flex max-w-4xl flex-col items-center px-6 text-center lg:mt-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#1E3A5F]">
            Powering modern laundromats <br /> with smart software
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            CloudWash provides an all-in-one ERP and mobile app solution to
            manage laundry businesses, automate operations, and increase
            revenue.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-md bg-[#115993] px-8 py-3 text-sm font-semibold text-white shadow-xl hover:bg-[#0d4674] transition">
              Get started
            </button>
            <button className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 transition">
              Request demo
            </button>
          </div>
        </section>

        {/* Dashboard Image Section */}
        {/* <section className="mt-16 w-full max-w-6xl px-6 pb-20">
          <div className="relative rounded-2xl bg-[#7BB7FF40] p-2 backdrop-blur-sm shadow-2xl ring-1 ring-white/50">
            Using Next.js Image component for optimization. 
              Replace /dashboard.png with your actual file path.
           
            <Image
              src="/dashboard.png"
              alt="Cloud Wash Dashboard"
              width={1200}
              height={800}
              className="rounded-xl shadow-inner border border-white/20"
              priority
            />
          </div>
        </section> */}
      </div>
      {/* ////////////////////// */}
      {/* <main className="flex-1 flex flex-col items-center pt-24 px-4 pb-20">
          <h1 className="text-4xl md:text-[56px] font-bold text-[#072A41] leading-[1.2] text-center tracking-tight max-w-4xl">
            <span className="underline decoration-[#0066FF] decoration-[3px] underline-offset-[8px]">
              Powering modern laundromats
            </span>
            <br />
            <span className="underline decoration-[#0066FF] decoration-[3px] underline-offset-[8px]">
              with smart software
            </span>
          </h1>

          <p className="mt-8 text-[17px] text-[#666666] max-w-[640px] text-center leading-relaxed">
            CloudWash provides an all-in-one ERP and mobile app solution to
            manage laundry businesses, automate operations, and increase
            revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <button className="bg-[#072A41] text-white px-7 py-3 rounded-md font-medium shadow-[0_4px_14px_0_rgba(7,42,65,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(7,42,65,0.2)] hover:bg-[#0a3a5a] w-full sm:w-auto">
              Get started
            </button>
            <button className="bg-white text-[#072A41] px-7 py-3 rounded-md font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 hover:bg-gray-50 transition-all w-full sm:w-auto">
              Request demo
            </button>
          </div>
        </main> */}
    </div>

    // ////////// one //////////////
    // // bg-blue-50 bg-[#7BB7FF40] selection:bg-blue-100 bg-blue-50
    // // <section className="min-h-screen relative bg-blue-50">
    //   {/* Background Image */}
    //   {/* <div
    //       inset-0 bg-cover z-0
    //     className="w-full h-[800px] absolute top-0 right-0 bg-no-repeat border border-red-500"
    //     style={{ backgroundImage: "url('/assets/cloud.png')" }}
    //   /> */}

    //   {/* bg-cover */}
    //   {/* <div
    //     className="w-full h-[500px] absolute top-[-70px] bg-right bg-cover bg-no-repeat border border-red-500 bg-[#7BB7FF40]"
    //     style={{ backgroundImage: "url('/assets/cloud.png')" }}
    //   /> */}

    //   {/* <div
    //     aria-hidden
    //     className="pointer-events-none absolute inset-x-0 top-[650px] h-[400px] bg-linear-to-b from-[#7BB7FF40] to-[#7BB7FF40]"
    //   /> */}

    //   {/* Content */}
    //   {/* <div className="relative z-10 flex flex-col min-h-screen pt-4"> */}
    //   {/* Navigation */}
    //   {/* <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-[1400px] mx-auto w-full">
    //       <Link href="/">
    //         <Image
    //           src="/assets/logo.png"
    //           width={140}
    //           height={40}
    //           alt="CloudWash Logo"
    //           className="h-8 w-auto object-contain"
    //         />
    //       </Link>

    //       <div className="hidden md:flex items-center gap-8">
    //         <NavLink href="#">Solutions</NavLink>
    //         <NavLink href="#">How it works</NavLink>
    //         <NavLink href="#">Features</NavLink>
    //         <NavLink href="#">Contact us</NavLink>
    //         <NavLink href="#">FAQs</NavLink>
    //       </div>

    //       <button className="bg-[#072A41] text-white px-5 py-2.5 rounded-md font-medium text-sm shadow-md transition-all hover:bg-[#0a3a5a]">
    //         Get started
    //       </button>
    //     </nav> */}

    //   {/* Hero Section */}
    //   {/* <main className="flex-1 flex flex-col items-center pt-24 px-4 pb-20">
    //       <h1 className="text-4xl md:text-[56px] font-bold text-[#072A41] leading-[1.2] text-center tracking-tight max-w-4xl">
    //         <span className="underline decoration-[#0066FF] decoration-[3px] underline-offset-[8px]">
    //           Powering modern laundromats
    //         </span>
    //         <br />
    //         <span className="underline decoration-[#0066FF] decoration-[3px] underline-offset-[8px]">
    //           with smart software
    //         </span>
    //       </h1>

    //       <p className="mt-8 text-[17px] text-[#666666] max-w-[640px] text-center leading-relaxed">
    //         CloudWash provides an all-in-one ERP and mobile app solution to
    //         manage laundry businesses, automate operations, and increase
    //         revenue.
    //       </p>

    //       <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
    //         <button className="bg-[#072A41] text-white px-7 py-3 rounded-md font-medium shadow-[0_4px_14px_0_rgba(7,42,65,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(7,42,65,0.2)] hover:bg-[#0a3a5a] w-full sm:w-auto">
    //           Get started
    //         </button>
    //         <button className="bg-white text-[#072A41] px-7 py-3 rounded-md font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 hover:bg-gray-50 transition-all w-full sm:w-auto">
    //           Request demo
    //         </button>
    //       </div>
    //     </main> */}
    //   {/* </div> */}
    // // </section>
  );
}
