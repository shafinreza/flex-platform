"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderNotesForm({
  orderId,
  initialNotes,
}: {
  orderId: string;
  initialNotes: string;
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(initialNotes);
  const [saving, setSaving] = useState(false);

  async function saveNotes() {
    setSaving(true);

    await fetch(`/api/admin/orders/${orderId}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notes }),
    });

    router.refresh();
    setSaving(false);
  }

  return (
    <div className="space-y-4">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add internal notes..."
        className="min-h-32 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#6f855f]"
      />

      <button
        type="button"
        onClick={saveNotes}
        disabled={saving}
        className="rounded-full bg-[#6f855f] px-5 py-3 text-sm font-black text-white disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Notes"}
      </button>
    </div>
  );
}
