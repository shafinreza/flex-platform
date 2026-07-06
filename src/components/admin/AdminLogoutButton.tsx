"use client";

import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black hover:bg-gray-100"
    >
      Logout
    </button>
  );
}
