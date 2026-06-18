import { redirect } from 'next/navigation';


// Order success page showing order ID, items purchased, total in IDR, and estimated delivery info


export default async function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Order Confirmation</h1>
        <p className="text-slate-500">Order success page showing order ID, items purchased, total in IDR, and estimated delivery info</p>
      </main>
    </div>
  );
}
