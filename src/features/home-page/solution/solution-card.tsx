import { ReactNode } from "react";

interface SolutionCardProps {
  heading: string;
  subHeading: string;
  children: ReactNode;
}

export default function SolutionCard({
  heading,
  subHeading,
  children,
}: SolutionCardProps) {
  return (
    <article className="flex flex-col h-full rounded-3xl pt-6 sm:pt-8 xl:pt-10 px-6 sm:px-8 xl:px-10 bg-[#F3F6FA]">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl text-[#112946] font-bold tracking-tight">
          {heading}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
          {subHeading}
        </p>
      </div>

      <div className="flex-1 w-full mt-auto flex overflow-hidden">
        {children}
      </div>
    </article>
  );
}
