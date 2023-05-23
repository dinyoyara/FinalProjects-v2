import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
    if (req.headers?.authorization) {
        //Validate jwt
        return { userId: 'someuuid' }; // return dummy userId
    }
    throw new UnauthorizedException();
};
