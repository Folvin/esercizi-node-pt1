-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "game" VARCHAR(255) NOT NULL,
    "releaseYear" INTEGER NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
