import { InputType, Field } from '@nestjs/graphql';
import { Length, Min, IsEnum, IsUUID } from 'class-validator';

import { HAZARDOUS, NON_HAZARDOUS, UNKNOWN } from '../../constants';

@InputType()
export class UpdateWarehouseInput {
    @IsUUID()
    @Field()
    id: string;

    @Length(3)
    @Field()
    name: string;

    @IsEnum([HAZARDOUS, NON_HAZARDOUS, UNKNOWN])
    @Field()
    type: string;

    @Min(10)
    @Field()
    size: number;

    @IsUUID()
    @Field()
    customerId: string;
}
