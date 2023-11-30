import { PrismaClient } from '@prisma/client';

// globalThisにPrismaClient型のprismaプロパティを追加するための型拡張
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // global.prismaが未定義の場合、新しいPrismaClientインスタンスを割り当てます
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
