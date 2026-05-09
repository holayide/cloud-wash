import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[#555] hover:text-[#072A41] font-medium text-[15px] transition-colors"
    >
      {children}
    </Link>
  );
}
