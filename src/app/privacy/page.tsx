import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FLEX and SharkX Ltd collect, use and protect personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy">
      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">Who we are</h2>
        <p className="mt-3">
          FLEX is a trading name of SharkX Ltd. This policy explains how we
          handle personal information when you visit eatflex.uk, contact us or
          place an order.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Information we collect
        </h2>
        <p className="mt-3">
          We may collect your name, email address, telephone number, delivery
          and billing address, order information, customer-service messages,
          device information and website usage data.
        </p>
        <p>
          Payment details are processed securely by Stripe. FLEX does not store
          your full payment-card number.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          How we use your information
        </h2>
        <p className="mt-3">
          We use personal information to process and deliver orders, provide
          customer support, prevent fraud, meet legal and accounting
          obligations, improve our website and send marketing communications
          where permitted.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Service providers
        </h2>
        <p className="mt-3">
          We use selected providers including Stripe for payments, Vercel for
          website hosting, Supabase for database and file storage, Resend for
          transactional email, and—where you consent—Google Analytics and
          Microsoft Clarity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Retention and security
        </h2>
        <p className="mt-3">
          We retain information only for as long as needed for the purposes
          described above, including legal, tax, accounting and
          customer-service requirements. We use reasonable organisational and
          technical safeguards to protect it.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">Your rights</h2>
        <p className="mt-3">
          Depending on the circumstances, you may have rights to access,
          correct, erase, restrict or object to the use of your personal
          information, and to request data portability.
        </p>
        <p>
          Contact us at{" "}
          <a className="font-black underline" href="mailto:team@eatflex.uk">
            team@eatflex.uk
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">Complaints</h2>
        <p className="mt-3">
          Please contact us first so we can try to resolve your concern. You
          also have the right to complain to the UK Information
          Commissioner&apos;s Office.
        </p>
      </section>
    </LegalPage>
  );
}
