import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private readonly customerRepo: Repository<Customer>) {}

    findOne = (id: string): Promise<Customer> => {
        return this.customerRepo.findOne({ where: { id } });
    };
}
