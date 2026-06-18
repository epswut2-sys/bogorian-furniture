import { redirect } from 'next/navigation';


// Searchable, filterable product grid with category, price range, and sort filters in IDR


export default async function BrowsePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Browse</h1>
        <p className="text-slate-500">Searchable, filterable product grid with category, price range, and sort filters in IDR</p>
      </main>
    </div>
  );
}
