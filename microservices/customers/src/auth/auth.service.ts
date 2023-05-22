import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { SingupInput } from './dto/singup.input';
import { SinginInput } from './dto/singin.input';
import { Customer } from '../customers/entities/customer.entity';
import { Token } from './entities/token.entity';
import { verifyPasswordAsync, hashPasswordAsync } from './helpers';

@Injectable()
export class AuthService {
    constructor(
        private jwt: JwtService,
        private config: ConfigService,
        @InjectRepository(Customer) private readonly userRepo: Repository<Customer>
    ) {}

    createAsync = async (input: SingupInput): Promise<Customer> => {
        const newCustomer = this.userRepo.create({
            ...input,
            password: await hashPasswordAsync(input.password)
        });
        return this.userRepo.save(newCustomer);
    };

    loginAsync = async (input: SinginInput): Promise<Token> => {
        const customer = await this.userRepo.findOne({ where: { email: input.email } });
        if (!customer) throw new BadRequestException(['email incorrect']);

        const correctPassword = await verifyPasswordAsync(input.password, customer.password);
        if (!correctPassword) throw new BadRequestException(['password incorrect']);

        return this.signTokenAsync(customer.id, customer.email, customer.name);
    };

    private signTokenAsync = async (id: string, email: string, name: string): Promise<Token> => {
        const payload = {
            id,
            email,
            name
        };
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '24h',
            secret: secret
        });

        return { token: token };
    };
}
