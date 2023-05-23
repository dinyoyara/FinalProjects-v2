import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

import { Warehouse } from './warehouse.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Customer {
    @Field((type) => ID)
    id: string;

    @Field((type) => [Warehouse])
    warehouses?: Warehouse[];
}
