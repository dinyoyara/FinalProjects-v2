import { CreateCustomerInput } from './singup.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Field({ description: 'Customer passport', nullable: false })
    passport: string;
}
