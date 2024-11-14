"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {/* Remove theme and toggleTheme props unless defined */}
          <main className="flex-grow container mx-auto p-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
