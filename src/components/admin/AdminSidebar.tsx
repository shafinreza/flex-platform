import Link from "next/link";
import {
  BarChart3,
  Boxes,
  Gauge,
  Mail,
  Package,
  Settings,
  ShoppingBag,
  Tags,
  Truck,
  Users,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Gauge },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/inventory", label: "Inventory", icon: Boxes },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/discounts", label: "Discounts", icon: Tags },
  { href: "/admin/emails", label: "Emails", icon: Mail },
  { href: "/admin/fulfilment", label: "Fulfilment", icon: Truck },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-black/10 bg-[#0f1720] px-5 py-6 text-white lg:block">
      <Link href="/admin" className="block">
        <div className="rounded-3xl bg-white px-5 py-5 text-[#0f1720]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6f855f]">
            FLEX
          </p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
            Admin OS
          </h2>
        </div>
      </Link>

      <nav className="mt-8 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm font-black">Launch mode</p>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Website live. Payments active. Next: refunds, products and Mintsoft.
        </p>
      </div>
    </aside>
  );
}
