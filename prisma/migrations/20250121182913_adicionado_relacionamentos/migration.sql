/*
  Warnings:

  - You are about to drop the column `author` on the `books` table. All the data in the column will be lost.
  - Added the required column `category` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "books_name_author_idx";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "author",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_category_fkey" FOREIGN KEY ("category") REFERENCES "Categories"("category") ON DELETE RESTRICT ON UPDATE CASCADE;
