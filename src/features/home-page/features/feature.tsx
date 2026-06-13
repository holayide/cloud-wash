import SectionHeader from "@/components/ui/section-header";
import { StarIcon } from "@/components/icons/icons";
import { featuresData } from "./data";

export default function Feature() {
  const getBorderClass = (index: number) => {
    const borderCfg = "border-neutral-b2";

    switch (index) {
      case 0:
        return `
          border-b ${borderCfg}
          md:border-b-0 md:border-r
          lg:border-r lg:pb-6
        `;
      case 1:
        return `
          border-b ${borderCfg}
          md:border-b md:border-l-0
          lg:border-x lg:pb-6
        `;
      case 2:
        return `
          border-b ${borderCfg}
          md:border-b-0 md:border-t md:border-r
          lg:border-t-0 lg:border-r-0 lg:pb-6
        `;
      case 3:
        return `
          border-b ${borderCfg}
          md:border-b md:border-t-0
          lg:border-t lg:border-r lg:border-b-0 lg:pt-8
        `;
      case 4:
        return `
          border-b ${borderCfg}
          md:border-b-0 md:border-t md:border-r
          lg:border-t lg:border-x lg:pt-8
        `;
      case 5:
        return `
          md:border-t-0
          lg:border-t ${borderCfg} lg:pt-8
        `;
      default:
        return "";
    }
  };

  return (
    <section id="features" className="py-10 sm:py-24 bg-white">
      <div className="px-4 sm:px-8 md:px-12 max-w-420 mx-auto">
        <SectionHeader
          icon={<StarIcon className="w-4 h-4 sm:w-auto sm:h-auto" />}
          title="Features"
          description="Save time, reduce costs, and scale faster"
        />

        <div
          className="mt-20 rounded-[20px] p-3 md:p-16"
          style={{
            background:
              "linear-gradient(110.29deg, rgba(14, 85, 130, 0.4) 9.25%, rgba(39, 179, 202, 0.181818) 120.43%)",
          }}
        >
          <div className="rounded-2xl bg-white p-6 md:p-10 lg:py-20 lg:px-10 xl:py-28 xl:px-18">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((item, i) => (
                <FeatureItem
                  key={item.title}
                  item={item}
                  className={getBorderClass(i)}
                />
              ))}

              <span className="lg:block hidden absolute left-[31%] top-1/2 -translate-y-1/2 w-15 h-15 rounded-full bg-white" />
              <span className="lg:block hidden absolute right-[31%] top-1/2 -translate-y-1/2 w-15 h-15 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Feature {
  title: string;
  description: string;
}

const FeatureItem = ({
  item,
  className,
}: {
  item: Feature;
  className?: string;
}) => {
  return (
    <div
      className={`py-6 md:p-8 flex flex-col justify-start ${className || ""}`}
    >
      <h4 className="text-lg lg:text-2xl font-inter font-neutral text-slate-900">
        {item.title}
      </h4>

      <p className="mt-2 text-sm sm:text-base font-inter font-light leading-relaxed text-neutral-6 max-w-sm">
        {item.description}
      </p>
    </div>
  );
};
