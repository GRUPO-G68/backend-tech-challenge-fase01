import { Module } from '@nestjs/common';
import { ClientController } from './adapters/client/client.controller';
import { OrderController } from './adapters/order/order.controller';
import { ProductController } from './adapters/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepositoryAdapter } from './adapters/client/client.repository';
import { Client } from './domain/entities/client.entity';
import { Order } from './domain/entities/order.entity';
import { OrderRepositoryAdapter } from './adapters/order/order.repository';
import { Product } from './domain/entities/product.entity';
import { ProductRepositoryAdapter } from './adapters/product/product.repository';
import { OrderItem } from './domain/entities/order-item.entity';
// @todo trocar os dados do banco fixos por variaveis de ambiente
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tech@123',
      database: 'tech_challenge',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Client, Order, OrderItem, Product]),
  ],
  controllers: [ClientController, OrderController, ProductController],
  providers: [ClientRepositoryAdapter, OrderRepositoryAdapter, ProductRepositoryAdapter],
})
export class AppModule {}