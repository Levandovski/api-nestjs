import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderMode: typeof Order,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderMode.create({
      amout: createOrderDto.amount,
    });
  }

  findAll() {
    return this.orderMode.findAll();
  }

  findOne(id: string) {
    return this.orderMode.findByPk(id, { rejectOnEmpty: true });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderMode.findByPk(id, { rejectOnEmpty: true });
    order.update({ amout: updateOrderDto.amount });
    return order;
  }

  async remove(id: string) {
    const order = await this.orderMode.findByPk(id, { rejectOnEmpty: true });
    order.destroy();
  }
}
