import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Members MVP',
  description: 'Base MVP com Next.js, Prisma e PostgreSQL'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
