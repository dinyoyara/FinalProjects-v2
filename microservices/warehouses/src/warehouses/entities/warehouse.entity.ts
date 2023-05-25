import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

import { HAZARDOUS, NON_HAZARDOUS, UNKNOWN } from '../../constants';
import { Customer } from './customer.entity';
import { Movement } from 'src/movements/entities/movement.entity';

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

    @Column({ type: 'int' })
    @Field({ description: 'Warehouse size' })
    size: number;

    @Column({ type: 'uuid' })
    @Field({ description: 'Warehouse owner id' })
    customerId: string;

    @Field((type) => Customer)
    customer?: Customer;

    @OneToMany((type) => Movement, (movement) => movement.exportedWarehouse)
    @Field()
    exportedMovements: Movement[];

    @OneToMany((type) => Movement, (movement) => movement.importedWarehouse)
    @Field()
    importedMovements: Movement[];
}
