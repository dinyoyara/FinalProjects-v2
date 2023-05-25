import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Movement } from './entities/movement.entity';
import { MovementsService } from './movements.service';
import { MovementsResolver } from './resolvers/movements.resolver';
import { Warehouse } from '../warehouses/entities/warehouse.entity';
import { WarehousesModule } from 'src/warehouses/warehouses.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Warehouse]),
        TypeOrmModule.forFeature([Movement]),
        forwardRef(() => WarehousesModule)
    ],
    providers: [MovementsResolver, MovementsService],
    exports: [MovementsService]
})
export class MovementsModule {}
