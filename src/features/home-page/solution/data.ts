export interface Solution {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  link?: { label: string };
  layoutType?: "staggered" | "centered";
}

export const solutions: Solution[] = [
  {
    title: "x",
    description:
      "Place and schedule laundry orders, top up your wallet and make payments, and track your order status in real time.",
    image1: "/solutions/create_account.png",
    image2: "/solutions/order_details.png",
    imageAlt1: "Mobile app create account screen",
    imageAlt2: "Mobile app order details screen",
    layoutType: "staggered",
  },
  {
    title: "Orders & Sales management",
    description:
      "Create and manage orders with ease, track daily revenue and transactions, and automate receipts and reporting.",
    image1: "/solutions/orders_sales_1.png",
    image2: "/solutions/orders_sales_2.png",
    imageAlt1: "Order management dashboard with unit cost panel",
    imageAlt2: "Order management dashboard with unit cost panel",
  },
  {
    title: "Inventory management",
    description:
      "Monitor detergents and materials, receive low-stock alerts, and track usage efficiently.",
    image1: "/solutions/inventory_1.png",
    image2: "/solutions/inventory_2.png",
    imageAlt1: "Inventory stat cards: total, sales and non-sales",
    imageAlt2: "Inventory stat cards: total, sales and non-sales",
  },
  {
    title: "Pickup & Delivery service",
    description:
      "Schedule collections and track every order from pickup to drop-off on the Mobile App",
    image1: "/solutions/pickup_1.png",
    image2: "/solutions/pickup_2.png",
    imageAlt1: "Pickup details and schedule cards",
    imageAlt2: "Pickup details and schedule cards",
    link: { label: "Pickup & Delivery service" },
  },
];
