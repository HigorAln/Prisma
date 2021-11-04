-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "age" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
