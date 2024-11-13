"use client";
import { metadata } from "./metadata";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Sidebar } from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = !pathname.startsWith("/api");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex">
              {showSidebar && <Sidebar />}
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
