import FlexButton from "@/components/ui/FlexButton";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-[72px]">
      <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-[62px] font-black leading-[.9] tracking-[-0.04em]">
            GET IN TOUCH
          </h2>

          <p className="max-w-[62ch] text-[#5c6773]">
            Have questions or want to partner with FLEX? Send us a message.
          </p>

          <div className="mt-5 rounded-xl border border-[rgba(111,133,95,.20)] bg-[rgba(111,133,95,.10)] p-4">
            <strong>We reply fast.</strong> Your message goes directly to{" "}
            <strong>team@eatflex.uk</strong>.
          </div>
        </div>

        <form className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border p-3" placeholder="Full name" />
            <input className="rounded-xl border p-3" placeholder="Email" />
          </div>

          <textarea
            className="mt-4 min-h-36 w-full rounded-xl border p-3"
            placeholder="How can we help?"
          />

          <FlexButton className="mt-4 w-full">Send Message</FlexButton>
        </form>
      </div>
    </section>
  );
}
