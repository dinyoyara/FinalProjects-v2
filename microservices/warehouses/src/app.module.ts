import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

import { config } from '../db/config';
import { WarehousesModule } from './warehouses/warehouses.module';
import { Warehouse } from './warehouses/entities/warehouse.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...config,
            entities: [Warehouse]
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: { path: 'schema.gql', federation: 2 }
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        WarehousesModule
    ]
})
export class AppModule {}
