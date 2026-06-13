import {
  BagIcon,
  MobileIcon,
  OperationsIcon,
  SlopeFilledIcon,
} from "@/components/icons/icons";

export const steps = [
  {
    icon: <BagIcon className="w-5 h-5 sm:w-9 sm:h-9" />,
    title: "Setup your business",
    description: "Register your laundromat and configure services",
  },
  {
    icon: <OperationsIcon className="w-5 h-5 sm:w-9 sm:h-9" />,
    title: "Manage Operations",
    description: "Handle staff, inventory, payroll, and sales via ERP",
  },
  {
    icon: <MobileIcon className="w-5 h-5 sm:w-9 sm:h-9" />,
    title: "Use mobile App",
    description: "Customers use App to place orders, schedule pickups, and pay",
  },
  {
    icon: <SlopeFilledIcon className="w-5 h-5 sm:w-9 sm:h-9" />,
    title: "Track and grow",
    description: "Use analytics to improve performance and scale",
  },
];
