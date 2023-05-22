import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
@Directive('@key(fields: "id")')
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => ID, { description: 'Customer unique identifier' })
    id: string;

    @Column()
    @Field({ description: 'Customer name', nullable: false })
    name: string;

    @Column()
    @Field({ description: 'Customer email', nullable: false })
    email: string;

    @Column()
    @Field({ description: 'Customer passport', nullable: false })
    passport: string;
}
