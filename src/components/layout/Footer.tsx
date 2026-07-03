export default function Footer() {
  return (
    <footer className="bg-[#4C260F] px-6 py-16 text-[#EFDFC7]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <h2 className="text-4xl font-black text-white">
            FLEX
          </h2>

          <p className="mt-3 max-w-sm text-[#EFDFC7]/80">
            Healthy peanut butter made for people who move.
          </p>
        </div>

        <div className="flex gap-8 font-semibold">
          <a href="/shop">Shop</a>
          <a href="/recipes">Recipes</a>
          <a href="/about">Our Story</a>
          <a href="/contact">Contact</a>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#EFDFC7]/20 pt-6 text-sm text-[#EFDFC7]/60">
        © 2026 FLEX. All rights reserved.
      </div>
    </footer>
  );
}