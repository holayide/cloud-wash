import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons/icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-10 sm:pt-24 sm:pb-12.25 bg-gray-100">
      <div className="px-4 sm:px-8 md:px-12 mx-auto max-w-420">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 xl:gap-16">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/cloudwash-logo.png"
                alt="CloudWash Logo"
                width={164}
                height={90}
              />
            </div>
            <p className="mt-3 text-lg sm:text-xl text-neutral-3c sm:max-w-116 max-w-86 leading-[1.5em]">
              We create software solutions for laundromats, including ERP and
              mobile apps.
            </p>
            <div className="mt-9 flex gap-3">
              {Socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="h-13 w-13 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0">
            <div className="flex items-center justify-start xl:justify-end gap-0 lg:gap-3 xl:gap-16 font-inter font-light">
              <ul className="space-y-3 flex-1">
                <li>
                  <Link href="/#solution" className="text-base xl:text-lg">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-base xl:text-lg">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-base xl:text-lg">
                    How it works
                  </Link>
                </li>
              </ul>

              <ul className="space-y-3 flex-1">
                <li>
                  <Link href="contact-us" className="text-base xl:text-lg">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs" className="text-base xl:text-lg">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="policy" className="text-base xl:text-lg">
                    Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-start xl:justify-end gap-0 xl:gap-16 lg:gap-10">
              <div className="text-base xl:text-lg">
                <p className="font-inter font-normal text-[#012330]">
                  Contact address
                </p>
                <p className="mt-3 text-neutral-3c font-inter font-light max-w-64.5">
                  2nd Floor, Lennox Mall Block 10, Plot 2,3, Phase 1 Admiralty
                  Wy, Lekki Phase1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-200 text-center text-base sm:text-lg text-neutral-3c">
          © {currentYear} Cloudwash Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const Socials = [
  {
    label: "X",
    href: "#",
    icon: <TwitterIcon />,
  },
  {
    label: "IG",
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    label: "FB",
    href: "#",
    icon: <FacebookIcon />,
  },
];
