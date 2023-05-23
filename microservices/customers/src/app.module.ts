import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

import { config } from '../db/config';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...config,
            entities: [Customer]
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: { path: 'schema.gql', federation: 2 }
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        CustomersModule
    ]
})
export class AppModule {}
