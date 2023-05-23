import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

import { HAZARDOUS, NON_HAZARDOUS } from '../../constants';

@Entity({ name: 'products' })
@ObjectType()
@Directive('@key(fields: "id")')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => ID, { description: 'Product unique identifier' })
    id: string;

    @Column()
    @Field({ description: 'Product name', nullable: false })
    name: string;

    @Column({
        type: 'enum',
        enum: [HAZARDOUS, NON_HAZARDOUS]
    })
    @Field({ description: 'Product type' })
    type: string;

    @Column({
        type: 'int'
    })
    @Field({ description: 'Product size' })
    size: number;

    @Column()
    @Field({ description: 'Product price' })
    price: number;
}
