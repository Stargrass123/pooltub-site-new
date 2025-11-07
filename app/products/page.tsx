import { getAllProducts } from '../../lib/products';
import ProductCard from '../../components/ProductCard';

export const dynamic = 'force-static';

export default function ProductsPage() {
  const products = getAllProducts();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.SKU} p={p} />
        ))}
      </div>
    </div>
  );
}
