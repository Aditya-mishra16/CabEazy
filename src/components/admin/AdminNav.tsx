"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, List, LogOut, Menu, X } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Enquiries", href: "/admin/enquiries", icon: List },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 h-16 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/admin" className="text-xl font-black text-white">
          Cab<span className="text-brandColor">Eazy</span>
          <span className="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">Admin</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                pathname === href
                  ? "bg-brandColor/15 text-brandColor"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Logout */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-400 hover:text-red-400 hover:bg-gray-800 transition disabled:opacity-50"
          >
            <LogOut className="w-4 h-4" />
            <span>{loggingOut ? "Signing out..." : "Sign Out"}</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-950 border-b border-gray-800 py-3 px-4 flex flex-col gap-1 md:hidden">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-semibold transition ${
                pathname === href
                  ? "bg-brandColor/15 text-brandColor"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:text-red-400 hover:bg-gray-800 transition text-left disabled:opacity-50"
          >
            <LogOut className="w-4 h-4" />
            <span>{loggingOut ? "Signing out..." : "Sign Out"}</span>
          </button>
        </div>
      )}
    </header>
  );
}
