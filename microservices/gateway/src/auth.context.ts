import * as dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';

dotenv.config();

export const authContext = ({ req }) => {
    if (!req.headers?.authorization) return null;
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return null;
    const payload = verify(token, process.env.JWT_SECRET);

    if (!payload.id) return null;
    return { userId: payload.id };
};
