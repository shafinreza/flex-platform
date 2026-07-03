export default function TrustBar() {
  return (
    <section className="bg-white px-6 py-6 text-[#4C260F]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <div className="text-lg font-black">
          ★★★★★ <span className="text-[#0B864E]">4.3 Amazon Rating</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-black uppercase tracking-wide">
          <span>100% Roasted Peanuts</span>
          <span>•</span>
          <span>High Protein</span>
          <span>•</span>
          <span>No Added Sugar</span>
          <span>•</span>
          <span>No Palm Oil</span>
        </div>
      </div>
    </section>
  );
}