import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
  const customers = await prisma.customers.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      orders: true,
    },
  });

  return (
    <main className="px-6 py-8 lg:px-10">
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
          FLEX Admin
        </p>
        <h1 className="mt-2 text-5xl font-black tracking-[-0.06em]">
          Customers
        </h1>
        <p className="mt-3 text-slate-600">
          View customers and their order history.
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-sm">
        {customers.length === 0 ? (
          <div className="p-10 text-center">
            <h2 className="text-2xl font-black">No customers yet</h2>
            <p className="mt-2 text-slate-600">
              Customers will appear here after checkout.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-black/10">
            {customers.map((customer) => {
              const totalSpend = customer.orders.reduce(
                (sum, order) => sum + Number(order.total || 0),
                0
              );

              return (
                <div
                  key={customer.id}
                  className="grid gap-5 p-6 md:grid-cols-[1fr_1fr_.7fr_.7fr] md:items-center"
                >
                  <div>
                    <p className="font-black">
                      {customer.first_name || "Customer"} {customer.last_name || ""}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {customer.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-bold">{customer.phone || "—"}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Orders</p>
                    <p className="font-black">{customer.orders.length}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Lifetime spend</p>
                    <p className="font-black">£{totalSpend.toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Link
        href="/admin"
        className="mt-8 inline-block font-black text-[#6f855f]"
      >
        ← Back to dashboard
      </Link>
    </main>
  );
}
