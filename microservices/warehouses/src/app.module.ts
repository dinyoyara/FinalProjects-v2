import { Module } from '@nestjs/common';
import { IntrospectAndCompose } from '@apollo/gateway';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            server: {},
            gateway: {
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        { name: 'customers', url: 'http://localhost:3001/graphql' },
                        { name: 'movements', url: 'http://localhost:3002/graphql' },
                        { name: 'products', url: 'http://localhost:3003/graphql' }
                    ]
                })
            }
        })
    ]
})
export class AppModule {}
