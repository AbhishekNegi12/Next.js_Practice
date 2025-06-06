import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin : Facebook - Connect with friends and the world around you",
  description: "Admin : Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar</span>
      {children}
    </>
  );
}
