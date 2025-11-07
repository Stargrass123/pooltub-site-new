import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold">Warm water. Less power.</h1>
      <p className="mt-4 text-lg text-gray-600">
        Tailored insulation wraps and complete kits for stock-tank spas. 30-minute install. Real savings.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/products" className="rounded-xl bg-black text-white px-5 py-3 font-semibold">Shop</Link>
        <Link href="/calculator" className="rounded-xl border px-5 py-3 font-semibold">Savings Calculator</Link>
      </div>
    </div>
  );
}
