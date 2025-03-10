"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsOpen(true); // Show banner if no consent is saved
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto bg-gray-800 text-gray-300 rounded-md shadow-lg"
      >
        <DialogTitle className="sr-only">Cookie Preferences</DialogTitle>
        <div className="space-y-4 text-sm">
          <p>
            This website uses cookies to improve your experience and analyze
            site usage. By continuing, you agree to our{" "}
            <Link href="/cookie-policy" className="text-blue-400 underline">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={handleDecline}>
              Decline
            </Button>
            <Button onClick={handleAccept}>Accept</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
