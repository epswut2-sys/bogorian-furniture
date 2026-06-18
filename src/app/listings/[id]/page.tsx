import { redirect } from 'next/navigation';


// Product photos, description, price in IDR, stock count, seller info, and Add to Cart button


export default async function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Product Detail</h1>
        <p className="text-slate-500">Product photos, description, price in IDR, stock count, seller info, and Add to Cart button</p>
      </main>
    </div>
  );
}
