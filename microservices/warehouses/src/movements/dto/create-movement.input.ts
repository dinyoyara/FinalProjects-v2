import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovementInput {
    @Field({ description: 'Date of the movement' })
    date: Date;

    @Field()
    productCount: number;

    @Field({ description: 'Id of the moved product' })
    productId: string;

    @Field({ description: 'Id of the exported warehouse', nullable: true })
    exportedWarehouseId: string;

    @Field({ description: 'Id of the imported warehouse', nullable: true })
    importedWarehouseId: string;
}
