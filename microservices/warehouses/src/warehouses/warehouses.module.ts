import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Warehouse } from './entities/warehouse.entity';
import { WarehousesService } from './warehouses.service';
import { WarehousesResolver } from './resolvers/warehouse.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Warehouse])],
    providers: [WarehousesResolver, WarehousesService]
})
export class WarehousesModule {}
