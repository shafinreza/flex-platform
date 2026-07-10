import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Returns & Refund Policy",
  description:
    "Information about FLEX order cancellations, returns, damaged products and refunds.",
  alternates: {
    canonical: "/returns",
  },
};

export default function ReturnsPage() {
  return (
    <LegalPage eyebrow="Customer care" title="Returns & Refunds">
      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Changed your mind?
        </h2>
        <p className="mt-3">
          Contact us within 14 days of receiving your order if you wish to
          cancel. After notifying us, return eligible items within a further 14
          days.
        </p>
        <p>
          For food safety and hygiene reasons, products must be unopened,
          unused, sealed and in a resaleable condition. We cannot accept
          change-of-mind returns for products whose seal has been broken.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Damaged, faulty or incorrect orders
        </h2>
        <p className="mt-3">
          Email us as soon as possible with your order number and photographs.
          We will assess the issue and arrange an appropriate replacement or
          refund.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Return delivery costs
        </h2>
        <p className="mt-3">
          You are normally responsible for return postage where you have
          changed your mind. FLEX will cover reasonable return costs where the
          product is faulty, damaged or incorrect.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">Refund timing</h2>
        <p className="mt-3">
          Approved refunds are issued to the original payment method. Banks and
          card providers may take approximately 5–10 working days to display
          the refund after it has been processed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-[#173b2f]">
          Request a return
        </h2>
        <p className="mt-3">
          Email{" "}
          <a className="font-black underline" href="mailto:team@eatflex.uk">
            team@eatflex.uk
          </a>{" "}
          with your order number, name and reason for the request. Do not return
          a parcel until we have replied with instructions.
        </p>
      </section>
    </LegalPage>
  );
}
