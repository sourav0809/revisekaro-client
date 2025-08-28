import type { ReactNode } from "react";
import Sidebar from "../Sidebar";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
