import { createParamDecorator } from '@nestjs/common';
import { GraphQLExecutionContext } from '@nestjs/graphql';

export const CurrentUserId = createParamDecorator((_data: any, ctx: GraphQLExecutionContext) => {
    try {
        const headers = ctx.getArgs()[2].req.headers;
        if (headers.userid) {
            return headers.userid;
        }
    } catch (error) {
        return null;
    }
});
