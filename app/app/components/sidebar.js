"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/app" },
    { name: "Events", href: "/app/events" },
    { name: "Settings", href: "/app/settings" },
  ];

  return (
    <div
      className="flex-shrink-0 hidden md:flex flex-col"
      style={{
        width: collapsed ? 64 : 256,
        transition: "width 0.2s",
      }}
    >
      <div className="p-5 border-b border-black border-opacity-5">
        <img
          src="/brand/logo.png"
          alt="Rotini"
          className="h-5 object-contain"
        />
      </div>
      <div className="p-5 w-full">
        <ul className="flex flex-col gap-2 w-full">
          {links.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={link.href}
                className={`w-full px-3 py-1 rounded-md block ${
                  pathname === link.href
                    ? "bg-black bg-opacity-5"
                    : "opacity-50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
