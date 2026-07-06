import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("flex_admin")?.value === "true";

  if (!isAuthed) {
    redirect("/login");
  }

  return children;
}
