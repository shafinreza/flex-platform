import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MarkAsShippedButton from "@/components/admin/MarkAsShippedButton";
import RefundOrderButton from "@/components/admin/RefundOrderButton";

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

  const isRefunded = Boolean(order.refunded_at) || order.fulfilment_status === "Refunded";

  return (
    <main className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/admin/orders" className="font-black text-[#6f855f]">
          ← Back to orders
        </Link>

        <div className="mt-8 rounded-[32px] border border-black/10 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
            Order Details
          </p>

          <h1 className="text-5xl font-black tracking-[-0.06em]">
            #{order.id.slice(0, 8).toUpperCase()}
          </h1>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Info title="Payment" value={order.payment_status || "Unknown"} />
            <Info title="Fulfilment" value={order.fulfilment_status || "Pending"} />
            <Info title="Total" value={`£${Number(order.total || 0).toFixed(2)}`} />
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

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-6">
            <Panel title="Items">
              <div className="divide-y divide-black/10">
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
            </Panel>

            <Panel title="Shipping Address">
              <div className="space-y-1 text-slate-600">
                <p className="font-bold text-[#0f1720]">
                  {order.recipient_name || "No recipient name"}
                </p>
                <p>{order.address_line1 || "No address line 1"}</p>
                {order.address_line2 && <p>{order.address_line2}</p>}
                <p>{[order.city, order.county].filter(Boolean).join(", ")}</p>
                <p>{order.postcode}</p>
                <p>{order.country}</p>
              </div>
            </Panel>

            <Panel title="Timeline">
              <div className="space-y-4">
                <TimelineItem label="Order paid" done={order.payment_status === "paid"} />
                <TimelineItem label="Ready to pack" done={order.fulfilment_status === "Ready to Pack"} />
                <TimelineItem label="Shipped" done={Boolean(order.shipped_at)} />
                <TimelineItem label="Refunded" done={Boolean(order.refunded_at)} danger />
              </div>
            </Panel>
          </div>

          <div className="space-y-6">
            <Panel title="Customer">
              <div className="space-y-2 text-slate-600">
                <p className="font-bold text-[#0f1720]">
                  {order.customers?.first_name || "Customer"}{" "}
                  {order.customers?.last_name || ""}
                </p>
                <p>{order.customers?.email}</p>
                {order.customers?.phone && <p>{order.customers.phone}</p>}
              </div>
            </Panel>

            <Panel title="Payment Summary">
              <div className="space-y-3">
                <Row label="Subtotal" value={`£${Number(order.subtotal || 0).toFixed(2)}`} />
                <Row label="Delivery" value={`£${Number(order.delivery || 0).toFixed(2)}`} />

                <Row
                  label="Discount"
                  value={`-£${Number(order.discount_amount || 0).toFixed(2)}`}
                />

                {order.discount_code && (
                  <Row label="Coupon" value={order.discount_code} />
                )}

                <div className="border-t border-black/10 pt-4">
                  <Row label="Total paid" value={`£${Number(order.total || 0).toFixed(2)}`} strong />
                </div>
              </div>
            </Panel>

            <Panel title="Stripe">
              <div className="space-y-3 text-sm">
                <Row label="Session" value={order.stripe_session || "Missing"} />
                <Row label="Payment intent" value={order.stripe_payment_intent || "Missing"} />
              </div>
            </Panel>

            <Panel title="Tracking">
              {order.tracking_number || order.tracking_url || order.shipped_at ? (
                <div className="space-y-3 text-sm">
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
                <p className="text-sm text-slate-600">No tracking details added yet.</p>
              )}
            </Panel>

            {!isRefunded && order.fulfilment_status !== "Shipped" && (
              <Panel title="Fulfilment">
                <p className="mb-5 text-sm text-slate-600">
                  Once packed and dispatched, mark this order as shipped.
                </p>
                <MarkAsShippedButton orderId={order.id} />
              </Panel>
            )}

            {!isRefunded && (
              <Panel title="Refunds">
                <RefundOrderButton orderId={order.id} />
              </Panel>
            )}

            {isRefunded && (
              <Panel title="Refunded">
                <p className="text-sm font-bold text-red-700">
                  This order was refunded
                  {order.refunded_at
                    ? ` on ${new Date(order.refunded_at).toLocaleString("en-GB")}`
                    : ""}.
                </p>
              </Panel>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[32px] border border-black/10 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-black tracking-[-0.04em]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f4f6f3] p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 break-words font-black">{value}</p>
    </div>
  );
}

function Row({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className={`flex justify-between gap-4 ${strong ? "text-xl font-black" : ""}`}>
      <span className="text-slate-500">{label}</span>
      <span className="break-all text-right font-black">{value}</span>
    </div>
  );
}

function TimelineItem({
  label,
  done,
  danger = false,
}: {
  label: string;
  done: boolean;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-3 w-3 rounded-full ${
          done ? (danger ? "bg-red-600" : "bg-[#6f855f]") : "bg-slate-200"
        }`}
      />
      <span className={`text-sm font-bold ${done ? "text-[#0f1720]" : "text-slate-400"}`}>
        {label}
      </span>
    </div>
  );
}
