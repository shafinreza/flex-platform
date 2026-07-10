"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("flex:open-cookie-settings"))
      }
      className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
    >
      Manage cookie preferences
    </button>
  );
}
