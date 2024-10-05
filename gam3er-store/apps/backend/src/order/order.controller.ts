import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.prisma';
import { Order } from '@gstore/core';

@Controller('orders')
export class OrderController {
  constructor(private readonly repo: OrderPrisma) {}

  @Post()
  async save(@Body() order: Order) {
    return this.repo.save(order);
  }

  @Get()
  async findAllOrders() {
    return this.repo.findAll();
  }

  @Get(':id')
  async obterPedidoPorId(@Param('id') id: string) {
    return this.repo.findById(+id);
  }

  @Delete(':id')
  async excluirPedido(@Param('id') id: string) {
    return this.repo.delete(+id);
  }
}
