import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

import { Product } from './product.entity';
import { Warehouse } from '../../warehouses/entities/warehouse.entity';

@Entity({ name: 'movements' })
@ObjectType()
@Directive('@key(fields: "id")')
export class Movement {
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => ID, { description: 'Movement unique identifier' })
    id: string;

    @Column({ type: 'date' })
    @Field({ description: 'Date of the movement' })
    date: Date;

    @Column({ type: 'int' })
    @Field()
    productCount: number;

    @Column()
    @Field({ description: 'Id of the moved product' })
    productId: string;

    @Field((type) => Product)
    product: Product;

    @Column({ nullable: true })
    @Field({ description: 'Id of the exported warehouse', nullable: true })
    exportedWarehouseId: string;

    @ManyToOne((type) => Warehouse, (warehouse) => warehouse.exportedMovements, {
        onDelete: 'SET NULL',
        nullable: true
    })
    @Field((type) => Warehouse, { nullable: true })
    exportedWarehouse: Warehouse;

    @Column({ nullable: true })
    @Field({ description: 'Id of the imported warehouse', nullable: true })
    importedWarehouseId: string;

    @ManyToOne((type) => Warehouse, (warehouse) => warehouse.importedMovements, { onDelete: 'SET NULL' })
    @Field((type) => Warehouse, { nullable: true })
    importedWarehouse: Warehouse;
}
