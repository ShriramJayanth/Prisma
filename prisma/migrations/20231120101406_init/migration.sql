/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Email" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
