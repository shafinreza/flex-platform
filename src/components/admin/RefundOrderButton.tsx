"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RefundOrderButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function refundOrder() {
    if (!window.confirm("Refund this order in Stripe and mark it as refunded?")) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/orders/${orderId}/refund`, {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Refund failed");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      {error && (
        <p className="rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={refundOrder}
        disabled={loading}
        className="w-full rounded-full bg-red-600 px-5 py-4 text-sm font-black text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Refunding..." : "Cancel & Refund Order"}
      </button>
    </div>
  );
}
