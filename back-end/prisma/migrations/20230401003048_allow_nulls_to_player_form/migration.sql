-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_playerFormId_fkey";

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "playerFormId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerFormId_fkey" FOREIGN KEY ("playerFormId") REFERENCES "PlayerForm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
