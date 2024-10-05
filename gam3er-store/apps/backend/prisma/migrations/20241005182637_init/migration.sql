/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviewVideo" TEXT NOT NULL,
    "tags" TEXT[],
    "basePrice" DOUBLE PRECISION NOT NULL,
    "promotionalPrice" DOUBLE PRECISION NOT NULL,
    "lowestPrice" DOUBLE PRECISION NOT NULL,
    "highestPrice" DOUBLE PRECISION NOT NULL,
    "averagePrice" DOUBLE PRECISION NOT NULL,
    "specs" JSONB NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "deliveryId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryOrder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "DeliveryOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_deliveryId_key" ON "Order"("deliveryId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "DeliveryOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
