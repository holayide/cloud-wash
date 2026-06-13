import Header from "@/features/header/header";
import Policy from "@/features/policy/policy";

export default function PolicyPage() {
  return (
    <div className="relative">
      {/* lg:bg-white/50 */}
      <Header variant="policy" />
      <Policy />
    </div>
  );
}
