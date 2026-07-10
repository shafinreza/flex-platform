import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms applying to purchases made through the FLEX website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions">
      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">About FLEX</h2>
        <p className="mt-3">
          eatflex.uk is operated by SharkX Ltd, trading as FLEX. You can contact
          us at{" "}
          <a className="font-black underline" href="mailto:team@eatflex.uk">
            team@eatflex.uk
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Products and availability
        </h2>
        <p className="mt-3">
          Product descriptions, weights, ingredients and images are provided
          as accurately as reasonably possible. Packaging may vary. All orders
          are subject to availability and acceptance.
        </p>
        <p>
          FLEX Natural Smooth Peanut Butter contains peanuts. Always review the
          packaging and allergen information before consumption.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Prices and payment
        </h2>
        <p className="mt-3">
          Prices are shown in pounds sterling and include applicable VAT where
          required. Payment is processed securely by Stripe. Your order is
          confirmed once payment has been successfully authorised.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">Delivery</h2>
        <p className="mt-3">
          Delivery options and charges are displayed during checkout. Standard
          UK delivery is currently £1.99. Express delivery may be available for
          an additional charge. Orders containing six or more jars qualify for
          free standard UK delivery.
        </p>
        <p>
          Delivery estimates are estimates rather than guaranteed arrival
          dates. Please contact us if your order is delayed or missing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Cancellations, returns and refunds
        </h2>
        <p className="mt-3">
          Your statutory rights are not affected. Please read our{" "}
          <a className="font-black underline" href="/returns">
            Returns & Refund Policy
          </a>{" "}
          for full instructions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Faulty or incorrect products
        </h2>
        <p className="mt-3">
          Contact us promptly if your order is damaged, faulty, unsafe,
          materially different from its description or incorrect. We may ask
          for photographs and order information so we can resolve the issue.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Liability
        </h2>
        <p className="mt-3">
          Nothing in these terms excludes liability where doing so would be
          unlawful. We are not responsible for losses that were not reasonably
          foreseeable when the contract was formed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Governing law
        </h2>
        <p className="mt-3">
          These terms are governed by the laws of England and Wales. Consumers
          may also have rights to bring proceedings in other parts of the
          United Kingdom where applicable.
        </p>
      </section>
    </LegalPage>
  );
}
