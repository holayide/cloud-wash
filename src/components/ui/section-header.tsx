import Button from "./button";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SectionHeader({
  icon,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-197.5 mx-auto flex flex-col items-center text-center">
      <div className="inline-block rounded-full bg-[linear-gradient(110.29deg,#367197_9.25%,rgba(39,179,202,0.454545)_120.43%)] p-[1.5px]">
        <span className="py-1.5 px-2 md:py-2.5 md:px-5 inline-flex items-center gap-0.5 sm:gap-2 rounded-full bg-background text-sm text-neutral-6">
          <span className="py-0.5 px-1">{icon}</span>
          <span className="text-sm sm:text-[21px] font-inter font-light">
            {title}
          </span>
        </span>
      </div>

      <h2 className="mt-2 sm:mt-4 max-w-64.75 sm:max-w-197.5 text-xl sm:text-3xl lg:text-4xl xl:text-[56px] tracking-[-0.005em] leading-[1.4]">
        {description}
      </h2>
    </div>
  );
}

interface SectionSideHeaderProps {
  icon?: React.ReactNode;
  iconText: string;
  title: string;
  description: string;
  buttonText?: string;
}
export function SectionSideHeader({
  icon,
  iconText,
  title,
  description,
  buttonText,
}: SectionSideHeaderProps) {
  return (
    <div className="text-center sm:text-left max-w-full sm:max-w-172">
      <div className="inline-flex items-center rounded-full bg-[linear-gradient(110.29deg,#367197_9.25%,rgba(39,179,202,0.454545)_120.43%)] p-[1.5px]">
        <span className="py-1.5 px-2 md:py-2.5 md:px-5 inline-flex items-center gap-0.5 sm:gap-2 rounded-full bg-background text-sm text-neutral-6">
          {icon && <span className="py-0.5 px-1">{icon}</span>}
          <span className="text-sm sm:text-[21px] font-inter font-light">
            {iconText}
          </span>
        </span>
      </div>

      <div className="">
        <h2 className="mt-2 sm:mt-4 sm:max-w-full mx-auto text-xl sm:text-3xl lg:text-4xl xl:text-[56px] tracking-[-0.005em] leading-[1.4]">
          {title}
        </h2>

        <p className="max-w-87.5 sm:max-w-136.5 mx-auto sm:mx-0 mt-5 text-base sm:text-lg lg:text-[21px] font-inter font-light leading-[1.5em] text-neutral-6">
          {description}
        </p>
      </div>

      {buttonText && <Button className="mt-6 sm:mt-14">{buttonText}</Button>}
    </div>
  );
}
