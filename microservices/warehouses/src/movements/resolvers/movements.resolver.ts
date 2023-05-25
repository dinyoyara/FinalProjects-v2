import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
import { Movement } from '../entities/movement.entity';
import { MovementsService } from '../movements.service';
import { CreateMovementInput } from '../dto/create-movement.input';
import { Warehouse } from '../../warehouses/entities/warehouse.entity';
import { WarehousesService } from '../../warehouses/warehouses.service';

@Resolver(() => Movement)
export class MovementsResolver {
    constructor(
        private readonly movementsService: MovementsService,
        private readonly warehouseService: WarehousesService
    ) {}

    @Mutation(() => Movement)
    createMovement(@Args('createMovementInput') createMovementInput: CreateMovementInput) {
        return this.movementsService.createAsync(createMovementInput);
    }

    // @Query(() => [Movement], { name: 'movements' })
    // findAllWArehouseMovements(@Args('warehouseId') warehouseId: string) {
    //     return this.movementsService.findAllByWarehouseAsync(warehouseId);
    // }

    @ResolveField(() => Warehouse)
    exportedWarehouse(@Parent() movement: Movement): any {
        return this.warehouseService.findOneAsync(movement.exportedWarehouseId);
    }

    @ResolveField(() => Warehouse)
    importedWarehouse(@Parent() movement: Movement): any {
        return this.warehouseService.findOneAsync(movement.importedWarehouseId);
    }

    @ResolveField(() => Product)
    product(@Parent() movement: Movement) {
        return {
            _typeName: 'Product',
            id: movement.productId
        };
    }
}
