import Navigation from "./navigation";

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F4E3]">
      <div className="flex-shrink-0">
        <Navigation />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
