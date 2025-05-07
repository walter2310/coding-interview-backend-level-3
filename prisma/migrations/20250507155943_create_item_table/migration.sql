-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40),
    "price" DOUBLE PRECISION,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
