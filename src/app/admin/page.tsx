import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [
    totalOrders,
    pendingOrders,
    totalCustomers,
    totalProducts,
    revenue,
    latestOrders,
  ] = await Promise.all([
    prisma.orders.count(),
    prisma.orders.count({
      where: {
        fulfilment_status: "Ready to Pack",
      },
    }),
    prisma.customers.count(),
    prisma.products.count(),
    prisma.orders.aggregate({
      _sum: {
        total: true,
      },
    }),
    prisma.orders.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 5,
      include: {
        customers: true,
      },
    }),
  ]);

  return (
    <main className="mx-auto max-w-7xl p-10">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">FLEX Dashboard</h1>
          <p className="mt-2 text-gray-500">
            Welcome back.
          </p>
        </div>

        <Link
          href="/admin/orders"
          className="rounded-full bg-[#77b255] px-6 py-3 font-bold text-white"
        >
          View Orders
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Revenue"
          value={`£${Number(revenue._sum.total ?? 0).toFixed(2)}`}
        />

        <Card
          title="Orders"
          value={totalOrders}
        />

        <Card
          title="Ready to Pack"
          value={pendingOrders}
        />

        <Card
          title="Customers"
          value={totalCustomers}
        />

      </div>

      <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Latest Orders
          </h2>

          <span className="text-sm text-gray-500">
            Products: {totalProducts}
          </span>
        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="pb-3">
                Customer
              </th>

              <th className="pb-3">
                Total
              </th>

              <th className="pb-3">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {latestOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b"
              >

                <td className="py-4">
                  {order.customers?.first_name} {order.customers?.last_name}
                </td>

                <td>
                  £{Number(order.total).toFixed(2)}
                </td>

                <td>
                  {order.fulfilment_status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="text-sm text-gray-500">
        {title}
      </div>

      <div className="mt-3 text-4xl font-black">
        {value}
      </div>
    </div>
  );
}
