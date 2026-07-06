import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-center">
      <h1 className="text-4xl font-bold">Order confirmed 🎉</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Thank you for your FLEX order. You’ll receive your payment confirmation
        and delivery updates by email.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
