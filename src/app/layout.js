"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Default to dark theme
          enableSystem={false} // Disable system theme to avoid mismatches
          disableTransitionOnChange
        >
          <Header /> {/* Remove theme and toggleTheme props unless defined */}
          <main className="flex-grow container mx-auto m-0 p-0 ">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
