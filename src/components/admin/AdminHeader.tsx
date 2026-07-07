import Link from "next/link";
import { Bell, ExternalLink } from "lucide-react";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f4f6f3]/90 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6f855f]">
            SharkX Ltd
          </p>
          <h1 className="text-xl font-black tracking-[-0.03em] text-[#0f1720]">
            FLEX Control Centre
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://www.eatflex.uk"
            target="_blank"
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-[#0f1720] transition hover:bg-[#eef1ec] md:flex"
          >
            View site
            <ExternalLink size={14} />
          </Link>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#0f1720]"
            aria-label="Notifications"
          >
            <Bell size={17} />
          </button>

          <AdminLogoutButton />
        </div>
      </div>
    </header>
  );
}
