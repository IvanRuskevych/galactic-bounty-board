-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'HUNTER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'HUNTER';
