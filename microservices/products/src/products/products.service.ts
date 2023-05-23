import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private readonly productsRepository: Repository<Product>) {}

    create = (input: CreateProductInput): Promise<Product> => {
        const newProduct = this.productsRepository.create(input);
        return this.productsRepository.save(newProduct);
    };

    findAll = (): Promise<Product[]> => {
        return this.productsRepository.find();
    };

    findOne = (id: string): Promise<Product> => {
        return this.productsRepository.findOne({ where: { id } });
    };
}
