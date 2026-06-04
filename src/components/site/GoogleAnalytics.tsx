import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const isGaId = (id?: string) => Boolean(id && /^G-[A-Z0-9]+$/i.test(id));

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let isLoaded = false;

const loadGoogleAnalytics = (measurementId: string) => {
  if (isLoaded || typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    isLoaded = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.id = "google-analytics-gtag";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId
  )}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  isLoaded = true;
};

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!import.meta.env.PROD || !isGaId(GA_MEASUREMENT_ID)) return;

    loadGoogleAnalytics(GA_MEASUREMENT_ID);

    const frame = window.requestAnimationFrame(() => {
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${location.pathname}${location.search}${location.hash}`,
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname, location.search]);

  return null;
};
