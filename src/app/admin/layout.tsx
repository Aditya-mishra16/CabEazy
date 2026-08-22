import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import AdminNav from "@/components/admin/AdminNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#F15533",
};

export const metadata: Metadata = {
  title: {
    default: "Cabeazy Admin Dashboard",
    template: "%s | Cabeazy Admin",
  },
  description: "Cabeazy Admin Dashboard — Manage enquiries and customer interactions.",
  robots: { index: false, follow: false },
  manifest: "/admin-manifest.json",
  icons: {
    apple: "/icons/apple-icon.png",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased">
        <AdminNav />
        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
