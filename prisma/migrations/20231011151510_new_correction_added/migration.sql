-- AlterTable
ALTER TABLE `Post` MODIFY `published` INTEGER NOT NULL,
    ALTER COLUMN `publishedAt` DROP DEFAULT;
