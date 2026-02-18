import { auth } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const headerStore = headers();
  const host = headerStore.get('host');
  const protocol = headerStore.get('x-forwarded-proto') ?? 'http';

  if (host) {
    await fetch(`${protocol}://${host}/api/sync-user`, {
      method: 'POST',
      headers: {
        cookie: headerStore.get('cookie') ?? ''
      },
      cache: 'no-store'
    });
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-4 p-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-slate-300">Área autenticada com sincronização de usuário.</p>
      <div className="rounded-md border border-slate-700 p-4 text-sm text-slate-200">
        <p>
          <span className="font-semibold">clerkId:</span> {userId}
        </p>
        <p>
          <span className="font-semibold">email:</span> {user?.email ?? '-'}
        </p>
        <p>
          <span className="font-semibold">user.id:</span> {user?.id ?? '-'}
        </p>
      </div>
    </main>
  );
}
