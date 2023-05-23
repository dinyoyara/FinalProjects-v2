import { InputType, Field } from '@nestjs/graphql';
import { Length, Min, IsEnum } from 'class-validator';

import { HAZARDOUS, NON_HAZARDOUS } from '../../constants';

@InputType()
export class CreateProductInput {
    @Length(3)
    @Field({ description: 'Product name', nullable: false })
    name: string;

    @IsEnum([HAZARDOUS, NON_HAZARDOUS])
    @Field({ description: 'Product type' })
    type: string;

    @Min(1)
    @Field({ description: 'Product size' })
    size: number;

    @Min(1)
    @Field({ description: 'Product price' })
    price: number;
}
