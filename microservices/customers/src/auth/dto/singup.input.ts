import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class SingupInput {
    @Length(2)
    @Field({ description: 'Customer name', nullable: false })
    name: string;

    @IsEmail()
    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Length(5)
    @Field({ description: 'Customer password', nullable: false })
    password: string;
}
