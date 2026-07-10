import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import CookieSettingsButton from "@/components/cookies/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information about essential and analytics cookies used by FLEX.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Cookie Policy">
      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          What cookies are
        </h2>
        <p className="mt-3">
          Cookies and similar technologies are small pieces of information used
          by websites to remember preferences, provide functionality and
          understand website usage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Essential cookies
        </h2>
        <p className="mt-3">
          These support core functions such as the shopping basket, checkout,
          security and administrator authentication. They cannot be disabled
          through our preference tool because the website may not work without
          them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Analytics cookies
        </h2>
        <p className="mt-3">
          With your consent, we use Google Analytics and Microsoft Clarity to
          understand website performance and how visitors interact with FLEX.
          These services are not loaded until analytics consent is given.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Changing your preferences
        </h2>
        <p className="mt-3">
          You can accept, reject or update analytics consent at any time.
        </p>

        <div className="mt-5">
          <CookieSettingsButton />
        </div>
      </section>
    </LegalPage>
  );
}
