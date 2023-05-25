import { Resolver, Query, Mutation, Args, ResolveReference } from '@nestjs/graphql';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Mutation(() => Product)
    createProduct(@Args('createProductInput') input: CreateProductInput) {
        return this.productsService.create(input);
    }

    @Query(() => [Product], { name: 'products' })
    findAll() {
        return this.productsService.findAll();
    }

    @Query(() => Product, { name: 'product' })
    findOne(@Args('id') id: string) {
        return this.productsService.findOne(id);
    }

    @ResolveReference()
    resolveReference(reference: { _typename: string; id: string }): Promise<Product> {
        return this.productsService.findOne(reference.id);
    }
}
