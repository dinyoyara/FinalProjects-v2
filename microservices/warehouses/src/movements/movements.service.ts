import { Injectable } from '@nestjs/common';
import { CreateMovementInput } from './dto/create-movement.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movement } from './entities/movement.entity';

@Injectable()
export class MovementsService {
    constructor(@InjectRepository(Movement) private readonly movementsRepo: Repository<Movement>) {}

    createAsync = (input: CreateMovementInput): Promise<Movement> => {
        const newMovement = this.movementsRepo.create(input);
        return this.movementsRepo.save(newMovement);
    };

    findAllExportedByWarehouseAsync = (warehouseId: string): Promise<Movement[]> => {
        return this.movementsRepo.find({
            where: { exportedWarehouseId: warehouseId }
        });
    };
    findAllImportedByWarehouseAsync = (warehouseId: string): Promise<Movement[]> => {
        return this.movementsRepo.find({
            where: { importedWarehouseId: warehouseId }
        });
    };

    findAllByProductAsync = (productId: string): Promise<Movement[]> => {
        return this.movementsRepo.find({ where: { productId } });
    };

    // findAllByWarehouseAsync = (warehouseId: string): Promise<Movement[]> => {
    //     return this.movementsRepo.find({
    //         where: [{ exportedWarehouseId: warehouseId }, { importedWarehouseId: warehouseId }]
    //     });
    // };
}
