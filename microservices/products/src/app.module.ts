import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

import { config } from '../db/config';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...config,
            entities: [Product]
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: { path: 'schema.gql', federation: 2 }
        }),
        ProductsModule
    ]
})
export class AppModule {}
