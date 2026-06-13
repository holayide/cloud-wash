import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-lg px-4 sm:px-8 py-[11px] sm:py-4 text-sm sm:text-base font-inter font-normal transition-all duration-200 active:scale-[0.98] tracking-[0.015em] cursor-pointer";

  const variants = {
    primary:
      "text-white bg-[radial-gradient(95.6%_310.71%_at_55.49%_-104.46%,#EDEDED_24.07%,#0E5582_57.9%)] shadow-[0_18px_32px_-6px_rgba(10,53,82,0.5)] hover:shadow-[0_22px_40px_-4px_rgba(10,53,82,0.6)] hover:-translate-y-0.5",

    secondary:
      "bg-white text-gray-902 border border-blue-200 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.08),0_4px_12px_-4px_rgba(14,85,130,0.1)] hover:bg-neutral-50/80 hover:shadow-[0_16px_28px_-6px_rgba(0,0,0,0.12)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
