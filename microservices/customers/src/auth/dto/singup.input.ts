import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SingupInput {
    @Field({ description: 'Customer name', nullable: false })
    name: string;

    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Field({ description: 'Password passport', nullable: false })
    password: string;
}
