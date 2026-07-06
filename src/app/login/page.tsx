"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FlexButton from "@/components/ui/FlexButton";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setError("Incorrect password");
      return;
    }

    router.push("/admin/orders");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#f4f6f3] px-6 py-20">
      <form
        onSubmit={login}
        className="mx-auto max-w-md rounded-3xl border border-black/10 bg-white p-8"
      >
        <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
          FLEX Admin
        </p>

        <h1 className="text-4xl font-black">Login</h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="mt-8 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#6f855f]"
        />

        {error && <p className="mt-4 text-sm font-bold text-red-600">{error}</p>}

        <FlexButton className="mt-6 w-full" type="submit">
          Login
        </FlexButton>
      </form>
    </main>
  );
}
