"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { RootState } from "@/store";

export default function WelcomeAlert() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if the alert has been dismissed in this session
    const isDismissed =
      localStorage.getItem("welcomeAlertDismissed") === "true";
    setIsVisible(isLoggedIn && !isDismissed);
  }, [isLoggedIn]);

  const dismissAlert = () => {
    setIsVisible(false);
    localStorage.setItem("welcomeAlertDismissed", "true");
  };

  const goToDashboard = () => {
    router.push("/dashboard");
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div>
          <p className="font-medium">
            Welcome back! You&apos;re logged in.{" "}
            <button
              onClick={goToDashboard}
              className="underline hover:text-indigo-100 transition-colors"
            >
              Go to your dashboard
            </button>
          </p>
        </div>
        <button
          onClick={dismissAlert}
          className="text-white hover:text-indigo-100 focus:outline-none"
          aria-label="Dismiss alert"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
