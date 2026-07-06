import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-center">
      <h1 className="text-4xl font-bold">Checkout cancelled</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        No payment was taken. Your cart is still available.
      </p>

      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white"
      >
        Back to shop
      </Link>
    </main>
  );
}
