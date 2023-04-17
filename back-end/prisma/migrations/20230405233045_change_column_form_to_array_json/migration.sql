/*
  Warnings:

  - The `form` column on the `BaseForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `form` column on the `PlayerForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BaseForm" DROP COLUMN "form",
ADD COLUMN     "form" JSONB[];

-- AlterTable
ALTER TABLE "PlayerForm" DROP COLUMN "form",
ADD COLUMN     "form" JSONB[];
