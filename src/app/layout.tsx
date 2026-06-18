import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { PostHogProvider } from './providers';
import SetupRequired from '@/components/SetupRequired';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bogorian Furniture',
  description: 'Rak dinding & furnitur minimalis langsung dari pengrajin lokal',
};

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured =
  !!clerkPublishableKey &&
  !clerkPublishableKey.includes('placeholder') &&
  /^pk_(test|live)_/.test(clerkPublishableKey);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {isClerkConfigured ? (
        <ClerkProvider>
          <body className={inter.className}><PostHogProvider>{children}</PostHogProvider></body>
        </ClerkProvider>
      ) : (
        <body className={inter.className}>
          <SetupRequired
            productName="Bogorian Furniture"
            missing={[
              { key: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', label: 'Clerk publishable key', helpUrl: 'https://dashboard.clerk.com/last-active?path=api-keys' },
              { key: 'CLERK_SECRET_KEY', label: 'Clerk secret key', helpUrl: 'https://dashboard.clerk.com/last-active?path=api-keys' },
            ]}
          />
        </body>
      )}
    </html>
  );
}
