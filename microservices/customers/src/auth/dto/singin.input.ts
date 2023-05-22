import { SingupInput } from './singup.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class SinginInput extends PartialType(SingupInput) {
    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Field({ description: 'Customer password', nullable: false })
    password: string;
}
