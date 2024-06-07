/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Course";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fio" TEXT NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateTo" DATETIME NOT NULL,
    "guests" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "totalSum" INTEGER NOT NULL,
    "roomsId" INTEGER NOT NULL,
    CONSTRAINT "booking_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_booking" ("dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "roomsId", "totalSum") SELECT "dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "roomsId", "totalSum" FROM "booking";
DROP TABLE "booking";
ALTER TABLE "new_booking" RENAME TO "booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
