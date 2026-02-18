import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Members MVP</h1>
      <p className="text-slate-300">Página inicial placeholder para a aplicação.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-900"
        >
          Ir para dashboard
        </Link>
        <Link
          href="/sign-in"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-900"
        >
          Entrar
        </Link>
        <Link
          href="/sign-up"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-900"
        >
          Criar conta
        </Link>
      </div>
    </main>
  );
}
