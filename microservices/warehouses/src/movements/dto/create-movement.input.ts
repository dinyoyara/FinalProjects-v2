import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovementInput {
    @Field((type) => ID, { description: 'Movement unique identifier' })
    id: string;

    @Field({ description: 'Date of the movement' })
    date: Date;

    @Field()
    productCount: number;

    @Field((type) => ID, { description: 'Id of the moved product' })
    productId: string;

    @Field((type) => ID, { description: 'Id of the exported warehouse' })
    exportedWarehouseId: string;

    @Field((type) => ID, { description: 'Id of the imported warehouse' })
    importedWarehouseId: string;
}
