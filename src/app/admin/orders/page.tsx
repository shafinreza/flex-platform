import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.orders.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      customers: true,
      order_items: {
        include: {
          products: true,
        },
      },
    },
  });

  return (
    <main className="min-h-screen bg-[#f4f6f3] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
              FLEX Admin
            </p>

            <h1 className="text-5xl font-black">Orders</h1>

            <p className="mt-3 text-slate-600">
              View and manage website orders.
            </p>
          </div>

          <AdminLogoutButton />
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
          {orders.length === 0 ? (
            <div className="p-10 text-center">
              <h2 className="text-2xl font-black">No orders yet</h2>
              <p className="mt-2 text-slate-600">
                Orders will appear here after successful Stripe checkout.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-black/10">
              {orders.map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/orders/${order.id}`}
                  className="block p-6 transition hover:bg-[#f7f9f6]"
                >
                  <div className="grid gap-5 md:grid-cols-[1.2fr_1fr_1fr_1fr_auto] md:items-center">
                    <div>
                      <p className="font-black">
                        #{order.id.slice(0, 8).toUpperCase()}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {order.created_at
                          ? new Date(order.created_at).toLocaleString("en-GB")
                          : "No date"}
                      </p>
                    </div>

                    <div>
                      <p className="font-bold">
                        {order.customers?.first_name || "Customer"}{" "}
                        {order.customers?.last_name || ""}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {order.customers?.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Items</p>
                      <p className="font-bold">
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

                    <div>
                      <span className="rounded-full bg-[#eef7ec] px-4 py-2 text-sm font-black text-[#6f855f]">
                        {order.fulfilment_status || "Pending"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
