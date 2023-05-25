import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Warehouse } from './entities/warehouse.entity';
import { WarehousesService } from './warehouses.service';
import { WarehousesResolver } from './resolvers/warehouse.resolver';
import { MovementsModule } from 'src/movements/movements.module';

@Module({
    imports: [TypeOrmModule.forFeature([Warehouse]), forwardRef(() => MovementsModule)],
    providers: [WarehousesResolver, WarehousesService],
    exports: [WarehousesService]
})
export class WarehousesModule {}
