import Sidebar from "./sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex bg-[#F8F4E3]">
      <Sidebar />
      <div className="flex-grow border-l border-black border-opacity-5 overflow-y-auto">{children}</div>
    </div>
  );
}
