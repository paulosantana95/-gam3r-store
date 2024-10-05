import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductPrisma } from './product.prisma.ts';
import { Product } from '@gstore/core';

@Controller('products')
export class ProductController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.repo.findAll();
  }

  @Get(':id')
  findProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.findById(+id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
