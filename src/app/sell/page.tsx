import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Create a new product listing with photos, price in IDR, category, description, and stock quantity

export const dynamic = 'force-dynamic';

export default async function NewProductPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">New Product</h1>
        <p className="text-slate-500">Create a new product listing with photos, price in IDR, category, description, and stock quantity</p>
      </main>
    </div>
  );
}
