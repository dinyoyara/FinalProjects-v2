import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';

import { Warehouse } from '../entities/warehouse.entity';
import { WarehousesService } from '../warehouses.service';
import { CreateWarehouseInput } from '../dto/create-warehouse.input';
import { UpdateWarehouseInput } from '../dto/update-warehouse.input';
import { Customer } from '../entities/customer.entity';
import { CurrentUserId } from '../../decorators/current-user.decorator';
import { MovementsService } from 'src/movements/movements.service';
import { Movement } from 'src/movements/entities/movement.entity';

@Resolver(() => Warehouse)
export class WarehousesResolver {
    constructor(
        private readonly warehouseService: WarehousesService,
        private readonly movementsService: MovementsService
    ) {}

    @Mutation(() => Warehouse)
    createWarehouse(@Args('createWarehouseInput') input: CreateWarehouseInput, @CurrentUserId() customerId: string) {
        return this.warehouseService.createAsync(input, customerId);
    }

    @Mutation(() => Warehouse)
    updateWarehouse(@Args('updateWarehouseInput') input: UpdateWarehouseInput) {
        return this.warehouseService.update(input);
    }

    @Mutation(() => Warehouse)
    deleteWarehouse(@Args('id') id: string) {
        return this.warehouseService.removeAsync(id);
    }

    @Query(() => Warehouse, { name: 'warehouse' })
    findOneWarehouse(@Args('id') id: string) {
        return this.warehouseService.findOneAsync(id);
    }

    @Query(() => [Warehouse], { name: 'warehouses' })
    findAllWarehouses(@CurrentUserId() customerId: string) {
        return this.warehouseService.findAllByCustomerAsync(customerId);
    }

    @ResolveField(() => Customer)
    customer(@Parent() warehouse: Warehouse): any {
        return {
            _typeName: 'Customer',
            id: warehouse.customerId
        };
    }

    @ResolveField(() => [Movement])
    exportedMovements(@Parent() warehouse: Warehouse) {
        return this.movementsService.findAllExportedByWarehouseAsync(warehouse.id);
    }

    @ResolveField(() => [Movement])
    importedMovements(@Parent() warehouse: Warehouse) {
        return this.movementsService.findAllImportedByWarehouseAsync(warehouse.id);
    }
}
