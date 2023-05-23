import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../auth/auth.service';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CustomersResolver } from './customers.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    providers: [CustomersResolver, CustomerService, AuthService, JwtService]
})
export class CustomersModule {}
