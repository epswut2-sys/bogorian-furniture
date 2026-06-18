import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Manage all seller product listings: edit details, update stock, pause or delete listings

export const dynamic = 'force-dynamic';

export default async function MyProductsPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">My Products</h1>
        <p className="text-slate-500">Manage all seller product listings: edit details, update stock, pause or delete listings</p>
      </main>
    </div>
  );
}
