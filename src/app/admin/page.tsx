import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Clock3,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const [
    totalOrders,
    todayOrders,
    readyToPack,
    shippedOrders,
    totalCustomers,
    totalProducts,
    allRevenue,
    todayRevenue,
    latestOrders,
  ] = await Promise.all([
    prisma.orders.count(),
    prisma.orders.count({
      where: {
        created_at: {
          gte: startOfToday,
        },
      },
    }),
    prisma.orders.count({
      where: {
        fulfilment_status: "Ready to Pack",
      },
    }),
    prisma.orders.count({
      where: {
        fulfilment_status: "Shipped",
      },
    }),
    prisma.customers.count(),
    prisma.products.count(),
    prisma.orders.aggregate({
      _sum: {
        total: true,
      },
    }),
    prisma.orders.aggregate({
      where: {
        created_at: {
          gte: startOfToday,
        },
      },
      _sum: {
        total: true,
      },
    }),
    prisma.orders.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 6,
      include: {
        customers: true,
        order_items: true,
      },
    }),
  ]);

  return (
    <main className="px-6 py-8 lg:px-10">
      <section className="rounded-[32px] border border-black/10 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
              Good to see you, Shaf
            </p>

            <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#0f1720] md:text-6xl">
              FLEX is live and ready to sell.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Track orders, revenue, customers and fulfilment from one clean
              control centre.
            </p>
          </div>

          <Link
            href="/admin/orders"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6f855f] px-6 py-4 text-sm font-black text-white transition hover:bg-[#5d714f]"
          >
            Manage orders
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenue today"
          value={`£${Number(todayRevenue._sum.total ?? 0).toFixed(2)}`}
          icon={<Banknote size={22} />}
          note="Live sales today"
        />

        <StatCard
          title="Orders today"
          value={todayOrders}
          icon={<ShoppingBag size={22} />}
          note={`${totalOrders} total orders`}
        />

        <StatCard
          title="Ready to pack"
          value={readyToPack}
          icon={<Clock3 size={22} />}
          note="Needs fulfilment"
        />

        <StatCard
          title="Customers"
          value={totalCustomers}
          icon={<Users size={22} />}
          note={`${totalProducts} products live`}
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_.8fr]">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.04em]">
                Latest orders
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Most recent website orders.
              </p>
            </div>

            <Link
              href="/admin/orders"
              className="text-sm font-black text-[#6f855f]"
            >
              View all
            </Link>
          </div>

          {latestOrders.length === 0 ? (
            <div className="p-10 text-center">
              <h3 className="text-xl font-black">No orders yet</h3>
              <p className="mt-2 text-sm text-slate-500">
                Orders will appear here after checkout.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-black/10">
              {latestOrders.map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/orders/${order.id}`}
                  className="grid gap-4 px-6 py-5 transition hover:bg-[#f7f9f6] md:grid-cols-[1fr_.7fr_.6fr_auto] md:items-center"
                >
                  <div>
                    <p className="font-black text-[#0f1720]">
                      #{order.id.slice(0, 8).toUpperCase()}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {order.customers?.first_name || "Customer"}{" "}
                      {order.customers?.last_name || ""}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Items</p>
                    <p className="font-black">
                      {order.order_items.reduce(
                        (total, item) => total + (item.quantity || 0),
                        0
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Total</p>
                    <p className="font-black">
                      £{Number(order.total || 0).toFixed(2)}
                    </p>
                  </div>

                  <StatusBadge status={order.fulfilment_status || "Pending"} />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Business snapshot
            </h2>

            <div className="mt-6 space-y-4">
              <MiniMetric
                label="All-time revenue"
                value={`£${Number(allRevenue._sum.total ?? 0).toFixed(2)}`}
              />
              <MiniMetric label="Total orders" value={totalOrders} />
              <MiniMetric label="Shipped orders" value={shippedOrders} />
              <MiniMetric label="Products" value={totalProducts} />
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-[#0f1720] p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                <Package size={22} />
              </div>
              <div>
                <h2 className="text-xl font-black">Next priority</h2>
                <p className="mt-1 text-sm text-white/60">
                  Orders V2: refunds, cancellations and notes.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/75">
              Once Orders V2 is live, you can manage real customer issues
              without leaving FLEX Admin.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
  note,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  note: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-500">{title}</p>
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef7ec] text-[#6f855f]">
          {icon}
        </div>
      </div>

      <p className="mt-5 text-4xl font-black tracking-[-0.05em] text-[#0f1720]">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">{note}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const shipped = status.toLowerCase() === "shipped";

  return (
    <span
      className={`rounded-full px-4 py-2 text-xs font-black ${
        shipped
          ? "bg-blue-50 text-blue-700"
          : "bg-[#eef7ec] text-[#6f855f]"
      }`}
    >
      {status}
    </span>
  );
}

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#f4f6f3] px-4 py-3">
      <span className="text-sm font-bold text-slate-500">{label}</span>
      <span className="font-black text-[#0f1720]">{value}</span>
    </div>
  );
}
