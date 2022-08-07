-- CreateTable
CREATE TABLE "fighters" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "movie" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "endurance" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "fighters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fighters_name_key" ON "fighters"("name");
