import { Directive, Field, Int, ID, ObjectType } from '@nestjs/graphql';

import { Movement } from './movement.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Product {
    @Field((type) => ID)
    id: string;

    @Field((type) => [Movement])
    movements: Movement[];
}
