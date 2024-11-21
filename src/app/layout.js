"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>TRUSTON | Innovative Web Solutions for Your Business</title>
        <meta
          name="description"
          content="TRUSTON delivers innovative web solutions including web development, automation, SEO optimization, and more. Experience fast, responsive, and user-friendly digital services tailored to your business needs."
        />
        <meta
          name="keywords"
          content="TRUSTON, web solutions, automation, SEO optimization, responsive design, cloud infrastructure, API integration, business services, innovative technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto m-0 p-0">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
