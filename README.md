# Members MVP Infra

Base de projeto com **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Clerk** para autenticação e **Prisma** conectado ao **PostgreSQL**.

## Requisitos

- Docker + Docker Compose
- Node.js 20+

## Configuração de ambiente

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Crie sua conta no Clerk e obtenha as chaves no dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

   Console Clerk: https://dashboard.clerk.com/

3. Preencha também a `DATABASE_URL` no `.env` (já há um valor de exemplo para uso com `docker-compose`).

## Rodando com Docker

Suba app + banco:

```bash
docker compose up --build
```

A aplicação ficará disponível em `http://localhost:3000`.

## Prisma

Com a stack em execução e `.env` configurado, rode a migração:

```bash
npx prisma migrate dev
```

## Rodando em desenvolvimento

```bash
npm install
npm run dev
```

## Fluxo de autenticação

- `/sign-in` para login
- `/sign-up` para cadastro
- `/dashboard` protegido por middleware do Clerk
- Ao abrir `/dashboard`, a rota `POST /api/sync-user` sincroniza usuário do Clerk no PostgreSQL via Prisma

## Rotas principais

- `/` Página inicial
- `/dashboard` Área autenticada
