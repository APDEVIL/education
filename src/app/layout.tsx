"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { ReactNode } from "react"; // ✅ type-only import
import "@/styles/globals.css"; // Your global styles
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Education & Learning Platform</title>
      </head>
      <body className={inter.className}>
        <TRPCReactProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}