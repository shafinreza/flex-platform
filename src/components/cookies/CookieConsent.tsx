"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type CookieConsentValue = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "flex_cookie_consent";

function saveConsent(analytics: boolean) {
  const value: CookieConsentValue = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));

  window.dispatchEvent(
    new CustomEvent("flex:cookie-consent", {
      detail: value,
    })
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setVisible(true);
        return;
      }

      try {
        const parsed = JSON.parse(stored) as CookieConsentValue;
        setAnalytics(Boolean(parsed.analytics));
      } catch {
        setVisible(true);
      }
    }, 0);

    function openSettings() {
      setManaging(true);
      setVisible(true);
    }

    window.addEventListener("flex:open-cookie-settings", openSettings);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("flex:open-cookie-settings", openSettings);
    };
  }, []);

  function acceptAll() {
    saveConsent(true);
    setAnalytics(true);
    setVisible(false);
    setManaging(false);
  }

  function rejectNonEssential() {
    saveConsent(false);
    setAnalytics(false);
    setVisible(false);
    setManaging(false);
  }

  function savePreferences() {
    saveConsent(analytics);
    setVisible(false);
    setManaging(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5">
      <section
        aria-label="Cookie preferences"
        className="mx-auto max-w-5xl rounded-[1.75rem] border border-[#173b2f]/15 bg-[#fffaf0] p-5 text-[#173b2f] shadow-2xl md:p-6"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6f855f]">
              Your privacy
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
              Cookies at FLEX
            </h2>

            <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-[#31574a]">
              Essential cookies keep the basket and checkout working. With your
              permission, analytics cookies help us understand how people use
              FLEX so we can improve the website.
            </p>

            <Link
              href="/cookies"
              className="mt-3 inline-block text-sm font-black underline underline-offset-4"
            >
              Read our Cookie Policy
            </Link>

            {managing ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f6ead8] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-black">Essential cookies</p>
                      <p className="mt-1 text-xs font-bold text-[#31574a]">
                        Basket, security and core website functions.
                      </p>
                    </div>

                    <span className="rounded-full bg-[#173b2f] px-3 py-1 text-xs font-black text-white">
                      Always on
                    </span>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-[#f6ead8] p-4">
                  <div>
                    <p className="font-black">Analytics cookies</p>
                    <p className="mt-1 text-xs font-bold text-[#31574a]">
                      Google Analytics and Microsoft Clarity.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="h-5 w-5 accent-[#173b2f]"
                  />
                </label>
              </div>
            ) : null}
          </div>

          <div className="grid gap-2 sm:grid-cols-3 lg:w-[510px]">
            {managing ? (
              <button
                type="button"
                onClick={savePreferences}
                className="h-12 rounded-full bg-[#173b2f] px-5 text-sm font-black text-[#f8ead4]"
              >
                Save preferences
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setManaging(true)}
                className="h-12 rounded-full border border-[#173b2f]/15 bg-white px-5 text-sm font-black"
              >
                Manage
              </button>
            )}

            <button
              type="button"
              onClick={rejectNonEssential}
              className="h-12 rounded-full border border-[#173b2f]/15 bg-white px-5 text-sm font-black"
            >
              Reject non-essential
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="h-12 rounded-full bg-[#173b2f] px-5 text-sm font-black text-[#f8ead4]"
            >
              Accept all
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
