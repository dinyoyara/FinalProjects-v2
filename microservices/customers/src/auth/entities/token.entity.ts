import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
    @Field({ description: 'Token value', nullable: false })
    token: string;
}
