import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

import { authContext } from './auth.context';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            server: {
                context: authContext
            },
            gateway: {
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        { name: 'customers', url: 'http://localhost:4001/graphql' },
                        { name: 'warehouses', url: 'http://localhost:4002/graphql' },
                        { name: 'products', url: 'http://localhost:4003/graphql' }
                    ]
                }),
                buildService({ url }) {
                    return new RemoteGraphQLDataSource({
                        url,
                        willSendRequest({ request, context }) {
                            request.http.headers.set('userid', context.userId ? context.userId : null);
                        }
                    });
                }
            }
        })
    ]
})
export class AppModule {}
