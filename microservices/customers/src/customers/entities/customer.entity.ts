import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
export class Customer {
    @Directive('@key(fields: "id")')
    @Field((type) => ID, { description: 'Customer unique identifier' })
    id: string;

    @Field({ description: 'Customer name', nullable: false })
    name: string;

    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Field({ description: 'Customer passport', nullable: false })
    passport: string;
}
