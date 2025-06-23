-- CreateEnum
CREATE TYPE "BountyStatus" AS ENUM ('CREATED', 'POSTED', 'ACCEPTED');

-- AlterTable
ALTER TABLE "Bounty" ADD COLUMN     "status" "BountyStatus" NOT NULL DEFAULT 'CREATED';
