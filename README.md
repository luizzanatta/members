# Members MVP Infra

Base de projeto com **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS** e **Prisma** conectado ao **PostgreSQL**.

## Requisitos

- Docker + Docker Compose
- Node.js 20+ (para comandos Prisma localmente)

## Variáveis de ambiente

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

## Rodando com Docker

```bash
docker compose up --build
```

A aplicação ficará disponível em `http://localhost:3000`.

## Banco de dados e Prisma

Com a stack em execução e o `.env` configurado, rode as migrações de desenvolvimento:

```bash
npx prisma migrate dev
```

## Rotas placeholder

- `/` Página inicial
- `/dashboard` Página de dashboard
