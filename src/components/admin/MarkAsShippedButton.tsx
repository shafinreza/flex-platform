"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FlexButton from "@/components/ui/FlexButton";

export default function MarkAsShippedButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingUrl, setTrackingUrl] = useState("");
  const [error, setError] = useState("");

  async function markAsShipped() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/orders/${orderId}/ship`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber, trackingUrl }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Failed to update order");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <input
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Tracking number optional"
        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#6f855f]"
      />

      <input
        value={trackingUrl}
        onChange={(e) => setTrackingUrl(e.target.value)}
        placeholder="Tracking URL optional"
        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#6f855f]"
      />

      {error && (
        <p className="rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}

      <FlexButton onClick={markAsShipped} disabled={loading} className="w-full">
        {loading ? "Updating..." : "Mark as Shipped"}
      </FlexButton>
    </div>
  );
}
