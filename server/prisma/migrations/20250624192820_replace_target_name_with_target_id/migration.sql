/*
  Warnings:

  - You are about to drop the column `targetName` on the `Bounty` table. All the data in the column will be lost.
  - Added the required column `targetId` to the `Bounty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bounty" DROP COLUMN "targetName",
ADD COLUMN     "targetId" INTEGER NOT NULL;
