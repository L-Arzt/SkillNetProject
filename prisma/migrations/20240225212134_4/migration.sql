/*
  Warnings:

  - Added the required column `peopleMax` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "peopleMax" INTEGER NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_course" ("author", "description", "id", "name", "price", "topic") SELECT "author", "description", "id", "name", "price", "topic" FROM "course";
DROP TABLE "course";
ALTER TABLE "new_course" RENAME TO "course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
