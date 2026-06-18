import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Seller registration: store name, contact info, location, and first product listing guide

export const dynamic = 'force-dynamic';

export default async function SellerOnboardingPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Seller Onboarding</h1>
        <p className="text-slate-500">Seller registration: store name, contact info, location, and first product listing guide</p>
      </main>
    </div>
  );
}
