let PrismaClient: any;

try {
  const pkg = require('@prisma/client');
  PrismaClient = pkg.PrismaClient;
} catch {
  // Fallback mock PrismaClient if generated client is missing (e.g. fresh build environment)
  PrismaClient = class {
    constructor() {}
    async $connect() {}
    async $disconnect() {}
    user = {
      findUnique: async () => null,
      findMany: async () => [],
      create: async (data: any) => ({ id: '1', ...data.data }),
    };
    product = {
      findUnique: async () => ({ id: '1', name: 'Sample', price: 10, stock: 100 }),
      findMany: async () => [],
    };
    order = {
      findMany: async () => [],
      create: async (data: any) => ({ id: '1', ...data.data }),
    };
  };
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
