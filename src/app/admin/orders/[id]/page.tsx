import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MarkAsShippedButton from "@/components/admin/MarkAsShippedButton";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminOrderDetailPage({ params }: PageProps) {
  const { id } = await params;

  const order = await prisma.orders.findUnique({
    where: { id },
    include: {
      customers: true,
      order_items: { include: { products: true } },
    },
  });

  if (!order) notFound();

  return (
    <main className="min-h-screen bg-[#f4f6f3] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/admin/orders" className="font-black text-[#6f855f]">
          ← Back to orders
        </Link>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white p-8">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
            Order Details
          </p>

          <h1 className="text-5xl font-black">
            #{order.id.slice(0, 8).toUpperCase()}
          </h1>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Info title="Payment" value={order.payment_status || "Unknown"} />
            <Info title="Fulfilment" value={order.fulfilment_status || "Pending"} />
            <Info
              title="Date"
              value={
                order.created_at
                  ? new Date(order.created_at).toLocaleString("en-GB")
                  : "No date"
              }
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-black">Items</h2>

              <div className="mt-6 divide-y divide-black/10">
                {order.order_items.map((item) => (
                  <div key={item.id} className="flex justify-between gap-6 py-5">
                    <div>
                      <p className="font-black">{item.products?.name || "Product"}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Qty: {item.quantity || 0}
                      </p>
                    </div>

                    <p className="font-black">
                      £{Number(item.price || 0).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-black">Shipping Address</h2>

              <div className="mt-5 space-y-1 text-slate-600">
                <p className="font-bold text-[#0f1720]">
                  {order.recipient_name || "No recipient name"}
                </p>
                <p>{order.address_line1 || "No address line 1"}</p>
                {order.address_line2 && <p>{order.address_line2}</p>}
                <p>
                  {[order.city, order.county].filter(Boolean).join(", ")}
                </p>
                <p>{order.postcode}</p>
                <p>{order.country}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-black">Customer</h2>
              <div className="mt-5 space-y-2 text-slate-600">
                <p className="font-bold text-[#0f1720]">
                  {order.customers?.first_name || "Customer"}{" "}
                  {order.customers?.last_name || ""}
                </p>
                <p>{order.customers?.email}</p>
                {order.customers?.phone && <p>{order.customers.phone}</p>}
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-black">Summary</h2>
              <div className="mt-5 space-y-3">
                <Row label="Subtotal" value={`£${Number(order.subtotal || 0).toFixed(2)}`} />
                <Row label="Delivery" value={`£${Number(order.delivery || 0).toFixed(2)}`} />
                <div className="border-t border-black/10 pt-4">
                  <Row label="Total" value={`£${Number(order.total || 0).toFixed(2)}`} strong />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-black">Tracking</h2>

              {order.tracking_number || order.tracking_url || order.shipped_at ? (
                <div className="mt-5 space-y-3 text-sm">
                  {order.tracking_number && (
                    <Row label="Tracking number" value={order.tracking_number} />
                  )}

                  {order.tracking_url && (
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Tracking URL</span>
                      <a
                        href={order.tracking_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-black text-[#6f855f]"
                      >
                        Open link
                      </a>
                    </div>
                  )}

                  {order.shipped_at && (
                    <Row
                      label="Shipped at"
                      value={new Date(order.shipped_at).toLocaleString("en-GB")}
                    />
                  )}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-600">
                  No tracking details added yet.
                </p>
              )}
            </div>

            {order.fulfilment_status !== "Shipped" && (
              <div className="rounded-3xl border border-black/10 bg-white p-8">
                <h2 className="text-2xl font-black">Fulfilment</h2>
                <p className="mt-2 mb-5 text-sm text-slate-600">
                  Once packed and dispatched, mark this order as shipped.
                </p>
                <MarkAsShippedButton orderId={order.id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f4f6f3] p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}

function Row({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 ${strong ? "text-xl font-black" : ""}`}>
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-black">{value}</span>
    </div>
  );
}
