import Footer from "@/features/footer/footer";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CloudWash | Software solutions for laundry businesses",
  description:
    "Mobile app, orders & sales, inventory, and pickup & delivery — software solutions for modern laundry businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        {children}
        <Footer />
      </body>
    </html>
  );
}
