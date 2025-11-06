import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductByHandle } from '../../../lib/products';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return getAllProducts().map(p => ({ handle: p.Handle }));
}

export default async function ProductPage(
  { params }: { params: Promise<{ handle: string }> }
) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={`/images/${product.Handle}.jpg`}
              alt={product.Product_Name}
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">{product.Category}</div>
          <h1 className="text-3xl font-semibold mt-1">{product.Product_Name}</h1>
          <div className="mt-2 text-2xl font-bold">${product.price.toFixed(2)}</div>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p>{product.Description_Short}</p>
            <p><span className="font-medium">Includes:</span> {product.Components_Included}</p>
            {product.sizeFt && <p><span className="font-medium">Size:</span> {product.sizeFt} ft</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
