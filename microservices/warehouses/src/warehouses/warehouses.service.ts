import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Warehouse } from './entities/warehouse.entity';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';

@Injectable()
export class WarehousesService {
    constructor(@InjectRepository(Warehouse) private readonly warehousesRepo: Repository<Warehouse>) {}

    createAsync = (input: CreateWarehouseInput, customerId: string): Promise<Warehouse> => {
        const newWarehouse = this.warehousesRepo.create({ ...input, customerId });
        return this.warehousesRepo.save(newWarehouse);
    };

    findAllByCustomerAsync = (customerId: string): Promise<Warehouse[]> => {
        return this.warehousesRepo.find({ where: { customerId } });
    };

    findOneAsync = (id: string): Promise<Warehouse> => {
        return this.warehousesRepo.findOne({ where: { id } });
    };

    update = (input: UpdateWarehouseInput) => {
        const { id, ...restProps } = input;
        this.warehousesRepo.update(id, restProps);
    };

    removeAsync = async (id: string): Promise<Warehouse> => {
        const warehouseToRemove = await this.warehousesRepo.findOne({ where: { id } });
        return this.warehousesRepo.remove(warehouseToRemove);
    };
}
