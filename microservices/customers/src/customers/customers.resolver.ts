import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/singup.input';
import { UpdateCustomerInput } from './dto/singin.input';

@Resolver(() => Customer)
export class CustomersResolver {
    constructor(private readonly customersService: CustomersService) {}

    @Mutation(() => Customer)
    singup(@Args('createCustomerInput') createCustomerInput: CreateCustomerInput) {
        return this.customersService.create(createCustomerInput);
    }
}
