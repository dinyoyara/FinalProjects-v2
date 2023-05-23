import { createParamDecorator } from '@nestjs/common';
import { GraphQLExecutionContext } from '@nestjs/graphql';

export const CurrentUserId = createParamDecorator((_data: any, ctx: GraphQLExecutionContext) => {
    try {
        const headers = ctx.getArgs()[2].req.headers;
        console.log(headers);
        if (headers.userid) {
            console.log(headers.userid);
        }
    } catch (error) {
        return null;
    }
});
