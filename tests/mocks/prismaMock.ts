import '@prisma/client';
export const prismaMock = {
  course: {
    findMany: jest.fn(() => []),
  },
};

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => prismaMock),
}));
