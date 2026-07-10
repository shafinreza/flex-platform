"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { CookieConsentValue } from "@/components/cookies/CookieConsent";

const STORAGE_KEY = "flex_cookie_consent";
const GA_ID = "G-TBFTRK9HK3";
const CLARITY_ID = "xj8uhijtb1";

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function readConsent() {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setEnabled(false);
        return;
      }

      try {
        const parsed = JSON.parse(stored) as CookieConsentValue;
        setEnabled(Boolean(parsed.analytics));
      } catch {
        setEnabled(false);
      }
    }

    function handleConsent(event: Event) {
      const customEvent = event as CustomEvent<CookieConsentValue>;
      setEnabled(Boolean(customEvent.detail?.analytics));
    }

    readConsent();

    window.addEventListener("flex:cookie-consent", handleConsent);

    return () => {
      window.removeEventListener("flex:cookie-consent", handleConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="flex-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>

      <Script id="flex-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
    </>
  );
}
