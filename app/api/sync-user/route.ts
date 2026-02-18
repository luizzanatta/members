import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function POST() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const client = await clerkClient();
  const clerkUser = await client.users.getUser(userId);

  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    return NextResponse.json({ ok: false, error: 'Email not found' }, { status: 400 });
  }

  const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || null;

  await prisma.user.upsert({
    where: { clerkId: userId },
    update: {
      email,
      name
    },
    create: {
      clerkId: userId,
      email,
      name
    }
  });

  return NextResponse.json({ ok: true });
}
