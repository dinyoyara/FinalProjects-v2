import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CustomersResolver } from './customers.resolver';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    providers: [CustomersResolver, AuthService, JwtService]
})
export class CustomersModule {}
