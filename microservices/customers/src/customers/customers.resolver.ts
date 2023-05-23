import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { AuthService } from '../auth/auth.service';
import { Customer } from './entities/customer.entity';
import { SingupInput } from '../auth/dto/singup.input';
import { SinginInput } from '../auth/dto/singin.input';
import { Token } from 'src/auth/entities/token.entity';
import { CustomerService } from './customer.service';

@Resolver(() => Customer)
export class CustomersResolver {
    constructor(private readonly authService: AuthService, private readonly customerService: CustomerService) {}

    @Mutation(() => Customer)
    singup(@Args('singupInput') input: SingupInput) {
        return this.authService.createAsync(input);
    }

    @Mutation(() => Token)
    singin(@Args('singinInput') input: SinginInput) {
        return this.authService.loginAsync(input);
    }

    @ResolveReference()
    resolveReference(reference: { _typename: string; id: string }): Promise<Customer> {
        return this.customerService.findOne(reference.id);
    }
}
