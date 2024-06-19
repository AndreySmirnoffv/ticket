-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT,
    "name" TEXT,
    "guiltyFrom" INTEGER,
    "guiltyTill" INTEGER,
    "clas" INTEGER,
    "person" INTEGER
);
INSERT INTO "new_User" ("clas", "email", "gender", "guiltyFrom", "guiltyTill", "id", "name", "password", "person") SELECT "clas", "email", "gender", "guiltyFrom", "guiltyTill", "id", "name", "password", "person" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
