import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
    @Field({ description: 'Customer name', nullable: false })
    name: string;

    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Field({ description: 'Customer passport', nullable: false })
    passport: string;
}
