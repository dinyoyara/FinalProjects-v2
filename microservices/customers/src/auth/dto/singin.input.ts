import { IsEmail, Length } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SinginInput {
    @IsEmail()
    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Length(5)
    @Field({ description: 'Customer password', nullable: false })
    password: string;
}
