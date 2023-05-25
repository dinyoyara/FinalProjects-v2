import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

import { Product } from './product.entity';
import { Warehouse } from '../../warehouses/entities/warehouse.entity';
import { type } from 'os';

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
    @Field((type) => ID, { description: 'Id of the moved product' })
    productId: string;

    @Field((type) => Product)
    product?: Product;

    @Column({ type: 'uuid' })
    @Field((type) => ID, { description: 'Id of the exported warehouse' })
    exportedWarehouseId: string;

    @ManyToOne((type) => Warehouse, (warehouse) => warehouse.exportedMovements)
    @Field((type) => Warehouse)
    exportedWarehouse?: Warehouse;

    @Column({ type: 'uuid' })
    @Field((type) => ID, { description: 'Id of the imported warehouse' })
    importedWarehouseId: string;

    @ManyToOne((type) => Warehouse, (warehouse) => warehouse.importedMovements)
    @Field((type) => Warehouse)
    importedWarehouse?: Warehouse;
}
