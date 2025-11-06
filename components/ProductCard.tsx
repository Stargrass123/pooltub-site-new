import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '../types/product';

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.Handle}`} className="block border rounded-2xl p-4 hover:shadow-md transition">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <Image src={`/images/${p.Handle}.jpg`} alt={p.Product_Name} width={800} height={800}
               className="h-full w-full object-cover" />
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">{p.Category}</div>
        <div className="font-medium leading-snug">{p.Product_Name}</div>
        <div className="mt-1 text-lg font-semibold">${p.price.toFixed(2)}</div>
      </div>
    </Link>
  );
}
