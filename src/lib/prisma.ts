// Mock or simple wrapper for Prisma Client if needed for pure local run without live Postgres running
export const prisma = {
  user: {
    findUnique: async () => null,
    create: async () => ({ id: '1', email: 'test@example.com', role: 'USER' }),
  },
  product: {
    findUnique: async () => ({ id: '1', name: 'Sample Product', price: 10.0 }),
  },
  order: {
    findMany: async () => [],
  },
} as any;
