"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-t">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm flex-1">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <a href="/cookie-policy" className="underline hover:text-primary">
            Learn more
          </a>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
