import { redirect } from 'next/navigation';


// Review cart items, quantities, and subtotal in IDR before proceeding to checkout


export default async function CartPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Cart</h1>
        <p className="text-slate-500">Review cart items, quantities, and subtotal in IDR before proceeding to checkout</p>
      </main>
    </div>
  );
}
