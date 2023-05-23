import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

import { HAZARDOUS, NON_HAZARDOUS, UNKNOWN } from '../../constants';
import { Customer } from './customer.entity';

@Entity({ name: 'warehouses' })
@ObjectType()
@Directive('@key(fields: "id")')
export class Warehouse {
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => ID, { description: 'Warehouse unique identifier' })
    id: string;

    @Column()
    @Field({ description: 'Warehouse name', nullable: false })
    name: string;

    @Column({
        type: 'enum',
        enum: [HAZARDOUS, NON_HAZARDOUS, UNKNOWN],
        default: UNKNOWN
    })
    @Field({ description: 'Warehouse type' })
    type: string;

    @Column({
        type: 'int'
    })
    @Field({ description: 'Warehouse size' })
    size: number;

    @Column()
    @Field({ description: 'Warehouse owner id' })
    customerId: string;

    @Field((type) => Customer)
    customer: Customer;
}
