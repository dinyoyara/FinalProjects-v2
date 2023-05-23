import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { Customer } from '../entities/customer.entity';
import { Warehouse } from '../entities/warehouse.entity';
import { WarehousesService } from '../warehouses.service';

@Resolver(() => Customer)
export class UsersResolver {
    constructor(private readonly warehouseService: WarehousesService) {}

    @ResolveField(() => [Warehouse])
    warehouses(@Parent() customer: Customer) {
        return this.warehouseService.findAllByCustomerAsync(customer.id);
    }
}
