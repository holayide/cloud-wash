import { CloseIcon } from "@/components/icons/icons";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Solutions", href: "/#solution" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Features", href: "/#features" },
  { name: "Contact us", href: "contact-us" },
  { name: "FAQs", href: "/#faqs" },
];

export default function NavLink() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 lg:gap-12 xl:gap-16 text-base text-neutral-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:text-sky-600 transition">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileMenu({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col lg:hidden animate-in fade-in duration-200 overflow-auto">
      <div className="flex items-center justify-between p-6 w-full bg-white">
        <div className="relative w-[80px] h-[40px]">
          <Image
            src="/assets/logo.png"
            alt="Cloudwash Logo"
            fill
            className="object-contain"
          />
        </div>

        <button className="p-2" onClick={toggleMenu} aria-label="Close menu">
          <CloseIcon className="w-8 h-8 text-neutral-700" />
        </button>
      </div>

      <nav className="flex-1 flex flex-col mt-[10%]">
        <ul className="w-full flex flex-col">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="border-b border-[#DBDCDC] last:border-none"
            >
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="block w-full py-8 text-center text-lg font-normal text-neutral-700 hover:bg-gray-50 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
