import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-4xl font-black">FLEX</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/60">
            Natural peanut butter from 100% roasted peanuts. No palm oil. No
            added sugar.
          </p>
        </div>

        <FooterCol title="Shop" links={["Shop", "Bundles", "Recipes"]} />
        <FooterCol title="Company" links={["About FLEX", "Contact", "FAQ"]} />
        <FooterCol title="Legal" links={["Privacy Policy", "Terms & Conditions", "Cookies"]} />
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-sm text-white/40">
        © 2026 FLEX. SharkX Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.22em]">{title}</h3>
      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <Link key={link} href="#" className="block text-white/70 hover:text-white">
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
