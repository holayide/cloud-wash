import SectionHeader from "@/components/ui/section-header";
import { LightIcon } from "@/components/icons/icons";
import SolutionCard from "./solution-card";
import Image from "next/image";

export default function Solutions() {
  return (
    <section id="solution" className="py-10 sm:py-24 bg-white">
      <div className="px-4 sm:px-8 md:px-12 max-w-420 mx-auto">
        <SectionHeader
          icon={<LightIcon className="w-4 h-4 sm:w-auto sm:h-auto" />}
          title="Solutions"
          description="Our software solutions for laundry businesses"
        />

        <div className="mt-8 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {/* Card 1: Mobile App for customers */}
          <SolutionCard
            heading="Mobile App for customers"
            subHeading="Place and schedule laundry orders, top up your wallet and make payments, and track your order status in real time."
          >
            <div className="pb-6 sm:pb-8 xl:pb-10 flex flex-1 items-end justify-center">
              <Image
                src="/solutions/mobile_app.png"
                alt="mobile app for customers"
                loading="lazy"
                width={352}
                height={394}
                className="w-full h-auto object-contain"
              />
            </div>
          </SolutionCard>

          {/* Card 2: Orders & Sales management */}
          <SolutionCard
            heading="Orders & Sales management"
            subHeading="Create and manage orders with ease, track daily revenue and transactions, and automate receipts and reporting."
          >
            <div className="pb-6 sm:pb-8 xl:pb-10 flex flex-1 items-end justify-center">
              <Image
                src="/solutions/order_management.png"
                alt="order management"
                loading="lazy"
                width={496}
                height={348}
                className="w-full h-auto object-contain"
              />
            </div>
          </SolutionCard>

          {/* Card 3: Inventory management */}
          <SolutionCard
            heading="Inventory management"
            subHeading="Monitor detergents and materials, receive low-stock alerts, and track usage efficiently."
          >
            <div className="pb-6 sm:pb-8 xl:pb-10 flex flex-1 items-end justify-center">
              <Image
                src="/solutions/inventory.png"
                alt="inventory management"
                loading="lazy"
                width={371}
                height={358}
                className="w-full h-auto object-contain"
              />
            </div>
          </SolutionCard>

          {/* Card 4: Pickup & Delivery service */}
          <SolutionCard
            heading="Pickup & Delivery service"
            subHeading="Schedule collections and track every order from pickup to drop-off on the Mobile App."
          >
            <div className="flex flex-1 items-end justify-center">
              <Image
                src="/solutions/pickup_details.png"
                alt="pickup and delivery service"
                loading="lazy"
                width={352}
                height={394}
                className="w-full h-auto object-contain"
              />
            </div>
          </SolutionCard>
        </div>
      </div>
    </section>
  );
}
