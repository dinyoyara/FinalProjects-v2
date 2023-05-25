import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { Product } from '../entities/product.entity';
import { MovementsService } from '../movements.service';
import { Movement } from '../entities/movement.entity';

@Resolver(() => Product)
export class UsersResolver {
    constructor(private readonly movementsService: MovementsService) {}

    @ResolveField(() => [Movement])
    movements(@Parent() product: Product) {
        return this.movementsService.findAllByProductAsync(product.id);
    }
}
